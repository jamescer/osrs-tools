import { getExperienceForLevel, getLevelForExperience, LEVEL_TO_EXPERIENCE } from "../../../source/runescape/tools/experience";
import { expect, describe, it, beforeEach } from "@jest/globals";

/**
 * Comprehensive test suite for OSRS Experience system
 */
describe("Experience - Level and XP calculations", () => {
    describe("LEVEL_TO_EXPERIENCE table", () => {
        it("should have 99 levels", () => {
            expect(Object.keys(LEVEL_TO_EXPERIENCE).length).toBe(99);
        });

        it("should start at level 1 with experience value", () => {
            expect(LEVEL_TO_EXPERIENCE[1]).toBe(0);
        });

        it("should have level 99 with maximum experience", () => {
            expect(LEVEL_TO_EXPERIENCE[99]).toBeGreaterThan(10000000);
        });

        it("should have increasing experience values per level", () => {
            for (let level = 2; level <= 99; level++) {
                expect(LEVEL_TO_EXPERIENCE[level]).toBeGreaterThan(LEVEL_TO_EXPERIENCE[level - 1]);
            }
        });

        it("should have valid numeric values for all levels", () => {
            for (let level = 1; level <= 99; level++) {
                const exp = LEVEL_TO_EXPERIENCE[level];
                expect(typeof exp).toBe("number");
                expect(Number.isInteger(exp)).toBe(true);
                expect(exp).toBeGreaterThanOrEqual(0);
            }
        });

        it("should match expected milestone levels", () => {
            // Common OSRS experience checkpoints
            expect(LEVEL_TO_EXPERIENCE[10]).toBe(1154);
            expect(LEVEL_TO_EXPERIENCE[25]).toBe(32578);
            expect(LEVEL_TO_EXPERIENCE[50]).toBe(273742);
            expect(LEVEL_TO_EXPERIENCE[75]).toBe(2895493);
            expect(LEVEL_TO_EXPERIENCE[99]).toBe(13034431);
        });
    });

    describe("getExperienceForLevel", () => {
        it("should calculate experience for all levels correctly", () => {
            const levelExpMap = LEVEL_TO_EXPERIENCE;
            for (const [levelStr, expectedExp] of Object.entries(levelExpMap)) {
                const level = parseInt(levelStr, 10);
                expect(getExperienceForLevel(level)).toBe(expectedExp);
            }
        });

        it("should return 0 for level 1", () => {
            expect(getExperienceForLevel(1)).toBe(0);
        });

        it("should return maximum experience for level 99", () => {
            expect(getExperienceForLevel(99)).toBe(13034431);
        });

        it("should support all levels 1-99", () => {
            for (let level = 1; level <= 99; level++) {
                const exp = getExperienceForLevel(level);
                expect(exp).toBeDefined();
                expect(typeof exp).toBe("number");
            }
        });

        it("should return experience values in ascending order", () => {
            for (let level = 2; level <= 99; level++) {
                const prevExp = getExperienceForLevel(level - 1);
                const currExp = getExperienceForLevel(level);
                expect(currExp).toBeGreaterThan(prevExp);
            }
        });

        it("should handle commonly used levels", () => {
            // Combat levels
            expect(getExperienceForLevel(40)).toBeDefined();
            expect(getExperienceForLevel(60)).toBeDefined();
            expect(getExperienceForLevel(85)).toBeDefined();

            // Skill training checkpoints
            expect(getExperienceForLevel(13)).toBeDefined();
            expect(getExperienceForLevel(55)).toBeDefined();
        });

        it("should return values within expected range", () => {
            for (let level = 1; level <= 99; level++) {
                const exp = getExperienceForLevel(level);
                expect(exp).toBeGreaterThanOrEqual(0);
                expect(exp).toBeLessThanOrEqual(13034431);
            }
        });
    });

    describe("getLevelForExperience", () => {
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

        it("should return level 1 for 0 experience", () => {
            expect(getLevelForExperience(0)).toBe(1);
        });

        it("should return level 1 for very small experience", () => {
            expect(getLevelForExperience(1)).toBe(1);
            expect(getLevelForExperience(65)).toBe(1);
        });

        it("should return level 99 for maximum experience", () => {
            expect(getLevelForExperience(13034431)).toBe(99);
        });

        it("should return level 99 for experience above maximum", () => {
            expect(getLevelForExperience(14000000)).toBe(99);
            expect(getLevelForExperience(20000000)).toBe(99);
        });

        it("should return valid levels for all experience values", () => {
            const testExperiences = [0, 100, 1000, 10000, 100000, 1000000, 10000000];

            for (const exp of testExperiences) {
                const level = getLevelForExperience(exp);
                expect(level).toBeGreaterThanOrEqual(1);
                expect(level).toBeLessThanOrEqual(99);
            }
        });

        it("should identify experience boundaries correctly", () => {
            // Just before level 2
            expect(getLevelForExperience(LEVEL_TO_EXPERIENCE[2] - 1)).toBe(1);

            // Exactly at level 2
            expect(getLevelForExperience(LEVEL_TO_EXPERIENCE[2])).toBe(2);

            // Just after level 2
            expect(getLevelForExperience(LEVEL_TO_EXPERIENCE[2] + 1)).toBe(2);
        });

        it("should handle experience gaps correctly", () => {
            for (let level = 1; level < 99; level++) {
                const exp = getExperienceForLevel(level);
                const nextExp = getExperienceForLevel(level + 1);

                // Any experience in this range should return current level
                const midExp = Math.floor((exp + nextExp) / 2);
                expect(getLevelForExperience(midExp)).toBe(level);
            }
        });

        it("should support skill training progress tracking", () => {
            // Track progression from level 1 to 99
            const testPoints = [0, 100000, 250000, 500000, 1000000, 5000000, 10000000, 13034431];
            let lastLevel = 1;

            for (const exp of testPoints) {
                const level = getLevelForExperience(exp);
                expect(level).toBeGreaterThanOrEqual(lastLevel);
                lastLevel = level;
            }
        });
    });

    describe("Experience-Level Round Trip Conversion", () => {
        it("should convert experience to level and back correctly", () => {
            for (let level = 1; level <= 99; level++) {
                const exp = getExperienceForLevel(level);
                const recoveredLevel = getLevelForExperience(exp);
                expect(recoveredLevel).toBe(level);
            }
        });

        it("should handle halfway points between levels", () => {
            for (let level = 1; level < 99; level++) {
                const minExp = getExperienceForLevel(level);
                const maxExp = getExperienceForLevel(level + 1);
                const midExp = Math.floor((minExp + maxExp) / 2);

                const resultLevel = getLevelForExperience(midExp);
                expect([level, level + 1]).toContain(resultLevel);
            }
        });

        it("should maintain monotonic progression", () => {
            const experiences = [0, 100, 1000, 10000, 100000, 1000000, 5000000, 13034431];
            let lastLevel = 1;

            for (const exp of experiences) {
                const level = getLevelForExperience(exp);
                expect(level).toBeGreaterThanOrEqual(lastLevel);
                lastLevel = level;
            }
        });
    });

    describe("Real-world skill training scenarios", () => {
        it("should calculate levels for common training milestones", () => {
            // Level 30 (Common starter level)
            expect(getLevelForExperience(getExperienceForLevel(30))).toBe(30);

            // Level 50 (Mid-game
            expect(getLevelForExperience(getExperienceForLevel(50))).toBe(50);

            // Level 70 (Mid-high game)
            expect(getLevelForExperience(getExperienceForLevel(70))).toBe(70);

            // Level 85 (High level requirement)
            expect(getLevelForExperience(getExperienceForLevel(85))).toBe(85);
        });

        it("should support combat level calculation", () => {
            const skillLevels = [40, 40, 40]; // Attack, Strength, Defence
            const combatExp = skillLevels.reduce((total, level) => {
                return total + getExperienceForLevel(level);
            }, 0);

            // This represents training all three skills to level 40
            expect(combatExp).toBeGreaterThan(0);
        });

        it("should track multiple skills progress", () => {
            const skills = {
                attack: 50,
                defence: 50,
                strength: 50,
                magic: 40,
                ranged: 40,
            };

            for (const [skill, level] of Object.entries(skills)) {
                const exp = getExperienceForLevel(level);
                const recoveredLevel = getLevelForExperience(exp);
                expect(recoveredLevel).toBe(level);
            }
        });
    });

    describe("Edge cases and boundary conditions", () => {
        it("should handle very large experience values", () => {
            const hugeExp = 1000000000;
            const level = getLevelForExperience(hugeExp);
            expect(level).toBe(99); // Should cap at 99
        });

        it("should handle negative experience gracefully", () => {
            // Negative experience should be treated as 0 or raise appropriate handling
            const level = getLevelForExperience(-1);
            expect(level).toBe(1); // Should return level 1
        });

        it("should handle zero experience", () => {
            expect(getLevelForExperience(0)).toBe(1);
            expect(getExperienceForLevel(1)).toBe(0);
        });

        it("should provide consistent results across multiple calls", () => {
            const exp = 500000;
            const level1 = getLevelForExperience(exp);
            const level2 = getLevelForExperience(exp);
            expect(level1).toBe(level2);
        });

        it("should work with floating point experience values", () => {
            // Test that fractional experience is handled
            const level1 = getLevelForExperience(100.5);
            const level2 = getLevelForExperience(100);
            expect(level1).toBe(level2);
        });
    });

    describe("Experience requirements reference", () => {
        it("should provide accurate experience requirements for common quests", () => {
            // Different quests require different experience
            // These should all be retrievable from the table
            const levels = [10, 20, 40, 60, 70, 75];

            for (const level of levels) {
                const exp = getExperienceForLevel(level);
                expect(exp).toBeGreaterThan(0);
                expect(getLevelForExperience(exp)).toBe(level);
            }
        });

        it("should provide accurate experience for boss requirements", () => {
            // Common boss requirements
            const bossLevels = {
                "Chaos Elemental": 40,
                "King Black Dragon": 60,
                "Dagannoths": 40,
                "Slayer bosses": 85,
            };

            for (const [boss, level] of Object.entries(bossLevels)) {
                const exp = getExperienceForLevel(level);
                expect(getLevelForExperience(exp)).toBe(level);
            }
        });
    });
});
