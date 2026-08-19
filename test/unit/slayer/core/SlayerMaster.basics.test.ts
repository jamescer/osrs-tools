import { describe, expect, it } from '@jest/globals';
import { SlayerMaster } from 'src/runescape/model/slayer/core/SlayerMaster';
import { Task } from 'src/runescape/model/slayer/core/Task';

describe('SlayerMaster - basic getters', () => {
  const tasks: Task[] = [new Task('Banshee', 10, 15, [], null, null, [], 5)];
  const taskPoints = { 1: 2, 10: 5 };
  const master = new SlayerMaster(
    'Test Master',
    tasks,
    'Testville',
    50,
    'https://oldschool.runescape.wiki/w/Test_Master',
    taskPoints,
    undefined,
    'https://oldschool.runescape.wiki/w/Special:FilePath/Test_Master.png',
  );

  it('getLocation() returns the configured location', () => {
    expect(master.getLocation()).toBe('Testville');
  });

  it('getMinimumCombatLevel() returns the configured level requirement', () => {
    expect(master.getMinimumCombatLevel()).toBe(50);
  });

  it('getWikiUrl() returns the configured wiki URL', () => {
    expect(master.getWikiUrl()).toBe('https://oldschool.runescape.wiki/w/Test_Master');
  });

  it('getImageUrl() returns the configured portrait image URL', () => {
    expect(master.getImageUrl()).toBe('https://oldschool.runescape.wiki/w/Special:FilePath/Test_Master.png');
  });

  it('getPointsForTaskInterval() returns the points for a known interval', () => {
    expect(master.getPointsForTaskInterval(1)).toBe(2);
    expect(master.getPointsForTaskInterval(10)).toBe(5);
  });

  it('getPointsForTaskInterval() returns 0 for an unconfigured interval', () => {
    expect(master.getPointsForTaskInterval(999)).toBe(0);
  });

  it('getTasks() returns the assigned tasks', () => {
    expect(master.getTasks()).toEqual(tasks);
  });

  it('toString() includes the master name', () => {
    expect(master.toString()).toContain('Test Master');
  });
});
