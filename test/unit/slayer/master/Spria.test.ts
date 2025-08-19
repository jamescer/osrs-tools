// Test for the Spria data from the JSON file
import { Spria } from '../../../../src/model/slayer/Masters';

describe('Spria', () => {
  it('should be defined', () => {
    expect(Spria).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Spria.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(Spria.name).toBe('Spria');
  });

  it('should have the correct location', () => {
    expect(Spria.location).toBe('Draynor Village');
  });

  it('should have the correct wiki URL', () => {
    expect(Spria.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Spria');
  });
});
