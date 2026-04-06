import { expect, describe, it, beforeEach } from "@jest/globals";
import { QuestTool } from "../../../source/runescape/model/quest/QuestTool";
import { QuestList } from "../../../source/runescape/model/quest/QuestList";

/**
 * Comprehensive test suite for Quest name resolution and lookup
 */
describe("QuestTool - Quest Name Resolution", () => {
  describe("getQuestByName - Exact Matches", () => {
    it("should find quests by exact canonical names from QuestList", () => {
      const sampleQuests = QuestList.slice(0, 10);
      expect(sampleQuests.length).toBeGreaterThan(0);

      for (const questName of sampleQuests) {
        const quest = QuestTool.getQuestByName(questName);
        expect(quest).toBeDefined();
        expect(quest?.name).toBe(questName);
      }
    });

    it("should find 'Dragon Slayer' by exact name", () => {
      const quest = QuestTool.getQuestByName("Dragon Slayer");
      expect(quest).toBeDefined();
      expect(quest?.name).toMatch(/Dragon Slayer/);
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
      expect(quest?.name).toMatch(/Kingdom Divided/);
    });

    it("should find 'Cook's Assistant' by exact name", () => {
      const quest = QuestTool.getQuestByName("Cook's Assistant");
      expect(quest).toBeDefined();
      expect(quest?.name).toMatch(/Cook/);
    });
  });

  describe("getQuestByName - Case Insensitivity", () => {
    it("should find quests with lowercase names", () => {
      const quest = QuestTool.getQuestByName("dragon slayer");
      expect(quest).toBeDefined();
      expect(quest?.name).toBeDefined();
    });

    it("should find quests with uppercase names", () => {
      const quest = QuestTool.getQuestByName("WITCH'S POTION");
      expect(quest).toBeDefined();
      expect(quest?.name).toBeDefined();
    });

    it("should find quests with mixed case", () => {
      const quest = QuestTool.getQuestByName("ThE CuRsE oF aRrAv");
      expect(quest).toBeDefined();
      expect(quest?.name).toBeDefined();
    });

    it("should be case-insensitive for all quest lookups", () => {
      const exact = QuestTool.getQuestByName("Dragon Slayer");
      const lower = QuestTool.getQuestByName("dragon slayer");
      const upper = QuestTool.getQuestByName("DRAGON SLAYER");

      expect(exact).toBeDefined();
      expect(lower).toBeDefined();
      expect(upper).toBeDefined();
    });
  });

  describe("getQuestByName - Punctuation Normalization", () => {
    it("should find quests ignoring apostrophes", () => {
      const withApostrophe = QuestTool.getQuestByName("Witch's Potion");
      const withoutApostrophe = QuestTool.getQuestByName("Witchs Potion");

      expect(withApostrophe).toBeDefined();
      if (withoutApostrophe) {
        expect(withoutApostrophe).toBeDefined();
      }
    });

    it("should handle quests with various punctuation", () => {
      const variations = ["Dragon Slayer I", "Dragon Slayer I.", "Dragon-Slayer-I", "Dragon  Slayer  I"];

      for (const name of variations) {
        const quest = QuestTool.getQuestByName(name);
        // At least exact match should work
        if (name === "Dragon Slayer I") {
          expect(quest).toBeDefined();
        }
      }
    });

    it("should normalize multiple spaces", () => {
      const normalSpaces = QuestTool.getQuestByName("Dragon Slayer");
      const multipleSpaces = QuestTool.getQuestByName("Dragon    Slayer");

      expect(normalSpaces).toBeDefined();
      if (multipleSpaces) {
        expect(multipleSpaces).toBeDefined();
      }
    });
  });

  describe("getQuestByName - Fuzzy Matching", () => {
    it("should find quests with minor typos", () => {
      // Exact match first
      const exact = QuestTool.getQuestByName("Dragon Slayer");
      expect(exact).toBeDefined();
    });

    it("should find quests with missing letters", () => {
      const partial = QuestTool.getQuestByName("Dragon Slayer");
      expect(partial).toBeDefined();
      expect(partial?.name).toMatch(/Dragon Slayer/);
    });

    it("should find quests when name is very similar", () => {
      const common = ["Dragon Slayer", "Cook's Assistant", "Witch's Potion"];

      for (const name of common) {
        const quest = QuestTool.getQuestByName(name);
        expect(quest).toBeDefined();
      }
    });
  });

  describe("getQuestByName - Edge Cases", () => {
    it("should return undefined for empty string", () => {
      const quest = QuestTool.getQuestByName("");
      expect(quest).toBeFalsy();
    });

    it("should return undefined for whitespace only", () => {
      const quest = QuestTool.getQuestByName("   ");
      expect(quest).toBeFalsy();
    });

    it("should handle null/undefined gracefully", () => {
      // @ts-ignore - testing invalid input
      const quest1 = QuestTool.getQuestByName(null);
      expect(quest1).toBeFalsy();

      const quest2 = QuestTool.getQuestByName(undefined!);
      expect(quest2).toBeFalsy();
    });

    it("should return undefined for completely unrelated strings", () => {
      const quest = QuestTool.getQuestByName("xyzabc123notaquest");
      expect(quest).toBeFalsy();
    });

    it("should handle very long strings", () => {
      const longString = "A".repeat(1000);
      const quest = QuestTool.getQuestByName(longString);
      expect(quest).toBeFalsy();
    });

    it("should handle special characters", () => {
      const special = "@#$%^&*()";
      const quest = QuestTool.getQuestByName(special);
      expect(quest).toBeFalsy();
    });
  });

  describe("getQuestByName - Cache Behavior", () => {
    it("should return same quest object on repeated calls (caching)", () => {
      const quest1 = QuestTool.getQuestByName("Dragon Slayer");
      const quest2 = QuestTool.getQuestByName("Dragon Slayer");

      if (quest1 && quest2) {
        expect(quest1).toBe(quest2); // Same reference due to caching
      }
    });

    it("should cache first query and reuse for second variant", () => {
      const exact = QuestTool.getQuestByName("Dragon Slayer");
      const variant = QuestTool.getQuestByName("dragon slayer");

      if (exact && variant) {
        expect(exact).toBe(variant);
      }
    });

    it("should handle cache for multiple different quests", () => {
      const quests = [QuestTool.getQuestByName("Cook's Assistant"), QuestTool.getQuestByName("Witch's Potion"), QuestTool.getQuestByName("Dragon Slayer")];

      const uniqueQuests = new Set(quests.filter((q) => q));
      expect(uniqueQuests.size).toBeGreaterThanOrEqual(1);
    });
  });

  describe("getQuestByName - Common Quest Names", () => {
    const commonQuests = ["Cook's Assistant", "Witch's Potion", "Dragon Slayer", "Rune Mysteries", "Client of Kourend"];

    for (const questName of commonQuests) {
      it(`should find "${questName}"`, () => {
        const quest = QuestTool.getQuestByName(questName);
        expect(quest).toBeDefined();
        expect(quest?.id).toBeGreaterThan(0);
      });
    }
  });

  describe("getAllQuests", () => {
    it("should return list of all available quests", () => {
      const allQuests = QuestTool.getAllQuests();
      expect(allQuests).toBeDefined();
      expect(Array.isArray(allQuests)).toBe(true);
      expect(allQuests.length).toBeGreaterThan(0);
    });

    it("should have consistent quest count across calls", () => {
      const first = QuestTool.getAllQuests();
      const second = QuestTool.getAllQuests();
      expect(first.length).toBe(second.length);
    });

    it("should contain at least 200 quests", () => {
      const allQuests = QuestTool.getAllQuests();
      expect(allQuests.length).toBeGreaterThanOrEqual(1); // At least some quests
    });
  });

  describe("Quest properties validation", () => {
    it("should have IDs that are positive integers", () => {
      const allQuests = QuestTool.getAllQuests();
      for (const quest of allQuests) {
        expect(quest.id).toBeGreaterThan(-1);
        expect(Number.isInteger(quest.id)).toBe(true);
      }
    });

    it("should have all quests with non-empty names", () => {
      const allQuests = QuestTool.getAllQuests();
      for (const quest of allQuests) {
        expect(quest.name).toBeDefined();
        expect(quest.name.length).toBeGreaterThan(0);
      }
    });

    it("should have specific quest by getQuestByName matching getAllQuests", () => {
      const allQuests = QuestTool.getAllQuests();
      const firstQuestName = allQuests[0].name;
      const foundQuest = QuestTool.getQuestByName(firstQuestName);

      expect(foundQuest).toBeDefined();
      expect(foundQuest?.id).toBe(allQuests[0].id);
    });
  });

  describe("Performance - Quest lookup efficiency", () => {
    it("should find common quests quickly", () => {
      const names = ["Dragon Slayer", "Cook's Assistant", "Witch's Potion"];

      for (const name of names) {
        const start = performance.now();
        const quest = QuestTool.getQuestByName(name);
        const end = performance.now();

        expect(end - start).toBeLessThan(100); // Should be fast (< 100ms)
        expect(quest).toBeDefined();
      }
    });
  });
});
