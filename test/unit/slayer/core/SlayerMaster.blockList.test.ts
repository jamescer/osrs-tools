import { beforeEach, describe, expect, it } from '@jest/globals';
import { SlayerMaster } from 'src/runescape/model/slayer/core/SlayerMaster';
import { Task } from 'src/runescape/model/slayer/core/Task';

describe('SlayerMaster - Block list', () => {
  let tasks: Task[];
  let master: SlayerMaster;

  beforeEach(() => {
    tasks = [
      new Task('Banshee', 10, 15, [], null, null, [], 5),
      new Task('Cave Crawler', 8, 12, [], null, null, [], 3),
      new Task('Crawling Hand', 5, 10, [], null, null, [], 2),
    ];
    master = new SlayerMaster('Test Master', tasks, 'Testville', 50, '');
  });

  it('should have no blocked tasks by default', () => {
    expect(master.getBlockedTasks()).toEqual([]);
    expect(master.isTaskBlocked('Banshee')).toBe(false);
    expect(master.getAvailableTasks()).toEqual(tasks);
  });

  it('should block a task the master assigns', () => {
    expect(master.blockTask('Banshee')).toBe(true);
    expect(master.isTaskBlocked('Banshee')).toBe(true);
    expect(master.getBlockedTasks()).toEqual(['banshee']);
  });

  it('should be case insensitive when blocking and checking', () => {
    master.blockTask('BANSHEE');
    expect(master.isTaskBlocked('banshee')).toBe(true);
    expect(master.isTaskBlocked('Banshee')).toBe(true);
  });

  it("should refuse to block a task this master doesn't assign", () => {
    expect(master.blockTask('Abyssal Sire')).toBe(false);
    expect(master.getBlockedTasks()).toEqual([]);
  });

  it('should exclude blocked tasks from getAvailableTasks()', () => {
    master.blockTask('Banshee');
    const available = master.getAvailableTasks();
    expect(available).toHaveLength(2);
    expect(available.map(t => t.getName())).toEqual(['Cave Crawler', 'Crawling Hand']);
  });

  it('should unblock a task, restoring it to availability', () => {
    master.blockTask('Banshee');
    master.unblockTask('Banshee');
    expect(master.isTaskBlocked('Banshee')).toBe(false);
    expect(master.getAvailableTasks()).toEqual(tasks);
  });

  it('should never return a blocked task from getRandomTask()', () => {
    master.blockTask('Banshee');
    master.blockTask('Cave Crawler');

    for (let i = 0; i < 50; i++) {
      const task = master.getRandomTask();
      expect(task?.getName()).toBe('Crawling Hand');
    }
  });

  it('should return null from getRandomTask() when every task is blocked', () => {
    tasks.forEach(task => master.blockTask(task.getName()));
    expect(master.getRandomTask()).toBeNull();
  });

  it('should not affect getTasks() or getTotalWeight(), which still include blocked tasks', () => {
    master.blockTask('Banshee');
    expect(master.getTasks()).toEqual(tasks);
    expect(master.getTotalWeight()).toBe(10);
  });
});
