import {
  BEGINNER_REWARDS,
  EASY_REWARDS,
  MEDIUM_REWARDS,
  HARD_REWARDS,
  ELITE_REWARDS,
  MASTER_REWARDS,
  getClueRewardsByTier,
  getClueRewardTables,
} from "../../../source/runescape/model/clue/ClueScrollRewards";
import { expect, describe, it } from "@jest/globals";

describe("ClueScrollRewards", () => {
  describe("Reward Data Structures", () => {
    it("should have all reward tiers defined", () => {
      expect(BEGINNER_REWARDS).toBeDefined();
      expect(EASY_REWARDS).toBeDefined();
      expect(MEDIUM_REWARDS).toBeDefined();
      expect(HARD_REWARDS).toBeDefined();
      expect(ELITE_REWARDS).toBeDefined();
      expect(MASTER_REWARDS).toBeDefined();
    });

    it("should have flattened property for each tier", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];
      for (const tier of tiers) {
        expect(tier).toHaveProperty("flattened");
        expect(typeof tier.flattened).toBe("object");
        expect(Object.keys(tier.flattened).length).toBeGreaterThan(0);
      }
    });

    it("should have tables property for each tier", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];
      for (const tier of tiers) {
        expect(tier).toHaveProperty("tables");
        expect(Array.isArray(tier.tables)).toBe(true);
        expect(tier.tables.length).toBeGreaterThan(0);
      }
    });
  });

  describe("Table Structure", () => {
    it("should have valid table objects", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        for (const table of tier.tables) {
          expect(table).toHaveProperty("name");
          expect(table).toHaveProperty("weight");
          expect(table).toHaveProperty("items");
          expect(typeof table.name).toBe("string");
          expect(typeof table.weight).toBe("number");
          expect(typeof table.items).toBe("object");
        }
      }
    });

    it("should have non-negative weights in tables", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        for (const table of tier.tables) {
          expect(table.weight).toBeGreaterThanOrEqual(0);
        }
      }
    });

    it("should have items property that is a RewardTable", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        for (const table of tier.tables) {
          for (const itemName of Object.keys(table.items)) {
            const reward = table.items[itemName];
            expect(reward).toHaveProperty("item");
            expect(reward).toHaveProperty("rarity");
            expect(reward.item).toHaveProperty("id");
            expect(reward.item).toHaveProperty("name");
            expect(typeof reward.rarity).toBe("number");
          }
        }
      }
    });
  });

  describe("Flattened Rewards", () => {
    it("should have items in flattened rewards", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        expect(Object.keys(tier.flattened).length).toBeGreaterThan(0);
      }
    });

    it("should have valid reward structure in flattened rewards", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        for (const itemName of Object.keys(tier.flattened)) {
          const reward = tier.flattened[itemName];
          expect(reward).toHaveProperty("item");
          expect(reward).toHaveProperty("rarity");
          expect(reward.item).toHaveProperty("id");
          expect(reward.item).toHaveProperty("name");
          expect(typeof reward.rarity).toBe("number");
          expect(reward.rarity).toBeGreaterThanOrEqual(1);
        }
      }
    });

    it("should not have duplicate keys in flattened rewards", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        const keys = Object.keys(tier.flattened);
        const uniqueKeys = new Set(keys);
        // All keys should be unique
        expect(uniqueKeys.size).toBe(keys.length);
      }
    });

    it("should have all rewards with positive rarity values", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        for (const itemName of Object.keys(tier.flattened)) {
          const reward = tier.flattened[itemName];
          expect(reward.rarity).toBeGreaterThan(0);
        }
      }
    });
  });

  describe("getClueRewardsByTier", () => {
    it("should return flattened rewards for each tier", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const rewards = getClueRewardsByTier(tier);
        expect(Object.keys(rewards).length).toBeGreaterThan(0);

        for (const reward of Object.values(rewards)) {
          expect(reward).toHaveProperty("item");
          expect(reward).toHaveProperty("rarity");
        }
      }
    });

    it("should return the same object as the tier flattened property", () => {
      expect(getClueRewardsByTier("beginner")).toEqual(BEGINNER_REWARDS.flattened);
      expect(getClueRewardsByTier("easy")).toEqual(EASY_REWARDS.flattened);
      expect(getClueRewardsByTier("medium")).toEqual(MEDIUM_REWARDS.flattened);
      expect(getClueRewardsByTier("hard")).toEqual(HARD_REWARDS.flattened);
      expect(getClueRewardsByTier("elite")).toEqual(ELITE_REWARDS.flattened);
      expect(getClueRewardsByTier("master")).toEqual(MASTER_REWARDS.flattened);
    });

    it("should throw error for invalid tier", () => {
      expect(() => {
        getClueRewardsByTier("invalid" as any);
      }).toThrow();
    });
  });

  describe("getClueRewardTables", () => {
    it("should return table structure for each tier", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const tables = getClueRewardTables(tier);
        expect(tables).not.toBeNull();
        expect(Array.isArray(tables)).toBe(true);
        if (tables) {
          expect(tables.length).toBeGreaterThan(0);
        }
      }
    });

    it("should return the same tables as the tier tables property", () => {
      expect(getClueRewardTables("beginner")).toEqual(BEGINNER_REWARDS.tables);
      expect(getClueRewardTables("easy")).toEqual(EASY_REWARDS.tables);
      expect(getClueRewardTables("medium")).toEqual(MEDIUM_REWARDS.tables);
      expect(getClueRewardTables("hard")).toEqual(HARD_REWARDS.tables);
      expect(getClueRewardTables("elite")).toEqual(ELITE_REWARDS.tables);
      expect(getClueRewardTables("master")).toEqual(MASTER_REWARDS.tables);
    });

    it("should have valid table structure", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const tables = getClueRewardTables(tier);
        if (tables) {
          for (const table of tables) {
            expect(table).toHaveProperty("name");
            expect(table).toHaveProperty("weight");
            expect(table).toHaveProperty("items");
            expect(typeof table.name).toBe("string");
            expect(typeof table.weight).toBe("number");
          }
        }
      }
    });

    it("should return null for invalid tier", () => {
      const result = getClueRewardTables("invalid" as any);
      expect(result).toBeNull();
    });
  });

  describe("Hard Tier Specifics", () => {
    it("should have weighted unique and standard tables", () => {
      const tables = HARD_REWARDS.tables;
      const uniqueTable = tables.find((t) => t.name === "unique");
      const standardTable = tables.find((t) => t.name === "standard");

      expect(uniqueTable).toBeDefined();
      expect(uniqueTable?.weight).toBe(1625);
      expect(standardTable).toBeDefined();
      expect(standardTable?.weight).toBe(706);
    });

    it("should have zero-weight special tables", () => {
      const tables = HARD_REWARDS.tables;
      const megaRareTable = tables.find((t) => t.name === "mega-rare");
      const sharedTable = tables.find((t) => t.name === "shared");
      const masterTable = tables.find((t) => t.name === "master");

      expect(megaRareTable?.weight).toBe(0);
      expect(sharedTable?.weight).toBe(0);
      expect(masterTable?.weight).toBe(0);
    });
  });

  describe("Elite Tier Specifics", () => {
    it("should have weighted unique and standard tables", () => {
      const tables = ELITE_REWARDS.tables;
      const uniqueTable = tables.find((t) => t.name === "unique");
      const standardTable = tables.find((t) => t.name === "standard");

      expect(uniqueTable).toBeDefined();
      expect(uniqueTable?.weight).toBe(1);
      expect(standardTable).toBeDefined();
      expect(standardTable?.weight).toBe(22);
    });

    it("should have master clue table with zero weight but separate 1/5 logic", () => {
      const tables = ELITE_REWARDS.tables;
      const masterTable = tables.find((t) => t.name === "master");

      expect(masterTable).toBeDefined();
      expect(masterTable?.weight).toBe(0);
      expect(masterTable?.items).toBeDefined();
      expect(Object.keys(masterTable?.items || {}).length).toBeGreaterThan(0);
    });
  });

  describe("Master Tier Specifics", () => {
    it("should have weighted unique and standard tables", () => {
      const tables = MASTER_REWARDS.tables;
      const uniqueTable = tables.find((t) => t.name === "unique");
      const standardTable = tables.find((t) => t.name === "standard");

      expect(uniqueTable).toBeDefined();
      expect(uniqueTable?.weight).toBe(1);
      expect(standardTable).toBeDefined();
      expect(standardTable?.weight).toBe(22);
    });

    it("should not have master clue table (no bonus drop)", () => {
      const tables = MASTER_REWARDS.tables;
      const masterTable = tables.find((t) => t.name === "master");

      expect(masterTable).toBeUndefined();
    });
  });

  describe("Tier Comparison", () => {
    it("should have an increasing trend in total rewards from beginner upwards", () => {
      const beginnerCount = Object.keys(BEGINNER_REWARDS.flattened).length;
      const easyCount = Object.keys(EASY_REWARDS.flattened).length;
      const mediumCount = Object.keys(MEDIUM_REWARDS.flattened).length;
      const hardCount = Object.keys(HARD_REWARDS.flattened).length;
      const eliteCount = Object.keys(ELITE_REWARDS.flattened).length;
      const masterCount = Object.keys(MASTER_REWARDS.flattened).length;

      // Each tier should have at least some rewards
      expect(beginnerCount).toBeGreaterThan(0);
      expect(easyCount).toBeGreaterThan(0);
      expect(mediumCount).toBeGreaterThan(0);
      expect(hardCount).toBeGreaterThan(0);
      expect(eliteCount).toBeGreaterThan(0);
      expect(masterCount).toBeGreaterThan(0);

      // General trend: easier tiers should not have fewer items than very easy tiers
      expect(easyCount).toBeGreaterThanOrEqual(beginnerCount);
      expect(mediumCount).toBeGreaterThanOrEqual(easyCount);
      expect(hardCount).toBeGreaterThanOrEqual(mediumCount);
    });

    it("should have different rarities for harder tiers (generally rarer items)", () => {
      const beginnerRewards = Object.values(BEGINNER_REWARDS.flattened);
      const masterRewards = Object.values(MASTER_REWARDS.flattened);

      const beginnerAvgRarity = beginnerRewards.reduce((sum, r) => sum + r.rarity, 0) / beginnerRewards.length;
      const masterAvgRarity = masterRewards.reduce((sum, r) => sum + r.rarity, 0) / masterRewards.length;

      // Master tier should have higher average rarity (rarer items)
      expect(masterAvgRarity).toBeGreaterThanOrEqual(beginnerAvgRarity);
    });
  });

  describe("Item Validity", () => {
    it("should have items with valid name strings", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        for (const reward of Object.values(tier.flattened)) {
          expect(typeof reward.item.name).toBe("string");
          expect(reward.item.name.length).toBeGreaterThan(0);
        }
      }
    });

    it("should have items with valid ID numbers", () => {
      const tiers = [BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS];

      for (const tier of tiers) {
        for (const reward of Object.values(tier.flattened)) {
          expect(typeof reward.item.id).toBe("number");
          expect(reward.item.id).toBeGreaterThan(0);
        }
      }
    });
  });
});
