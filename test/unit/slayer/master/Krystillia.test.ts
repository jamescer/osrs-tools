import { Krystilia } from '../../../../source/runescape/model/slayer/Masters';

describe('Krystilia', () => {
  it('should be defined', () => {
    expect(Krystilia).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Krystilia.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(Krystilia.name).toBe('Krystilia');
  });

  it('should have the correct location', () => {
    expect(Krystilia.location).toBe('Edgeville');
  });

  it('should have the correct wiki URL', () => {
    expect(Krystilia.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Krystilia');
  });
});
