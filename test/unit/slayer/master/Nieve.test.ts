import { Nieve } from '../../../../src/model/slayer/Masters';

describe('Nieve', () => {
  it('should be defined', () => {
    expect(Nieve).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Nieve.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(Nieve.name).toBe('Nieve');
  });

  it('should have the correct location', () => {
    expect(Nieve.location).toBe("Nieve's Cave");
  });

  it('should have the correct wiki URL', () => {
    expect(Nieve.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Nieve');
  });
});
