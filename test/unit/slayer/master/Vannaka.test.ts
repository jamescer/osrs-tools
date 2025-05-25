import { Vannaka } from '../../../../src/model/slayer/Masters';

describe('Vannaka', () => {
  it('should be defined', () => {
    expect(Vannaka).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Vannaka.getTasks();
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBe(17);
  });
});
