// Test for the Tureal data from the JSON file
import { Turael } from '../../../../source/runescape/model/slayer/Masters';

describe('Turael', () => {
  it('should be defined', () => {
    expect(Turael).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Turael.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(Turael.name).toBe('Turael');
  });

  it('should have the correct location', () => {
    expect(Turael.location).toBe('Burthope');
  });

  it('should have the correct wiki URL', () => {
    expect(Turael.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Turael');
  });
});
