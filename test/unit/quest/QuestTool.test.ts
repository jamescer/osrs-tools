import { OsrsAccount } from "../../../source/runescape/model/account/OsrsAccount";
import { QuestTool } from "../../../source/runescape/model/quest/QuestTool";
import { LevelRequirement, QuestRequirement } from "../../../source/runescape/model/Requirement";
import { account } from "../../resources/A_Squeezer_Main_Data";
import { simpleQuest } from "./mockQuests";
import { expect, describe, it } from "@jest/globals";
// Helper: create an account with a given skill level
function makeAccountWithSkill(skill: string, level: number): OsrsAccount {
    return OsrsAccount.fromJson({
        combatLevel: 3,
        name: "Test",
        questPoints: 0,
        skills: { [skill]: { level } },
    });
}
describe("QuestTool", () => {
   
    it("should set and get OsrsAccount", () => {
        const acc = OsrsAccount.fromJson(account);
        const tool = new QuestTool();
        expect(tool.getOsrsAccount()).toBeUndefined();
        tool.setOsrsAccount(acc);
        expect(tool.getOsrsAccount()).toBe(acc);
    });
    it("should get max skill boost for known and unknown skills", () => {
        expect(QuestTool.getMaxSkillBoost("Attack")).toBeGreaterThan(0);
        expect(QuestTool.getMaxSkillBoost("Herblore")).toBeGreaterThan(0);
        expect(QuestTool.getMaxSkillBoost("UnknownSkill")).toBe(0);
    });

    describe("Quest Requirements", () => {
        let tool: QuestTool;
        beforeEach(() => {
            tool = new QuestTool();
        });
        it("should handle multiple skill requirements", () => {
            const quest = {
                ...simpleQuest,
                requirements: [new LevelRequirement("attack", 60, false), new LevelRequirement("defence", 60, false), new LevelRequirement("strength", 60, false)],
            };
            // Test with insufficient levels
            tool.setOsrsAccount(makeAccountWithSkill("attack", 59));
            expect(tool.canCompleteQuest(quest)).toBe(false);
            // Test with all requirements met
            tool.setOsrsAccount(OsrsAccount.fromJson({
                combatLevel: 3,
                name: "Test",
                questPoints: 0,
                skills: {
                    attack: { level: 60, rank: 0, xp: 0 },
                    defence: { level: 60, rank: 0, xp: 0 },
                    strength: { level: 60, rank: 0, xp: 0 },
                },
            }));
            expect(tool.canCompleteQuest(quest)).toBe(true);
        });
        it("should handle boostable and non-boostable requirements", () => {
            const quest = {
                ...simpleQuest,
                requirements: [
                    new LevelRequirement("attack", 60, false), // Non-boostable
                    new LevelRequirement("herblore", 90, true), // Boostable
                ],
            };
            // Test with insufficient non-boostable level
            tool.setOsrsAccount(makeAccountWithSkill("attack", 59));
            expect(tool.canCompleteQuest(quest)).toBe(false);
            // Test with boostable but insufficient herblore
            tool.setOsrsAccount(OsrsAccount.fromJson({
                combatLevel: 3,
                name: "Test",
                questPoints: 0,
                skills: {
                    attack: { level: 60, rank: 0, xp: 0 },
                    herblore: { level: 84, rank: 0, xp: 0 }, // Max boost +5, not enough
                },
            }));
            expect(tool.canCompleteQuest(quest)).toBe(false);
            // Test with both requirements met (one through boost)
            tool.setOsrsAccount(OsrsAccount.fromJson({
                combatLevel: 3,
                name: "Test",
                questPoints: 0,
                skills: {
                    attack: { level: 60 },
                    herblore: { level: 86 }, // Can boost to 91
                },
            }));
            expect(tool.canCompleteQuest(quest)).toBe(true);
        });
        
        it("should handle missing quests", () => {
            const quest = {
                ...simpleQuest,
                requirements: [new QuestRequirement("NonexistentQuest")],
            };
            tool.setOsrsAccount(makeAccountWithSkill("attack", 1));
            expect(tool.canCompleteQuest(quest)).toBe(false);
        });
        it("should handle undefined quest", () => {
            tool.setOsrsAccount(makeAccountWithSkill("attack", 1));
            expect(tool.canCompleteQuest(undefined)).toBe(false);
        });
    });
});
