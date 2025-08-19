// Test for the Tureal data from the JSON file
import { Duradel } from '../../../../src/model/slayer/Masters';

describe('Duradel', () => {
  it('should be defined', () => {
    expect(Duradel).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Duradel.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(Duradel.name).toBe('Duradel');
  });

  it('should have the correct location', () => {
    expect(Duradel.location).toBe('Shilo Village');
  });

  it('should have the correct wiki URL', () => {
    expect(Duradel.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Duradel');
  });
});

// We recommend installing an extension to run jest tests.
