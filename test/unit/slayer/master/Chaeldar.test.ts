import { Chaeldar } from '../../../../src/model/slayer/Masters';

describe('Chaeldar', () => {
  it('should be defined', () => {
    expect(Chaeldar).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Chaeldar.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(Chaeldar.name).toBe('Chaeldar');
  });

  it('should have the correct location', () => {
    expect(Chaeldar.location).toBe('Zanaris');
  });

  it('should have the correct wiki URL', () => {
    expect(Chaeldar.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Chaeldar');
  });
});
