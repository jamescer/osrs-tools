import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { SlayerMaster } from 'src/runescape/model/slayer/core/SlayerMaster';
import { Task } from 'src/runescape/model/slayer/core/Task';

describe('SlayerMaster - weighted random task selection', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('cumulative weight boundaries (deterministic via mocked Math.random)', () => {
    // Weights [5, 3, 2] -> total 10. Cumulative bounds: Banshee [0,5], Cave Crawler (5,8], Crawling Hand (8,10].
    const buildMaster = () =>
      new SlayerMaster(
        'Test Master',
        [
          new Task('Banshee', 10, 15, [], null, null, [], 5),
          new Task('Cave Crawler', 8, 12, [], null, null, [], 3),
          new Task('Crawling Hand', 5, 10, [], null, null, [], 2),
        ],
        'Testville',
        0,
        '',
      );

    it.each([
      { expected: 'Banshee', roll: 0 },
      { expected: 'Banshee', roll: 0.49999 },
      { expected: 'Banshee', roll: 0.5 }, // randomWeight === 5, falls on the first task's inclusive upper bound
      { expected: 'Cave Crawler', roll: 0.50001 },
      { expected: 'Cave Crawler', roll: 0.79999 },
      { expected: 'Cave Crawler', roll: 0.8 }, // randomWeight === 8, second task's inclusive upper bound
      { expected: 'Crawling Hand', roll: 0.80001 },
      { expected: 'Crawling Hand', roll: 0.99999 },
    ])('Math.random() = $roll -> $expected', ({ expected, roll }) => {
      jest.spyOn(Math, 'random').mockReturnValue(roll);
      const master = buildMaster();
      expect(master.getRandomTask()?.getName()).toBe(expected);
    });

    it('never selects a task once the roll exceeds the total weight window', () => {
      // Math.random() is always < 1, so randomWeight is always < availableWeight; the loop's
      // fallback `return null` after the for-of should be unreachable for a positive-weight pool.
      jest.spyOn(Math, 'random').mockReturnValue(0.999999999);
      const master = buildMaster();
      expect(master.getRandomTask()).not.toBeNull();
    });
  });

  describe('statistical distribution (real randomness, large sample)', () => {
    it('selects each task with frequency proportional to its weight', () => {
      const tasks = [
        new Task('Banshee', 10, 15, [], null, null, [], 5), // 25%
        new Task('Cave Crawler', 8, 12, [], null, null, [], 3), // 15%
        new Task('Crawling Hand', 5, 10, [], null, null, [], 12), // 60%
      ];
      const master = new SlayerMaster('Test Master', tasks, 'Testville', 0, '');

      const trials = 50_000;
      const counts: Record<string, number> = { Banshee: 0, 'Cave Crawler': 0, 'Crawling Hand': 0 };
      for (let i = 0; i < trials; i++) {
        const name = master.getRandomTask()?.getName();
        if (name) counts[name]++;
      }

      // Wide tolerance (+/- 2 percentage points) to keep this non-flaky while still catching a
      // badly broken weighting (e.g. uniform selection, or weights applied in the wrong order).
      expect(counts.Banshee / trials).toBeGreaterThan(0.23);
      expect(counts.Banshee / trials).toBeLessThan(0.27);
      expect(counts['Cave Crawler'] / trials).toBeGreaterThan(0.13);
      expect(counts['Cave Crawler'] / trials).toBeLessThan(0.17);
      expect(counts['Crawling Hand'] / trials).toBeGreaterThan(0.58);
      expect(counts['Crawling Hand'] / trials).toBeLessThan(0.62);
    });

    it('respects requirement-filtered weights when a player context is provided', () => {
      // Same wiki worked example used by SlayerMaster.eligibility.test.ts, at 85 Slayer:
      // only Abyssal demon (10), Metal dragons (14), Spiritual creatures (8) remain -> total 32.
      const master = new SlayerMaster(
        'Test Master',
        [
          new Task('Spiritual creatures', 10, 15, [], null, null, [], 8),
          new Task('Dark beast', 10, 15, [], null, null, [], 10),
          new Task('Abyssal demon', 10, 15, [], null, null, [], 10),
          new Task('Metal dragons', 10, 15, [], null, null, [], 14),
        ],
        'Testville',
        0,
        '',
      );
      // Simulate the player not qualifying for Dark beast by blocking it - keeps this test
      // focused purely on the weight math rather than duplicating the Requirement plumbing
      // already covered in SlayerMaster.eligibility.test.ts.
      master.blockTask('Dark beast');

      const trials = 40_000;
      const counts: Record<string, number> = {
        'Abyssal demon': 0,
        'Metal dragons': 0,
        'Spiritual creatures': 0,
      };
      for (let i = 0; i < trials; i++) {
        const name = master.getRandomTask()?.getName();
        expect(name).not.toBe('Dark beast');
        if (name) counts[name]++;
      }

      expect(counts['Spiritual creatures'] / trials).toBeCloseTo(8 / 32, 1);
      expect(counts['Abyssal demon'] / trials).toBeCloseTo(10 / 32, 1);
      expect(counts['Metal dragons'] / trials).toBeCloseTo(14 / 32, 1);
    });
  });

  describe('zero-weight and empty-pool edge cases', () => {
    it('never selects a zero-weight task', () => {
      const master = new SlayerMaster(
        'Test Master',
        [new Task('Banshee', 10, 15, [], null, null, [], 0), new Task('Cave Crawler', 8, 12, [], null, null, [], 5)],
        'Testville',
        0,
        '',
      );

      for (let i = 0; i < 1000; i++) {
        expect(master.getRandomTask()?.getName()).toBe('Cave Crawler');
      }
    });

    it('returns null when every task has zero weight', () => {
      const master = new SlayerMaster(
        'Test Master',
        [new Task('Banshee', 10, 15, [], null, null, [], 0), new Task('Cave Crawler', 8, 12, [], null, null, [], 0)],
        'Testville',
        0,
        '',
      );

      expect(master.getRandomTask()).toBeNull();
    });

    it('returns null when there are no tasks at all', () => {
      const master = new SlayerMaster('Test Master', [], 'Testville', 0, '');
      expect(master.getRandomTask()).toBeNull();
    });

    it('always selects the sole task when only one is available', () => {
      const master = new SlayerMaster(
        'Test Master',
        [new Task('Banshee', 10, 15, [], null, null, [], 7)],
        'Testville',
        0,
        '',
      );

      for (let i = 0; i < 100; i++) {
        expect(master.getRandomTask()?.getName()).toBe('Banshee');
      }
    });
  });

  describe('getTaskChances() / getTaskChance() consistency with getRandomTask()', () => {
    it('reported chances sum to 100 and agree with the weight ratios used by getRandomTask()', () => {
      const tasks = [
        new Task('Banshee', 10, 15, [], null, null, [], 5),
        new Task('Cave Crawler', 8, 12, [], null, null, [], 3),
        new Task('Crawling Hand', 5, 10, [], null, null, [], 2),
      ];
      const master = new SlayerMaster('Test Master', tasks, 'Testville', 0, '');

      const chances = master.getTaskChances();
      const total = Array.from(chances.values()).reduce((sum, chance) => sum + chance, 0);
      expect(total).toBeCloseTo(100, 10);

      expect(chances.get('Banshee')).toBeCloseTo(50, 10);
      expect(chances.get('Cave Crawler')).toBeCloseTo(30, 10);
      expect(chances.get('Crawling Hand')).toBeCloseTo(20, 10);

      expect(master.getTaskChance('banshee')).toBeCloseTo(50, 10);
    });

    it('excluding a task via block list redistributes its chance among the remaining tasks', () => {
      const tasks = [
        new Task('Banshee', 10, 15, [], null, null, [], 5),
        new Task('Cave Crawler', 8, 12, [], null, null, [], 3),
        new Task('Crawling Hand', 5, 10, [], null, null, [], 2),
      ];
      const master = new SlayerMaster('Test Master', tasks, 'Testville', 0, '');

      master.blockTask('Banshee');
      const chances = master.getTaskChances();
      expect(chances.get('Cave Crawler')).toBeCloseTo(60, 10); // 3 / (3 + 2) * 100
      expect(chances.get('Crawling Hand')).toBeCloseTo(40, 10); // 2 / (3 + 2) * 100
      expect(chances.has('Banshee')).toBe(false);
    });
  });
});
