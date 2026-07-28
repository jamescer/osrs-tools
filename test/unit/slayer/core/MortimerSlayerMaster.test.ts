import { describe, expect, it } from '@jest/globals';
import { MortimerSlayerMaster } from 'src/runescape/model/slayer/core/MortimerSlayerMaster';
import { Task } from 'src/runescape/model/slayer/core/Task';

describe('MortimerSlayerMaster', () => {
  const buildMaster = () =>
    new MortimerSlayerMaster({
      location: 'Wyrmscraig',
      minimumCombatLevel: 0,
      name: 'Mortimer',
      pointsTable: {},
      tasks: [
        new Task('Crawling hands', 35, 50, [], null, null, [], 10),
        new Task('Cave crawlers', 35, 50, [], null, null, [], 10),
        new Task('Hydras', 150, 200, [], null, null, [], 10),
      ],
      wikiUrl: 'https://oldschool.runescape.wiki/w/Mortimer',
    });

  it('defaults to Mortimer-specific skip and block costs', () => {
    const master = buildMaster();
    expect(master.getSkipCost()).toBe(100);
    expect(master.getBlockSlots()).toBe(2);
    expect(master.getBlockSlotCost()).toBe(120);
  });

  it('reports that all tasks have superior variants and Venators can be assigned directly', () => {
    const master = buildMaster();
    expect(master.hasSuperiorVariants()).toBe(true);
    expect(master.assignsVenatorsDirectly()).toBe(true);
  });

  it('offers 2 task choices before 50 completed tasks', () => {
    const master = buildMaster();
    expect(master.getTaskChoiceCount(0)).toBe(2);
    expect(master.getTaskChoiceCount(49)).toBe(2);
  });

  it('offers 3 task choices once 50 tasks are completed (Third Task Choice Mortifier)', () => {
    const master = buildMaster();
    expect(master.getTaskChoiceCount(50)).toBe(3);
  });

  it('never offers the same task twice within a single set of choices', () => {
    const master = buildMaster();
    for (let i = 0; i < 25; i++) {
      const choices = master.getTaskChoices(0);
      const names = choices.map(task => task.getName());
      expect(new Set(names).size).toBe(names.length);
      expect(choices.length).toBeLessThanOrEqual(2);
    }
  });

  it('returns the correctly unlocked Mortifiers for a given task count', () => {
    const master = buildMaster();
    expect(master.getAvailableMortifiers(0).map(m => m.name)).toEqual(
      expect.arrayContaining(['Bonus Slayer Points', 'Quantity Modifier']),
    );
    expect(master.getAvailableMortifiers(0).map(m => m.name)).not.toContain('Third Task Choice');
    expect(master.getAvailableMortifiers(50).map(m => m.name)).toContain('Third Task Choice');
  });
});
