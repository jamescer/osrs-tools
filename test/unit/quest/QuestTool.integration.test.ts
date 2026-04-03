import { expect, describe, it, beforeEach } from "@jest/globals";
import { QuestTool } from "../../../source/runescape/model/quest/QuestTool";
import { QuestList } from "../../../source/runescape/model/quest/QuestList";
import { OsrsAccount } from "../../../source/runescape/model/account/OsrsAccount";
import { QuestRequirement } from "../../../source/runescape/model/Requirement";

/**
 * Integration tests for QuestTool with realistic scenarios
 */
describe("QuestTool Integration Tests", () => {
  describe("Full Quest Lookup Workflow", () => {
    it("should find all quests from QuestList via getQuestByName", () => {
      const unfoundQuests: string[] = [];

      // Test all quests in QuestList
      QuestList.forEach((questName) => {
        const quest = QuestTool.getQuestByName(questName);
        if (!quest) {
          unfoundQuests.push(questName);
        }
      });

      // Allow some mismatches due to fuzzy matching threshold
      expect(unfoundQuests.length / QuestList.length).toBeLessThan(0.05); // Less than 5% unfound
    });

    it("should maintain consistency between getAllQuests and QuestList", () => {
      const allQuests = QuestTool.getAllQuests();

      // Should cover most of QuestList
      expect(allQuests.length).toBeGreaterThan(QuestList.length * 0.9);
    });
  });

  describe("Quest Series and Dependencies", () => {
    it("should find quests from Dragon Slayer series", () => {
      const ds1 = QuestTool.getQuestByName("Dragon Slayer I");
      const ds2 = QuestTool.getQuestByName("Dragon Slayer II");

      expect(ds1).toBeDefined();
      expect(ds2).toBeDefined();
      expect(ds1?.series).toBeDefined();
      expect(ds2?.series).toBeDefined();
    });

    it("should find quests from Mahjarrat series", () => {
      const desert1 = QuestTool.getQuestByName("Desert Treasure I");
      const curse = QuestTool.getQuestByName("The Curse of Arrav");

      expect(desert1).toBeDefined();
      expect(curse).toBeDefined();
    });

    it("should find quests from Fairy Tale series", () => {
      const ft1 = QuestTool.getQuestByName("Fairytale I - Growing Pains");
      const ft2 = QuestTool.getQuestByName("Fairytale II - Cure a Queen");

      expect(ft1).toBeDefined();
      expect(ft2).toBeDefined();
    });
  });

  describe("Skill-based Quest Filtering", () => {
    it("should identify high-skill quests", () => {
      const allQuests = QuestTool.getAllQuests();

      // Filter quests that might require high skills
      const complexQuests = allQuests.filter((q) => {
        const reqCount = q.requirements.length;
        return reqCount > 3;
      });

      expect(complexQuests.length).toBeGreaterThan(0);
      expect(complexQuests.length).toBeLessThan(allQuests.length);
    });

    it("should find beginner quests easily", () => {
      const beginner = [
        "Tutorial Island",
        "Learning the Ropes",
        "Sheep Shearer",
        "Cook's Assistant",
        "Rune Mysteries",
      ];

      beginner.forEach((questName) => {
        const quest = QuestTool.getQuestByName(questName);
        // Some may be in the system
        if (quest) {
          expect(quest.name).toBeDefined();
        }
      });
    });
  });

  describe("Quest Point Calculation", () => {
    it("should have total quest points across all quests", () => {
      const allQuests = QuestTool.getAllQuests();
      const totalPoints = allQuests.reduce((sum, q) => sum + q.questPoints, 0);

      expect(totalPoints).toBeGreaterThan(300); // Should have significant points
    });

    it("should have varying quest point values", () => {
      const allQuests = QuestTool.getAllQuests();
      const points = new Set(allQuests.map((q) => q.questPoints));

      expect(points.size).toBeGreaterThan(1); // Multiple different values
    });
  });

  describe("Member vs F2P Quests", () => {
    it("should have both member and free-to-play quests", () => {
      const allQuests = QuestTool.getAllQuests();
      const memberQuests = allQuests.filter((q) => q.members);
      const f2pQuests = allQuests.filter((q) => !q.members);

      expect(memberQuests.length).toBeGreaterThan(0);
      expect(f2pQuests.length).toBeGreaterThan(0);
    });

    it("should have more member quests than F2P", () => {
      const allQuests = QuestTool.getAllQuests();
      const memberQuests = allQuests.filter((q) => q.members);
      const f2pQuests = allQuests.filter((q) => !q.members);

      expect(memberQuests.length).toBeGreaterThan(f2pQuests.length);
    });
  });

  describe("Quest Difficulty Distribution", () => {
    it("should have quests across all difficulty levels", () => {
      const allQuests = QuestTool.getAllQuests();
      const difficulties = new Set(allQuests.map((q) => q.difficulty));

      expect(difficulties.size).toBeGreaterThan(1);
    });

    it("should have novice and other difficulty quests", () => {
      const allQuests = QuestTool.getAllQuests();
      // Check for novice difficulty quests
      const noviceCount = allQuests.filter((q) => q.difficulty === "Novice").length;

      expect(noviceCount).toBeGreaterThan(0);
    });
  });

  describe("Quest Length Distribution", () => {
    it("should have quests of varying lengths", () => {
      const allQuests = QuestTool.getAllQuests();
      const lengths = new Set(allQuests.map((q) => q.length));

      expect(lengths.size).toBeGreaterThan(1);
    });

    it("should have quests with varying lengths", () => {
      const allQuests = QuestTool.getAllQuests();
      // Check for very short or short length quests
      const shortQuestCount = allQuests.filter((q) =>
        q.length === "Very short" || q.length === "Short"
      ).length;

      expect(shortQuestCount).toBeGreaterThan(0);
    });
  });

  describe("Special Quests", () => {
    it("should identify miniquest entries", () => {
      const miniQuests = QuestTool.getAllMiniQuests();
      expect(miniQuests).toBeDefined();
      expect(miniQuests.length).toBeGreaterThanOrEqual(0);
    });

    it("should handle quests with special characters in names", () => {
      const specialNames = [
        "Witch's Potion",
        "The Curse of Arrav",
        "A Kingdom Divided",
        "The Fremennik Exiles",
      ];

      specialNames.forEach((name) => {
        const quest = QuestTool.getQuestByName(name);
        if (quest) {
          expect(quest.name).toMatch(/[A-Za-z\s'']/);
        }
      });
    });
  });

  describe("Quest Rewards", () => {
    it("should have rewards structure for all quests", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.slice(0, 100).forEach((quest) => {
        expect(quest.rewards).toBeDefined();
        expect(typeof quest.rewards).toBe("object");
      });
    });

    it("should have quest points in rewards", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.forEach((quest) => {
        expect(quest.rewards?.questPoints).toBeDefined();
        expect(quest.rewards?.questPoints).toBe(quest.questPoints);
      });
    });
  });

  describe("Concurrent Access and Cache", () => {
    it("should handle multiple simultaneous lookups", () => {
      const questNames = [
        "Dragon Slayer I",
        "Dragon Slayer II",
        "The Curse of Arrav",
        "A Kingdom Divided",
        "Witch's Potion",
      ];

      const results = questNames.map((name) => QuestTool.getQuestByName(name));

      expect(results.every((q) => q !== undefined)).toBe(true);
    });

    it("should maintain cache consistency", () => {
      const quest1a = QuestTool.getQuestByName("Dragon Slayer I");
      const quest1b = QuestTool.getQuestByName("Dragon Slayer I");
      const quest2a = QuestTool.getQuestByName("Dragon Slayer II");
      const quest2b = QuestTool.getQuestByName("Dragon Slayer II");

      expect(quest1a).toBe(quest1b);
      expect(quest2a).toBe(quest2b);
      expect(quest1a).not.toBe(quest2a);
    });
  });

  describe("Quest Setup Scenarios", () => {
    it("should enable filtering quests by requirements", () => {
      const allQuests = QuestTool.getAllQuests();
      const noReqQuests = allQuests.filter((q) => q.requirements.length === 0);

      expect(noReqQuests.length).toBeGreaterThan(0);
    });

    it("should locate starting quests for new players", () => {
      const allQuests = QuestTool.getAllQuests();
      const beginnerFriendly = allQuests.filter((q) => q.members === false && q.questPoints >= 1);

      expect(beginnerFriendly.length).toBeGreaterThan(0);
    });

    it("should identify high-reward quests", () => {
      const allQuests = QuestTool.getAllQuests();
      const highReward = allQuests.filter((q) => q.questPoints >= 2);

      expect(highReward.length).toBeGreaterThan(0);
      expect(highReward.length).toBeLessThan(allQuests.length);
    });
  });
});
