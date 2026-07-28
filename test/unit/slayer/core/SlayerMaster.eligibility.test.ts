import { describe, expect, it } from '@jest/globals';
import {
  QuestRequirement,
  SlayerLevelRequirement,
  SlayerUnlockRequirement,
} from 'src/runescape/model/Requirement';
import { SlayerMaster } from 'src/runescape/model/slayer/core/SlayerMaster';
import { Task } from 'src/runescape/model/slayer/core/Task';

describe('SlayerMaster - task weighting eligibility', () => {
  // The wiki's worked example: https://oldschool.runescape.wiki/w/Slayer#Task_weighting
  const buildWikiExampleMaster = () =>
    new SlayerMaster(
      'Test Master',
      [
        new Task('Spiritual creatures', 10, 15, [new SlayerLevelRequirement(83)], null, null, [], 8),
        new Task('Dark beast', 10, 15, [new SlayerLevelRequirement(90)], null, null, [], 10),
        new Task('TzHaar', 10, 15, [new SlayerUnlockRequirement('TzHaar tasks')], null, null, [], 9),
        new Task('Abyssal demon', 10, 15, [new SlayerLevelRequirement(85)], null, null, [], 10),
        new Task('Aviansie', 10, 15, [new SlayerUnlockRequirement('Aviansie tasks')], null, null, [], 6),
        new Task('Metal dragons', 10, 15, [], null, null, [], 14),
      ],
      'Testville',
      0,
      '',
    );

  it('does not check requirements when no player context is given (back-compat)', () => {
    const master = buildWikiExampleMaster();
    expect(master.getAvailableTasks()).toHaveLength(6);
  });

  it('excludes tasks the player lacks the Slayer level for, without a boost', () => {
    const master = buildWikiExampleMaster();
    const available = master.getAvailableTasks({ slayerLevel: 85 });
    expect(available.map(t => t.getName()).sort()).toEqual(
      ['Abyssal demon', 'Metal dragons', 'Spiritual creatures'].sort(),
    );
  });

  it('excludes tasks locked behind an unpurchased Slayer unlock', () => {
    const master = buildWikiExampleMaster();
    const available = master.getAvailableTasks({ slayerLevel: 99 });
    expect(available.map(t => t.getName())).not.toContain('TzHaar');
    expect(available.map(t => t.getName())).not.toContain('Aviansie');
  });

  it('matches the wiki worked example exactly: 85 Slayer, TzHaar/Aviansie locked', () => {
    const master = buildWikiExampleMaster();
    const context = { slayerLevel: 85 };

    const available = master.getAvailableTasks(context);
    expect(available.map(t => t.getName()).sort()).toEqual(
      ['Abyssal demon', 'Metal dragons', 'Spiritual creatures'].sort(),
    );

    const chances = master.getTaskChances(context);
    expect(chances.get('Abyssal demon')).toBeCloseTo(31.25, 5);
    expect(chances.get('Spiritual creatures')).toBeCloseTo(25, 5);
    expect(chances.get('Metal dragons')).toBeCloseTo(43.75, 5);
    expect(chances.has('Dark beast')).toBe(false);
    expect(chances.has('TzHaar')).toBe(false);
    expect(chances.has('Aviansie')).toBe(false);
  });

  it('a wild-pie boost to the required level does not unlock the task', () => {
    const master = buildWikiExampleMaster();
    // Base 85 Slayer, boosted to 90 - still shouldn't unlock Dark beast (requires base 90).
    const available = master.getAvailableTasks({ slayerLevel: 85 });
    expect(available.map(t => t.getName())).not.toContain('Dark beast');
  });

  it('excludes tasks whose quest requirement is not met', () => {
    const master = new SlayerMaster(
      'Test Master',
      [
        new Task('Terror dogs', 40, 70, [new QuestRequirement('Haunted Mine')], null, null, [], 8),
        new Task('Zombies', 40, 70, [], null, null, [], 8),
      ],
      'Testville',
      0,
      '',
    );

    expect(master.getAvailableTasks({ slayerLevel: 1 }).map(t => t.getName())).toEqual(['Zombies']);
    expect(
      master
        .getAvailableTasks({ slayerLevel: 1, completedQuests: ['Haunted Mine'] })
        .map(t => t.getName())
        .sort(),
    ).toEqual(['Terror dogs', 'Zombies']);
  });

  it('excludes blocked tasks from the weight sum in addition to requirement-locked ones', () => {
    const master = buildWikiExampleMaster();
    master.blockTask('Metal dragons');

    const context = { slayerLevel: 85 };
    const chances = master.getTaskChances(context);
    // Total weight now: Abyssal demon 10 + Spiritual creatures 8 = 18
    expect(chances.get('Abyssal demon')).toBeCloseTo((10 / 18) * 100, 5);
    expect(chances.get('Spiritual creatures')).toBeCloseTo((8 / 18) * 100, 5);
    expect(chances.has('Metal dragons')).toBe(false);
  });

  it('getRandomTask() never returns a requirement-locked task', () => {
    const master = buildWikiExampleMaster();
    const context = { slayerLevel: 85 };

    for (let i = 0; i < 100; i++) {
      const task = master.getRandomTask(context);
      expect(['Abyssal demon', 'Metal dragons', 'Spiritual creatures']).toContain(task?.getName());
    }
  });

  it('getTaskChance() returns 0 for an unavailable or unknown task', () => {
    const master = buildWikiExampleMaster();
    const context = { slayerLevel: 85 };
    expect(master.getTaskChance('Dark beast', context)).toBe(0);
    expect(master.getTaskChance('Nonexistent monster', context)).toBe(0);
  });
});
