import { Vannaka } from '../../../../source/runescape/model/slayer/Masters';

describe('Vannaka', () => {
  it('should be defined', () => {
    expect(Vannaka).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = Vannaka.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(Vannaka.name).toBe('Vannaka');
  });

  it('should have the correct location', () => {
    expect(Vannaka.location).toBe('Edgeville Dungeon');
  });

  it('should have the correct wiki URL', () => {
    expect(Vannaka.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Vannaka');
  });
});
