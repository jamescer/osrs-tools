/**
 * Helper class for OSRS Clue Scrolls
 * Handles casket opening simulation with accurate wiki-based reward odds
 */

import { Item } from '../Item/Item';
import {
  getClueRewardsByTier,
  getClueRewardTables,
  BEGINNER_REWARDS,
  EASY_REWARDS,
  MEDIUM_REWARDS,
  HARD_REWARDS,
  ELITE_REWARDS,
  MASTER_REWARDS,
} from './ClueScrollRewards';

/**
 * Result of opening a casket - contains all rewards obtained
 */
export interface CasketReward {
  items: Item[];
  count: number;
}

/**
 * Main ClueScrollHelper class that provides methods to simulate clue scroll rewards, calculate probabilities, and list possible rewards
 *
 * Reference: https://oldschool.runescape.wiki/w/Clue_scrolls
 */
export class ClueScrollHelper {
  /**
   * Select a random reward based on rarity tiers
   * Uses item rarity values to create weighted selection
   */
  private static selectRandomReward(rewards: { [itemName: string]: { item: Item; rarity: number } }): Item {
    const items: Array<{ item: Item; probability: number }> = [];
    let totalWeight = 0;

    for (const { item, rarity } of Object.values(rewards)) {
      const probability = 1 / rarity;
      items.push({ item, probability });
      totalWeight += probability;
    }

    const random = Math.random() * totalWeight;
    let cumulative = 0;

    for (const { item, probability } of items) {
      cumulative += probability;
      if (random < cumulative) {
        return item;
      }
    }

    // Fallback to last item if rounding errors occur
    return items[items.length - 1].item;
  }

  /**
   * Determine the number of rewards in a casket
   * Different tiers have different distributions
   * For beginner: min 1, max 3, average 2
   * For easy: min 2, max 4, average 3
   * For medium: min 3, max 5, average 4
   * For hard: min 4, max 6, average 5
   * For elite: min 4, max 6, average 5
   * For master: min 5, max 7, average 6
   * @returns Number of rewards based on tier
   */
  private static getRewardCount(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'): number {
    const random = Math.random();

    switch (tier.toLowerCase()) {
      case 'beginner':
        // Distribution: 25% = 1, 50% = 2, 25% = 3 (average = 2)
        if (random < 0.25) return 1;
        if (random < 0.75) return 2;
        return 3;
      case 'easy':
        // Distribution: 25% = 2, 50% = 3, 25% = 4 (average = 3)
        if (random < 0.25) return 2;
        if (random < 0.75) return 3;
        return 4;
      case 'medium':
        // Distribution: 33.3% = 3, 33.3% = 4, 33.3% = 5 (average = 4)
        if (random < 0.333) return 3;
        if (random < 0.667) return 4;
        return 5;
      case 'hard':
        // Distribution: 25% = 4, 50% = 5, 25% = 6 (average = 5)
        if (random < 0.25) return 4;
        if (random < 0.75) return 5;
        return 6;
      case 'elite':
        // Distribution: 25% = 4, 50% = 5, 25% = 6 (average = 5)
        // Note: Plus 1/5 chance of master clue (doesn't take a slot)
        if (random < 0.25) return 4;
        if (random < 0.75) return 5;
        return 6;
      case 'master':
        // Distribution: 20% = 5, 60% = 6, 20% = 7 (average = 6)
        if (random < 0.2) return 5;
        if (random < 0.8) return 6;
        return 7;
      default:
        return 2;
    }
  }

  /**
   * Select a reward table for the given tier (for tiers with table-based mechanics)
   * Returns items from the selected table
   */
  private static selectRewardTable(
    tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'
  ): { [itemName: string]: { item: Item; rarity: number } } {
    const tables = getClueRewardTables(tier);

    if (!tables) {
      // No table structure, use flat rewards
      return getClueRewardsByTier(tier);
    }

    // Calculate total weight
    const totalWeight = tables.reduce((sum, table) => sum + table.weight, 0);
    const random = Math.random() * totalWeight;
    let cumulative = 0;

    for (const table of tables) {
      cumulative += table.weight;
      if (random < cumulative) {
        return table.items;
      }
    }

    // Fallback to first table
    return tables[0].items;
  }

  /**
   * Simulate opening a clue casket and return all rewards
   * @param tier The difficulty tier of the clue scroll
   * @returns CasketReward containing all items and count
   */
  static openCasket(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'): CasketReward {
    const rewardCount = this.getRewardCount(tier);
    const rewards: Item[] = [];

    for (let i = 0; i < rewardCount; i++) {
      const rewardTable = this.selectRewardTable(tier);
      const item = this.selectRandomReward(rewardTable);
      rewards.push(item);
    }

    return {
      items: rewards,
      count: rewardCount,
    };
  }



  /**
   * Get the probability of obtaining a specific item from a casket as a fraction
   * @param tier The difficulty tier
   * @param itemName The item name to check probability for
   * @returns The probability as a fraction (e.g., 0.0278 for 1/36)
   */
  static getItemProbability(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master', itemName: string): number {
    const rewards = getClueRewardsByTier(tier);
    const reward = rewards[itemName];
    return reward ? 1 / reward.rarity : 0;
  }

  /**
   * Get the rarity denominator (X in "1 in X") for an item
   */
  static getItemRarity(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master', itemName: string): number {
    const rewards = getClueRewardsByTier(tier);
    const reward = rewards[itemName];
    return reward ? reward.rarity : 0;
  }

  /**
   * Get all possible rewards for a tier as Item objects
   */
  static getPossibleRewards(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'): Item[] {
    const rewards = getClueRewardsByTier(tier);
    return Object.values(rewards).map(r => r.item);
  }

  /**
   * Get all possible reward items names for a tier
   */
  static getPossibleRewardNames(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'): string[] {
    const rewards = getClueRewardsByTier(tier);
    return Object.keys(rewards);
  }

  /**
   * Simulate opening multiple caskets
   * @param tier The clue tier
   * @param count Number of caskets to open
   * @returns Array of all reward items
   */
  static simulateMultiple(
    tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master',
    count: number
  ): Item[] {
    const rewards: Item[] = [];
    for (let i = 0; i < count; i++) {
      const casketReward = this.openCasket(tier);
      rewards.push(...casketReward.items);
    }
    return rewards;
  }

  /**
   * Get reward statistics for a tier
   */
  static getRewardStats(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'): {
    tier: string;
    totalUnique: number;
    rareItems: number;
    commonItems: number;
  } {
    const rewards = getClueRewardsByTier(tier);
    const items = Object.values(rewards);

    return {
      tier,
      totalUnique: items.length,
      rareItems: items.filter(r => r.rarity > 100).length,
      commonItems: items.filter(r => r.rarity <= 50).length,
    };
  }
}
