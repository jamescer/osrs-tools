import { ClueScrollHelper, CasketReward } from "../../../source/runescape/model/clue/ClueScrollHelper";
import { BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS } from "../../../source/runescape/model/clue/ClueScrollRewards";
import { expect, describe, it } from "@jest/globals";

describe("ClueScrollHelper", () => {
  describe("openCasket", () => {
    it("should return a CasketReward object with items and count", () => {
      const reward = ClueScrollHelper.openCasket("beginner");
      expect(reward).toHaveProperty("items");
      expect(reward).toHaveProperty("count");
      expect(Array.isArray(reward.items)).toBe(true);
      expect(typeof reward.count).toBe("number");
    });

    it("should return beginner casket with 1-3 items", () => {
      for (let i = 0; i < 20; i++) {
        const reward = ClueScrollHelper.openCasket("beginner");
        expect(reward.count).toBeGreaterThanOrEqual(1);
        expect(reward.count).toBeLessThanOrEqual(3);
        expect(reward.items.length).toBe(reward.count);
      }
    });

    it("should return easy casket with 2-4 items", () => {
      for (let i = 0; i < 20; i++) {
        const reward = ClueScrollHelper.openCasket("easy");
        expect(reward.count).toBeGreaterThanOrEqual(2);
        expect(reward.count).toBeLessThanOrEqual(4);
        expect(reward.items.length).toBe(reward.count);
      }
    });

    it("should return medium casket with 3-5 items", () => {
      for (let i = 0; i < 20; i++) {
        const reward = ClueScrollHelper.openCasket("medium");
        expect(reward.count).toBeGreaterThanOrEqual(3);
        expect(reward.count).toBeLessThanOrEqual(5);
        expect(reward.items.length).toBe(reward.count);
      }
    });

    it("should return hard casket with 4-6 items", () => {
      for (let i = 0; i < 20; i++) {
        const reward = ClueScrollHelper.openCasket("hard");
        expect(reward.count).toBeGreaterThanOrEqual(4);
        expect(reward.count).toBeLessThanOrEqual(6);
        expect(reward.items.length).toBe(reward.count);
      }
    });

    it("should return elite casket with 4-6 items", () => {
      for (let i = 0; i < 20; i++) {
        const reward = ClueScrollHelper.openCasket("elite");
        expect(reward.count).toBeGreaterThanOrEqual(4);
        expect(reward.count).toBeLessThanOrEqual(6);
        expect(reward.items.length).toBeGreaterThanOrEqual(reward.count);
        expect(reward.items.length).toBeLessThanOrEqual(reward.count + 1);
      }
    });

    it("should expose elite master clue bonus independently of 4-6 base rolls", () => {
      for (let i = 0; i < 50; i++) {
        const reward = ClueScrollHelper.openCasket("elite");
        expect(reward.count).toBeGreaterThanOrEqual(4);
        expect(reward.count).toBeLessThanOrEqual(6);
        expect(reward.items.length).toBeGreaterThanOrEqual(reward.count);
      }
    });

    it("should guarantee elite mimic by the 25th casket streak", () => {
      ClueScrollHelper.resetSimulationState();

      let guaranteedMimicSeen = false;
      for (let i = 0; i < 28; i++) {
        const reward = ClueScrollHelper.openCasket("elite");
        if (reward.mimicTriggered && reward.mimicGuaranteed) {
          guaranteedMimicSeen = true;
          break;
        }
      }

      expect(guaranteedMimicSeen).toBe(true);
    });

    it("should return master casket with 5-7 items", () => {
      for (let i = 0; i < 20; i++) {
        const reward = ClueScrollHelper.openCasket("master");
        expect(reward.count).toBeGreaterThanOrEqual(5);
        expect(reward.count).toBeLessThanOrEqual(7);
        expect(reward.items.length).toBeGreaterThanOrEqual(reward.count);
        expect(reward.items.length).toBeLessThanOrEqual(reward.count + 1);
      }
    });

    it("should include mimic bonus metadata when mimic triggers", () => {
      let sawMimic = false;

      // 1/15 trigger chance; this bound keeps the test deterministic enough for CI while still fast.
      for (let i = 0; i < 600; i++) {
        const reward = ClueScrollHelper.openCasket("master");
        if (reward.mimicTriggered) {
          sawMimic = true;
          expect(reward.mimicBonusItem).toBeDefined();
          expect(reward.items.length).toBe(reward.count + 1);
          break;
        }
      }

      expect(sawMimic).toBe(true);
    });

    it("should return items that exist in the reward table", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const reward = ClueScrollHelper.openCasket(tier);
        const possibleRewardNames = ClueScrollHelper.getPossibleRewardNames(tier);

        for (const item of reward.items) {
          const foundInRewards = possibleRewardNames.some((name) => ClueScrollHelper.getPossibleRewards(tier).some((r) => r.id === item.id));
          expect(foundInRewards).toBe(true);
        }
      }
    });

    it("should all items have valid item properties", () => {
      const reward = ClueScrollHelper.openCasket("beginner");
      for (const item of reward.items) {
        expect(item).toHaveProperty("id");
        expect(item).toHaveProperty("name");
        expect(typeof item.id).toBe("number");
        expect(typeof item.name).toBe("string");
      }
    });

    it("should open a master casket", () => {
      const reward = ClueScrollHelper.openCasket("master");

      console.log("Casket Reward:", reward);

      for (const item of reward.items) {
        expect(item).toHaveProperty("id");
        expect(item).toHaveProperty("name");
        expect(typeof item.id).toBe("number");
        expect(typeof item.name).toBe("string");
      }
    });
  });

  describe("getPossibleRewards", () => {
    it("should return an array of items for each tier", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const rewards = ClueScrollHelper.getPossibleRewards(tier);
        expect(Array.isArray(rewards)).toBe(true);
        expect(rewards.length).toBeGreaterThan(0);
        expect(rewards[0]).toHaveProperty("name");
        expect(rewards[0]).toHaveProperty("id");
      }
    });

    it("should return more rewards for harder tiers", () => {
      const beginnerRewards = ClueScrollHelper.getPossibleRewards("beginner");
      const easyRewards = ClueScrollHelper.getPossibleRewards("easy");
      const mediumRewards = ClueScrollHelper.getPossibleRewards("medium");
      const hardRewards = ClueScrollHelper.getPossibleRewards("hard");
      const eliteRewards = ClueScrollHelper.getPossibleRewards("elite");
      const masterRewards = ClueScrollHelper.getPossibleRewards("master");

      // Harder tiers generally should have more rewards (though not strictly monotonic due to shared items)
      expect(easyRewards.length).toBeGreaterThanOrEqual(beginnerRewards.length);
      expect(mediumRewards.length).toBeGreaterThanOrEqual(easyRewards.length);
      expect(hardRewards.length).toBeGreaterThanOrEqual(mediumRewards.length);

      // Elite may have fewer unique items than Hard due to shared items
      expect(eliteRewards.length).toBeGreaterThan(0);
      expect(masterRewards.length).toBeGreaterThan(0);
    });
  });

  describe("getPossibleRewardNames", () => {
    it("should return an array of reward names for each tier", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const rewardNames = ClueScrollHelper.getPossibleRewardNames(tier);
        expect(Array.isArray(rewardNames)).toBe(true);
        expect(rewardNames.length).toBeGreaterThan(0);
        expect(typeof rewardNames[0]).toBe("string");
      }
    });

    it("should have the same count as getPossibleRewards", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const rewardNames = ClueScrollHelper.getPossibleRewardNames(tier);
        const rewards = ClueScrollHelper.getPossibleRewards(tier);
        expect(rewardNames.length).toBe(rewards.length);
      }
    });
  });

  describe("getItemProbability", () => {
    it("should return 0 for non-existent items", () => {
      const probability = ClueScrollHelper.getItemProbability("beginner", "Non-existent Item");
      expect(probability).toBe(0);
    });

    it("should return a probability between 0 and 1 for valid items", () => {
      const rewardNames = ClueScrollHelper.getPossibleRewardNames("beginner");
      if (rewardNames.length > 0) {
        const probability = ClueScrollHelper.getItemProbability("beginner", rewardNames[0]);
        expect(probability).toBeGreaterThan(0);
        expect(probability).toBeLessThanOrEqual(1);
      }
    });

    it("should return consistent probability values", () => {
      const rewardNames = ClueScrollHelper.getPossibleRewardNames("hard");
      if (rewardNames.length > 0) {
        const prob1 = ClueScrollHelper.getItemProbability("hard", rewardNames[0]);
        const prob2 = ClueScrollHelper.getItemProbability("hard", rewardNames[0]);
        expect(prob1).toBe(prob2);
      }
    });

    it("should return 1/rarity for valid items", () => {
      const rewardNames = ClueScrollHelper.getPossibleRewardNames("medium");
      if (rewardNames.length > 0) {
        const itemName = rewardNames[0];
        const probability = ClueScrollHelper.getItemProbability("medium", itemName);
        const rarity = ClueScrollHelper.getItemRarity("medium", itemName);
        expect(probability).toBe(1 / rarity);
      }
    });
  });

  describe("getItemRarity", () => {
    it("should return 0 for non-existent items", () => {
      const rarity = ClueScrollHelper.getItemRarity("beginner", "Non-existent Item");
      expect(rarity).toBe(0);
    });

    it("should return a positive number for valid items", () => {
      const rewardNames = ClueScrollHelper.getPossibleRewardNames("beginner");
      if (rewardNames.length > 0) {
        const rarity = ClueScrollHelper.getItemRarity("beginner", rewardNames[0]);
        expect(rarity).toBeGreaterThan(0);
      }
    });

    it("should return consistent rarity values", () => {
      const rewardNames = ClueScrollHelper.getPossibleRewardNames("easy");
      if (rewardNames.length > 0) {
        const rarity1 = ClueScrollHelper.getItemRarity("easy", rewardNames[0]);
        const rarity2 = ClueScrollHelper.getItemRarity("easy", rewardNames[0]);
        expect(rarity1).toBe(rarity2);
      }
    });

    it("should have rarity >= 1 for all items", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const rewardNames = ClueScrollHelper.getPossibleRewardNames(tier);
        for (const name of rewardNames) {
          const rarity = ClueScrollHelper.getItemRarity(tier, name);
          expect(rarity).toBeGreaterThanOrEqual(1);
        }
      }
    });
  });

  describe("simulateMultiple", () => {
    it("should return an array of items", () => {
      const items = ClueScrollHelper.simulateMultiple("beginner", 5);
      expect(Array.isArray(items)).toBe(true);
      expect(items.length).toBeGreaterThan(0);
    });

    it("should return at least count * minItems rewards", () => {
      const minItems = {
        beginner: 1,
        easy: 2,
        medium: 3,
        hard: 4,
        elite: 4,
        master: 5,
      };

      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;
      const count = 10;

      for (const tier of tiers) {
        const items = ClueScrollHelper.simulateMultiple(tier, count);
        expect(items.length).toBeGreaterThanOrEqual(count * minItems[tier]);
      }
    });

    it("should return at most count * maxItems rewards", () => {
      const maxItems = {
        beginner: 3,
        easy: 4,
        medium: 5,
        hard: 6,
        elite: 6,
        master: 7,
      };

      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;
      const count = 10;

      for (const tier of tiers) {
        const items = ClueScrollHelper.simulateMultiple(tier, count);
        expect(items.length).toBeLessThanOrEqual(count * maxItems[tier]);
      }
    });

    it("should contain only valid items from the tier", () => {
      const items = ClueScrollHelper.simulateMultiple("medium", 5);
      const possibleRewards = ClueScrollHelper.getPossibleRewards("medium");
      const rewardIds = possibleRewards.map((r) => r.id);

      for (const item of items) {
        expect(rewardIds).toContain(item.id);
      }
    });
  });

  describe("getRewardStats", () => {
    it("should return stats object with correct structure", () => {
      const stats = ClueScrollHelper.getRewardStats("beginner");
      expect(stats).toHaveProperty("tier");
      expect(stats).toHaveProperty("totalUnique");
      expect(stats).toHaveProperty("rareItems");
      expect(stats).toHaveProperty("commonItems");
    });

    it("should return correct tier name in stats", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const stats = ClueScrollHelper.getRewardStats(tier);
        expect(stats.tier).toBe(tier);
      }
    });

    it("should return totalUnique equal to number of possible rewards", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const stats = ClueScrollHelper.getRewardStats(tier);
        const possibleRewards = ClueScrollHelper.getPossibleRewards(tier);
        expect(stats.totalUnique).toBe(possibleRewards.length);
      }
    });

    it("should return non-negative counts", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const stats = ClueScrollHelper.getRewardStats(tier);
        expect(stats.totalUnique).toBeGreaterThanOrEqual(0);
        expect(stats.rareItems).toBeGreaterThanOrEqual(0);
        expect(stats.commonItems).toBeGreaterThanOrEqual(0);
      }
    });

    it("should categorize items by rarity correctly", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const stats = ClueScrollHelper.getRewardStats(tier);
        const possibleRewardNames = ClueScrollHelper.getPossibleRewardNames(tier);

        let countedRare = 0;
        let countedCommon = 0;

        for (const name of possibleRewardNames) {
          const rarity = ClueScrollHelper.getItemRarity(tier, name);
          if (rarity > 100) countedRare++;
          if (rarity <= 50) countedCommon++;
        }

        expect(stats.rareItems).toBe(countedRare);
        expect(stats.commonItems).toBe(countedCommon);
      }
    });
  });

  describe("Reward distribution consistency", () => {
    it("should maintain consistent reward structures across tiers", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const rewards = ClueScrollHelper.getPossibleRewards(tier);
        const rewardNames = ClueScrollHelper.getPossibleRewardNames(tier);

        expect(rewards.length).toBe(rewardNames.length);
        for (let i = 0; i < rewards.length; i++) {
          expect(rewards[i]).toHaveProperty("id");
          expect(rewards[i]).toHaveProperty("name");
        }
      }
    });

    it("should have all tiers represented in rewards", () => {
      const tiers = ["beginner", "easy", "medium", "hard", "elite", "master"] as const;

      for (const tier of tiers) {
        const rewards = ClueScrollHelper.getPossibleRewards(tier);
        expect(rewards.length).toBeGreaterThan(0);
      }
    });
  });
});
