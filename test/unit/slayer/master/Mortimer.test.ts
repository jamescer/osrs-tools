import { describe, expect, it } from '@jest/globals';
import { Mortimer } from 'src/runescape/model/slayer/Masters';

describe('Mortimer', () => {
  it('should be defined', () => {
    expect(Mortimer).toBeDefined();
  });
  it('should have a list of tasks', () => {
    const tasks = Mortimer.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });
  it('should have the correct name', () => {
    expect(Mortimer.name).toBe('Mortimer');
  });
  it('should have the correct location', () => {
    expect(Mortimer.location).toBe('Wyrmscraig');
  });
  it('should have the correct wiki URL', () => {
    expect(Mortimer.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Mortimer');
  });
  it('should have the correct image URL', () => {
    expect(Mortimer.imageUrl).toBe(
      'https://oldschool.runescape.wiki/w/Special:FilePath/Wyrmscraig%20-%20Activities%20%26%20Lock%20In%20Poll%20(5).png',
    );
  });
  it('should get tasks the same way other Slayer Masters do', () => {
    expect(Mortimer.getTasks()).toBe(Mortimer.tasks);
    expect(Mortimer.getRandomTask()).not.toBeNull();
  });
});
