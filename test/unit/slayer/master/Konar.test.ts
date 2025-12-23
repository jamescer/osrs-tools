import { KonarQuoMaten } from '../../../../source/runescape/model/slayer/Masters';

describe('Konar Quo Maten', () => {
  it('should be defined', () => {
    expect(KonarQuoMaten).toBeDefined();
  });

  it('should have a list of tasks', () => {
    const tasks = KonarQuoMaten.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should have the correct name', () => {
    expect(KonarQuoMaten.name).toBe('Konar Quo Maten');
  });

  it('should have the correct location', () => {
    expect(KonarQuoMaten.location).toBe('Mount Karuulm');
  });

  it('should have the correct wiki URL', () => {
    expect(KonarQuoMaten.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Konar_Quo_Maten');
  });
});
