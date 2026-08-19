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
    master.setCompletedTasks(0);
    expect(master.getTaskChoiceCount()).toBe(2);
    master.setCompletedTasks(49);
    expect(master.getTaskChoiceCount()).toBe(2);
  });

  it('offers 3 task choices once 50 tasks are completed (Third Task Choice Mortifier)', () => {
    const master = buildMaster();
    master.setCompletedTasks(50);
    expect(master.getTaskChoiceCount()).toBe(3);
  });

  it('never offers the same task twice within a single set of choices', () => {
    const master = buildMaster();
    master.setCompletedTasks(0);
    for (let i = 0; i < 25; i++) {
      const choices = master.getTaskChoices();
      const names = choices.map(task => task.getName());
      expect(new Set(names).size).toBe(names.length);
      expect(choices.length).toBeLessThanOrEqual(2);
    }
  });

  it('returns the correctly unlocked Mortifiers for a given task count', () => {
    const master = buildMaster();
    master.setCompletedTasks(0);
    expect(master.getAvailableMortifiers().map(m => m.name)).toEqual(
      expect.arrayContaining(['Bonus Slayer Points', 'Quantity Modifier']),
    );
    expect(master.getAvailableMortifiers().map(m => m.name)).not.toContain('Third Task Choice');
    master.setCompletedTasks(50);
    expect(master.getAvailableMortifiers().map(m => m.name)).toContain('Third Task Choice');
  });

  it('defaults completedTasks to 0', () => {
    const master = buildMaster();
    expect(master.getCompletedTasks()).toBe(0);
  });

  it('sets completedTasks, clamping negative values to 0', () => {
    const master = buildMaster();
    master.setCompletedTasks(32);
    expect(master.getCompletedTasks()).toBe(32);
    master.setCompletedTasks(-5);
    expect(master.getCompletedTasks()).toBe(0);
  });

  it('increments completedTasks by 1 by default, or by a given amount', () => {
    const master = buildMaster();
    expect(master.incrementCompletedTasks()).toBe(1);
    expect(master.getCompletedTasks()).toBe(1);
    expect(master.incrementCompletedTasks(5)).toBe(6);
    expect(master.getCompletedTasks()).toBe(6);
  });

  it('can be constructed with an initial completedTasks value', () => {
    const master = new MortimerSlayerMaster({
      completedTasks: 15,
      location: 'Wyrmscraig',
      minimumCombatLevel: 0,
      name: 'Mortimer',
      pointsTable: {},
      tasks: [new Task('Crawling hands', 35, 50, [], null, null, [], 10)],
      wikiUrl: 'https://oldschool.runescape.wiki/w/Mortimer',
    });
    expect(master.getCompletedTasks()).toBe(15);
  });

  it('reacts to mutated completedTasks in getTaskChoiceCount and getAvailableMortifiers', () => {
    const master = buildMaster();
    expect(master.getTaskChoiceCount()).toBe(2);
    master.incrementCompletedTasks(50);
    expect(master.getTaskChoiceCount()).toBe(3);
    expect(master.getAvailableMortifiers().map(m => m.name)).toContain('Third Task Choice');
  });
});
