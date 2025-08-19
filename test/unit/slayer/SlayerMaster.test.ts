import { SlayerMaster } from '../../../src/model/slayer/SlayerMaster';
import { Task } from '../../../src/model/slayer/Task';

describe('SlayerMaster', () => {
  const mockTasks: Task[] = [
    new Task('Banshee', 0, 15, [], null, null, [], 5),
    new Task('Cave Crawler', 0, 15, [], null, null, [], 3),
    new Task('Crawling Hand', 0, 15, [], null, null, [], 2),
  ];
  const taskPoints = { 1: 2, 10: 10, 50: 50 };
  const eliteDiaryTaskPoints = { 1: 3, 10: 15, 50: 75 };
  const master = new SlayerMaster(
    'Test Master',
    mockTasks,
    'Testville',
    50,
    'https://wiki.test/Test_Master',
    taskPoints,
    eliteDiaryTaskPoints,
  );

  it('should construct with correct properties', () => {
    expect(master.getName()).toBe('Test Master');
    expect(master.getLocation()).toBe('Testville');
    expect(master.getMinimumCombatLevel()).toBe(50);
    expect(master.getWikiUrl()).toBe('https://wiki.test/Test_Master');
    expect(master.getTasks()).toEqual(mockTasks);
    expect(master.getTotalWeight()).toBe(10);
    expect(master.taskPoints).toEqual(taskPoints);
    expect(master.eliteDiaryTaskPoints).toEqual(eliteDiaryTaskPoints);
  });

  it('should calculate total weight correctly', () => {
    expect(master.calculateTotalWeight()).toBe(10);
  });

  it('should get points for task interval', () => {
    expect(master.getPointsForTaskInterval(1)).toBe(2);
    expect(master.getPointsForTaskInterval(10)).toBe(10);
    expect(master.getPointsForTaskInterval(50)).toBe(50);
    expect(master.getPointsForTaskInterval(99)).toBe(0);
  });

  it('should return a random task (weighted)', () => {
    // Run multiple times to check randomness and always return a valid task
    for (let i = 0; i < 10; i++) {
      const task = master.getRandomTask();
      expect(task).not.toBeNull();
      expect(mockTasks).toContain(task!);
    }
  });

  it('should return null for random task if no tasks', () => {
    const emptyMaster = new SlayerMaster('Empty', [], 'Nowhere', 1, '', {});
    expect(emptyMaster.getRandomTask()).toBeNull();
  });

  it('toString should return a string', () => {
    expect(typeof master.toString()).toBe('string');
    expect(master.toString()).toContain('Test Master');
  });
});
