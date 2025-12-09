import { getExperienceForLevel, getLevelForExperience } from '../../../src/tools/experience';

/**
 * Test the experience module
 */
describe('Experience', () => {
  it('should calculate experience for levels correctly', () => {
    const levelExpMap: { [level: number]: number } = {
      1: 0,
      2: 83,
      3: 174,
      4: 276,
      5: 388,
      10: 1154,
      20: 4073,
      30: 9330,
      50: 101333,
      70: 737627,
      99: 13034431,
    };

    for (const [levelStr, expectedExp] of Object.entries(levelExpMap)) {
      const level = parseInt(levelStr, 10);
      expect(getExperienceForLevel(level)).toBe(expectedExp);
    }
  });

  // test getLevelForExperience
  it('should calculate level for experience correctly', () => {
    const expLevelMap: { [exp: number]: number } = {
      0: 1,
      83: 2,
      174: 3,
      276: 4,
      388: 5,
      1304: 10,
      4073: 20,
      9330: 30,
      101333: 50,
      737627: 70,
      13034431: 99,
    };

    for (const [expStr, expectedLevel] of Object.entries(expLevelMap)) {
      const exp = parseInt(expStr, 10);
      expect(getLevelForExperience(exp)).toBe(expectedLevel);
    }
  });
});
