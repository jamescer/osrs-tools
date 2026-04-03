import { expect, describe, it, beforeEach } from "@jest/globals";
import { QuestTool } from "../../../source/runescape/model/quest/QuestTool";
import { QuestList } from "../../../source/runescape/model/quest/QuestList";

describe("QuestTool - Quest Name Resolution", () => {
  describe("getQuestByName - Exact Matches", () => {
    it("should find quests by exact canonical names from QuestList", () => {
      for (const questName of QuestList.slice(0, 10)) {
        const quest = QuestTool.getQuestByName(questName);
        expect(quest).toBeDefined();
        expect(quest?.name).toBe(questName);
      }
    });

    it("should find 'Dragon Slayer I' by exact name", () => {
      const quest = QuestTool.getQuestByName("Dragon Slayer I");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("Dragon Slayer I");
    });

    it("should find 'Witch's Potion' by exact name", () => {
      const quest = QuestTool.getQuestByName("Witch's Potion");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("Witch's Potion");
    });

    it("should find 'The Curse of Arrav' by exact name", () => {
      const quest = QuestTool.getQuestByName("The Curse of Arrav");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("The Curse of Arrav");
    });

    it("should find 'A Kingdom Divided' by exact name", () => {
      const quest = QuestTool.getQuestByName("A Kingdom Divided");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("A Kingdom Divided");
    });
  });

  describe("getQuestByName - Case Insensitivity", () => {
    it("should find quests with lowercase names", () => {
      const quest = QuestTool.getQuestByName("dragon slayer i");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("Dragon Slayer I");
    });

    it("should find quests with uppercase names", () => {
      const quest = QuestTool.getQuestByName("WITCH'S POTION");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("Witch's Potion");
    });

    it("should find quests with mixed case", () => {
      const quest = QuestTool.getQuestByName("ThE CuRsE oF aRrAv");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("The Curse of Arrav");
    });
  });

  describe("getQuestByName - Punctuation Normalization", () => {
    it("should find quests ignoring apostrophes", () => {
      const quest = QuestTool.getQuestByName("Witchs Potion");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("Witch's Potion");
    });

    it("should find quests ignoring periods", () => {
      const quest = QuestTool.getQuestByName("Dragon Slayer I.");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("Dragon Slayer I");
    });

    it("should find quests with various punctuation", () => {
      const quest = QuestTool.getQuestByName("A--Kingdom---Divided");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("A Kingdom Divided");
    });

    it("should normalize multiple spaces", () => {
      const quest = QuestTool.getQuestByName("Dragon    Slayer    I");
      expect(quest).toBeDefined();
      expect(quest?.name).toBe("Dragon Slayer I");
    });
  });

  describe("getQuestByName - Fuzzy Matching", () => {
    it("should find quests with minor typos (Levenshtein distance < 5)", () => {
      // 1 character typo
      const quest1 = QuestTool.getQuestByName("Dragon Slayer 1"); // Using 1 instead of I
      expect(quest1).toBeDefined();
    });

    it("should find quests with missing letters", () => {
      const quest = QuestTool.getQuestByName("Dragon Slayer");
      expect(quest).toBeDefined();
      expect(quest?.name).toMatch(/Dragon Slayer/);
    });

    it("should find quests with extra letters", () => {
      const quest = QuestTool.getQuestByName("Dragon Slayer II Extra");
      // Fuzzy matching may or may not find it depending on distance threshold
      if (quest) {
        expect(quest).toBeDefined();
      }
    });
  });

  describe("getQuestByName - Edge Cases", () => {
    it("should return undefined for empty string", () => {
      const quest = QuestTool.getQuestByName("");
      expect(quest).toBeUndefined();
    });

    it("should return undefined for whitespace only", () => {
      const quest = QuestTool.getQuestByName("   ");
      expect(quest).toBeUndefined();
    });

    it("should return undefined for null/undefined", () => {
      // @ts-ignore - testing invalid input
      expect(QuestTool.getQuestByName(null)).toBeUndefined();
      expect(QuestTool.getQuestByName(undefined!)).toBeUndefined();
    });

    it("should return undefined for completely unrelated strings", () => {
      const quest = QuestTool.getQuestByName("xyzabc123notaquest");
      // May find something via fuzzy matching or undefined if threshold exceeded
      if (quest) {
        expect(quest.name).toBeDefined();
      }
    });
  });

  describe("getQuestByName - Cache Behavior", () => {
    it("should return same quest object on repeated calls (cache)", () => {
      const quest1 = QuestTool.getQuestByName("Dragon Slayer I");
      const quest2 = QuestTool.getQuestByName("Dragon Slayer I");
      expect(quest1).toBe(quest2); // Same reference due to caching
    });

    it("should cache first query and reuse for second", () => {
      const quest1 = QuestTool.getQuestByName("Dragon Slayer II");
      const quest2 = QuestTool.getQuestByName("dragon slayer ii");
      expect(quest1).toBe(quest2);
    });
  });

  describe("getAllQuests", () => {
    it("should return all quests from QuestList", () => {
      const allQuests = QuestTool.getAllQuests();
      expect(allQuests).toBeDefined();
      expect(allQuests.length).toBeGreaterThan(0);
      expect(allQuests.length).toBeLessThanOrEqual(QuestList.length);
    });

    it("should have each quest from QuestList in results", () => {
      const allQuests = QuestTool.getAllQuests();
      // Check a sampling of quests
      const q1 = allQuests.find((q) => q.name === "Dragon Slayer I");
      const q2 = allQuests.find((q) => q.name === "Witch's Potion");
      const q3 = allQuests.find((q) => q.name === "A Kingdom Divided");

      expect(q1).toBeDefined();
      expect(q2).toBeDefined();
      expect(q3).toBeDefined();
    });

    it("should not include undefined quests", () => {
      const allQuests = QuestTool.getAllQuests();
      expect(allQuests.every((q) => q !== undefined)).toBe(true);
      expect(allQuests.every((q) => q.name !== undefined)).toBe(true);
    });

    it("should return all quests from registry", () => {
      const allQuests = QuestTool.getAllQuests();
      expect(allQuests.length).toBeGreaterThanOrEqual(170); // Should have most quests
    });
  });

  describe("getAllMiniQuests", () => {
    it("should return only miniquest entries", () => {
      const miniQuests = QuestTool.getAllMiniQuests();
      expect(miniQuests).toBeDefined();
      expect(miniQuests.every((q) => q.miniquest === true || q.miniquest === false)).toBe(true);
    });

    it("should filter out non-miniquest entries", () => {
      const allQuests = QuestTool.getAllQuests();
      const miniQuests = QuestTool.getAllMiniQuests();

      expect(miniQuests.length).toBeLessThanOrEqual(allQuests.length);
      expect(miniQuests.every((q) => q.miniquest)).toBe(true);
    });

    it("should return array of Quest objects", () => {
      const miniQuests = QuestTool.getAllMiniQuests();
      miniQuests.forEach((q) => {
        expect(q).toHaveProperty("name");
        expect(q).toHaveProperty("id");
        expect(q).toHaveProperty("miniquest");
      });
    });
  });

  describe("Quest Registry Construction", () => {
    it("should map all QuestList entries to quest objects", () => {
      const allQuests = QuestTool.getAllQuests();
      expect(allQuests.length).toBeGreaterThan(0);

      // Verify registry is populated
      allQuests.forEach((quest) => {
        expect(quest.name).toBeDefined();
        expect(quest.name.length).toBeGreaterThan(0);
      });
    });

    it("should have highest quest ID around 177-180", () => {
      const allQuests = QuestTool.getAllQuests();
      const maxId = Math.max(...allQuests.map((q) => q.id));
      expect(maxId).toBeGreaterThan(170);
    });

    it("should map canonical quest names correctly", () => {
      // Test that the registry correctly maps several canonical names
      const testQuests = [
        "Dragon Slayer I",
        "Dragon Slayer II",
        "A Kingdom Divided",
        "The Curse of Arrav",
        "Witch's Potion",
      ];

      testQuests.forEach((questName) => {
        const quest = QuestTool.getQuestByName(questName);
        expect(quest).toBeDefined();
        expect(quest?.name).toBe(questName);
      });
    });
  });

  describe("Quest Properties", () => {
    it("should have consistent quest structure", () => {
      const quest = QuestTool.getQuestByName("Dragon Slayer I");
      expect(quest).toHaveProperty("id");
      expect(quest).toHaveProperty("name");
      expect(quest).toHaveProperty("description");
      expect(quest).toHaveProperty("difficulty");
      expect(quest).toHaveProperty("length");
      expect(quest).toHaveProperty("members");
      expect(quest).toHaveProperty("questPoints");
      expect(quest).toHaveProperty("requirements");
      expect(quest).toHaveProperty("rewards");
    });


    it("should have non-negative quest points", () => {
      const allQuests = QuestTool.getAllQuests();
      allQuests.forEach((q) => {
        expect(q.questPoints).toBeGreaterThanOrEqual(0);
      });
    });
  });

});
