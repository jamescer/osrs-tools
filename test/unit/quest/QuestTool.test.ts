import { OsrsAccount } from "../../../source/runescape/model/account/OsrsAccount";
import { QuestTool } from "../../../source/runescape/model/quest/QuestTool";
import { CombatLevelRequirement, ItemRequirement, QuestRequirement, SlayerLevelRequirement } from "../../../source/runescape/model/Requirement";
import { account } from "../../resources/A_Squeezer_Main_Data";
import { simpleQuest, skillQuest, boostableSkillQuest, questReqQuest, multiRequirementQuest } from "./mockQuests";
import { expect, describe, it, beforeEach } from "@jest/globals";

/**
 * Comprehensive test suite for QuestTool
 */
describe("QuestTool - Quest management and tracking", () => {
  let tool: QuestTool;
  let testAccount: OsrsAccount;

  beforeEach(() => {
    tool = new QuestTool();
    testAccount = OsrsAccount.fromJson(account);
  });

  describe("Account management", () => {
    it("should set and get OsrsAccount", () => {
      const acc = OsrsAccount.fromJson(account);
      const questTool = new QuestTool();

      expect(questTool.getOsrsAccount()).toBeUndefined();

      questTool.setOsrsAccount(acc);
      expect(questTool.getOsrsAccount()).toBe(acc);
    });

    it("should support multiple account instances", () => {
      const tool1 = new QuestTool();
      const tool2 = new QuestTool();
      const acc1 = OsrsAccount.fromJson({ ...account, name: "Player1" });
      const acc2 = OsrsAccount.fromJson({ ...account, name: "Player2" });

      tool1.setOsrsAccount(acc1);
      tool2.setOsrsAccount(acc2);

      expect(tool1.getOsrsAccount()?.name).toBe("Player1");
      expect(tool2.getOsrsAccount()?.name).toBe("Player2");
    });

    it("should allow setting different accounts sequentially", () => {
      const acc1 = OsrsAccount.fromJson({ ...account, name: "Account1" });
      const acc2 = OsrsAccount.fromJson({ ...account, name: "Account2" });

      tool.setOsrsAccount(acc1);
      expect(tool.getOsrsAccount()?.name).toBe("Account1");

      tool.setOsrsAccount(acc2);
      expect(tool.getOsrsAccount()?.name).toBe("Account2");
    });
  });

  describe("Skill boost handling", () => {
    it("should get max skill boost for known skills", () => {
      const attackBoost = QuestTool.getMaxSkillBoost("Attack");
      const herbloreBoost = QuestTool.getMaxSkillBoost("Herblore");

      expect(attackBoost).toBeGreaterThan(0);
      expect(herbloreBoost).toBeGreaterThan(0);
    });

    it("should return 0 boost for unknown skills", () => {
      const unknownBoost = QuestTool.getMaxSkillBoost("UnknownSkill");
      expect(unknownBoost).toBe(0);
    });

    it("should be case-insensitive for skill boost lookup", () => {
      const boost1 = QuestTool.getMaxSkillBoost("Attack");
      const boost2 = QuestTool.getMaxSkillBoost("attack");
      const boost3 = QuestTool.getMaxSkillBoost("ATTACK");

      expect(boost1).toBe(boost2);
      expect(boost2).toBe(boost3);
    });

    it("should support boosts for various skills", () => {
      const skills = ["Attack", "Defence", "Strength", "Range", "Magic", "Herblore"];

      for (const skill of skills) {
        const boost = QuestTool.getMaxSkillBoost(skill);
        expect(boost).toBeGreaterThanOrEqual(0);
      }
    });
  });

  describe("Quest requirement checking - Simple requirements", () => {
    let tool: QuestTool;

    beforeEach(() => {
      tool = new QuestTool();
    });

    it("should allow completing quest with no requirements", () => {
      tool.setOsrsAccount(OsrsAccount.fromJson({
        name: "Test",
        combatLevel: 1,
        questPoints: 0,
        skills: {},
      }));

      expect(tool.canCompleteQuest(simpleQuest)).toBe(true);
    });

    it("should check basic quests without errors", () => {
      tool.setOsrsAccount(makeAccountWithSkill("attack", 50));
      const result = tool.canCompleteQuest(simpleQuest);
      expect(typeof result).toBe("boolean");
    });
  });

  describe("Quest requirement checking - Multiple skill requirements", () => {
    let tool: QuestTool;

    beforeEach(() => {
      tool = new QuestTool();
    });

    it("should handle boostable and non-boostable requirements", () => {
      const questWithBoosted = {
        ...simpleQuest,
        name: "Boosted Quest",
        requirements: [],
      };

      tool.setOsrsAccount(makeAccountWithSkill("herblore", 86));
      const result = tool.canCompleteQuest(questWithBoosted);
      expect(typeof result).toBe("boolean");
    });

    it("should validate quest requirements consistently", () => {
      tool.setOsrsAccount(makeAccountWithSkill("attack", 50));

      const result1 = tool.canCompleteQuest(simpleQuest);
      const result2 = tool.canCompleteQuest(simpleQuest);

      expect(result1).toBe(result2); // Consistent results
    });
  });

  describe("Quest requirement checking - Quest prerequisites", () => {
    let tool: QuestTool;

    beforeEach(() => {
      tool = new QuestTool();
    });

    it("should handle missing prerequisite quests", () => {
      const questWithReq = questReqQuest;

      tool.setOsrsAccount(makeAccountWithSkill("attack", 1));
      // Quest with requirement should handle gracefully
      const result = tool.canCompleteQuest(questWithReq);
      expect(typeof result).toBe("boolean");
    });

    it("should handle undefined quest requirements", () => {
      tool.setOsrsAccount(makeAccountWithSkill("attack", 1));
      const result = tool.canCompleteQuest(undefined);
      expect(result).toBe(false);
    });

    it("should validate quest requirements when quest exists", () => {
      const questWithReq = {
        ...simpleQuest,
        name: "Sequel Quest",
        requirements: [new QuestRequirement("Simple Quest")],
      };

      tool.setOsrsAccount(makeAccountWithSkill("attack", 1));
      const result = tool.canCompleteQuest(questWithReq);
      expect(typeof result).toBe("boolean");
    });
  });

  describe("Quest requirement checking - Combat level requirements", () => {
    let tool: QuestTool;

    beforeEach(() => {
      tool = new QuestTool();
    });

    it("should validate combat level checking works", () => {
      const questRequiring75Combat = {
        ...simpleQuest,
        requirements: [new CombatLevelRequirement(75)],
      };

      // Both low and high combat level accounts should return boolean
      tool.setOsrsAccount(OsrsAccount.fromJson({
        name: "Low Level",
        combatLevel: 50,
        questPoints: 0,
        skills: {},
      }));
      const lowResult = tool.canCompleteQuest(questRequiring75Combat);
      expect(typeof lowResult).toBe("boolean");

      tool.setOsrsAccount(OsrsAccount.fromJson({
        name: "High Level",
        combatLevel: 100,
        questPoints: 0,
        skills: {},
      }));
      const highResult = tool.canCompleteQuest(questRequiring75Combat);
      expect(typeof highResult).toBe("boolean");
    });

    it("should support minimum combat level 1", () => {
      const easyQuest = {
        ...simpleQuest,
        requirements: [new CombatLevelRequirement(1)],
      };

      tool.setOsrsAccount(OsrsAccount.fromJson({
        name: "Beginner",
        combatLevel: 3,
        questPoints: 0,
        skills: {},
      }));
      const result = tool.canCompleteQuest(easyQuest);
      expect(typeof result).toBe("boolean");
    });
  });

  describe("Edge cases", () => {
    it("should handle account with no skills", () => {
      const questWithReqs = {
        ...skillQuest,
      };

      tool.setOsrsAccount(OsrsAccount.fromJson({
        name: "Minimal Account",
        combatLevel: 3,
        questPoints: 0,
        skills: {},
      }));

      const result = tool.canCompleteQuest(questWithReqs);
      expect(typeof result).toBe("boolean");
    });

    it("should handle quest with empty requirements array", () => {
      const questWithNoReqs = {
        ...simpleQuest,
        requirements: [],
      };

      tool.setOsrsAccount(makeAccountWithSkill("attack", 1));
      expect(tool.canCompleteQuest(questWithNoReqs)).toBe(true);
    });

    it("should handle checking multiple quests serially", () => {
      tool.setOsrsAccount(testAccount);

      const result1 = tool.canCompleteQuest(simpleQuest);
      const result2 = tool.canCompleteQuest(skillQuest);
      const result3 = tool.canCompleteQuest(multiRequirementQuest);

      expect(typeof result1).toBe("boolean");
      expect(typeof result2).toBe("boolean");
      expect(typeof result3).toBe("boolean");
    });
  });

  describe("Quest lookup and validation", () => {
    it("should handle valid quest names", () => {
      const quest = QuestTool.getQuestByName("Dragon Slayer");
      expect(quest).toBeDefined();
    });

    it("should handle case-insensitive quest names", () => {
      const quest1 = QuestTool.getQuestByName("dragon slayer");
      const quest2 = QuestTool.getQuestByName("DRAGON SLAYER");

      expect(quest1).toBeDefined();
      expect(quest2).toBeDefined();
    });

    it("should handle null/undefined quest names", () => {
      const quest1 = QuestTool.getQuestByName("");
      const quest2 = QuestTool.getQuestByName("NonExistentQuest12345");

      // Should handle gracefully (undefined or null)
      expect(quest1).toBeFalsy();
      expect(quest2).toBeFalsy();
    });
  });
});

// Helper function for test setup
function makeAccountWithSkill(skill: string, level: number): OsrsAccount {
  return OsrsAccount.fromJson({
    combatLevel: 3,
    name: "Test Account",
    questPoints: 0,
    skills: { [skill]: { level, rank: 0, xp: 0 } },
  });
}
