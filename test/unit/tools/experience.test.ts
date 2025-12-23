import { getExperienceForLevel, getLevelForExperience, LEVEL_TO_EXPERIENCE } from "../../../source/runescape/tools/experience";

/**
 * Test the experience module
 */
describe("Experience", () => {
  it("should calculate experience for levels correctly", () => {
    const levelExpMap = LEVEL_TO_EXPERIENCE;

    for (const [levelStr, expectedExp] of Object.entries(levelExpMap)) {
      const level = parseInt(levelStr, 10);
      expect(getExperienceForLevel(level)).toBe(expectedExp);
    }
  });

  // test getLevelForExperience
  it("should calculate level for experience correctly", () => {
    const expLevelMap = LEVEL_TO_EXPERIENCE;

    const randomExp = [0, 500, 2000, 10000, 50000, 200000, 1000000, 5000000, 13034431];

    for (const exp of randomExp) {
      let expectedLevel = 1;
      for (const [levelStr, levelExp] of Object.entries(expLevelMap)) {
        const level = parseInt(levelStr, 10);
        if (levelExp <= exp) {
          expectedLevel = level;
        } else {
          break;
        }
      }
      expect(getLevelForExperience(exp)).toBe(expectedLevel);
    }
  });
});
