/**
 * Helper class for OSRS Clue Scrolls
 * Handles casket opening simulation with accurate wiki-based reward odds
 *
 * WIKI REFERENCE: https://oldschool.runescape.wiki/w/Clue_scrolls
 * Each tier has unique mechanics documented in the reward casket pages
 */

import { Item } from "../Item/Item";
import { getClueRewardsByTier, getClueRewardTables, BEGINNER_REWARDS, EASY_REWARDS, MEDIUM_REWARDS, HARD_REWARDS, ELITE_REWARDS, MASTER_REWARDS } from "./ClueScrollRewards";

/**
 * Result of opening a casket - contains all rewards obtained
 */
export interface CasketReward {
  items: Item[];
  count: number;
  /** Optional: master clue if obtained from certain tiers */
  masterClue?: Item;
}

//======================================================================================
// CORE UTILITY METHODS - Weighted Selection
//======================================================================================

/**
 * Select a random item from a reward table using probability weights
 * Higher rarity number = lower chance of selection
 * @param rewards Table mapping item names to {item, rarity} pairs
 * @returns A randomly selected Item based on rarity weights
 */
function selectRandomReward(rewards: { [itemName: string]: { item: Item; rarity: number } }): Item {
  const items: Array<{ item: Item; probability: number }> = [];
  let totalWeight = 0;

  // Convert rarity values to probability weights
  for (const { item, rarity } of Object.values(rewards)) {
    const probability = 1 / rarity;
    items.push({ item, probability });
    totalWeight += probability;
  }

  // Weighted random selection
  const random = Math.random() * totalWeight;
  let cumulative = 0;

  for (const { item, probability } of items) {
    cumulative += probability;
    if (random < cumulative) {
      return item;
    }
  }

  // Fallback (should never reach here with valid data)
  return items[items.length - 1].item;
}

/**
 * Select a reward table using weighted table selection
 * Each table has a weight representing its probability of being selected
 * @param tables Array of weighted reward tables for a tier
 * @returns The selected reward table
 */
function selectWeightedTable(tables: Array<{ weight: number; items: { [itemName: string]: { item: Item; rarity: number } } }>): {
  [itemName: string]: { item: Item; rarity: number };
} {
  const totalWeight = tables.reduce((sum, t) => sum + t.weight, 0);
  const random = Math.random() * totalWeight;
  let cumulative = 0;

  for (const table of tables) {
    cumulative += table.weight;
    if (random < cumulative) {
      return table.items;
    }
  }

  // Fallback
  return tables[0].items;
}

//======================================================================================
// TIER-SPECIFIC REWARD COUNT METHODS
//======================================================================================

/**
 * Beginner: 1-3 items, weighting towards 2
 * Distribution: 25% = 1, 50% = 2, 25% = 3 (average = 2)
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)
 */
function getBeginnerRewardCount(): number {
  const r = Math.random();
  if (r < 0.25) return 1;
  if (r < 0.75) return 2;
  return 3;
}

/**
 * Easy: 2-4 items, weighting towards 3
 * Distribution: 25% = 2, 50% = 3, 25% = 4 (average = 3)
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(easy)
 */
function getEasyRewardCount(): number {
  const r = Math.random();
  if (r < 0.25) return 2;
  if (r < 0.75) return 3;
  return 4;
}

/**
 * Medium: 3-5 items, uniform distribution
 * Distribution: 33.3% each (average = 4)
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(medium)
 */
function getMediumRewardCount(): number {
  const r = Math.random();
  if (r < 0.333333) return 3;
  if (r < 0.666666) return 4;
  return 5;
}

/**
 * Hard: 4-6 items, weighting towards 5
 * Distribution: 25% = 4, 50% = 5, 25% = 6 (average = 5)
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(hard)
 */
function getHardRewardCount(): number {
  const r = Math.random();
  if (r < 0.25) return 4;
  if (r < 0.75) return 5;
  return 6;
}

/**
 * Elite: 4-6 items, weighting towards 5
 * Distribution: 25% = 4, 50% = 5, 25% = 6 (average = 5)
 * NOTE: Master clue is separate (1/5 chance, doesn't consume a slot)
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(elite)
 */
function getEliteRewardCount(): number {
  const r = Math.random();
  if (r < 0.25) return 4;
  if (r < 0.75) return 5;
  return 6;
}

/**
 * Master: 5-7 items, weighting towards 6
 * Distribution: 20% = 5, 60% = 6, 20% = 7 (average = 6)
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(master)
 */
function getMasterRewardCount(): number {
  const r = Math.random();
  if (r < 0.2) return 5;
  if (r < 0.8) return 6;
  return 7;
}

//======================================================================================
// TIER-SPECIFIC OPENING MECHANICS
//======================================================================================

/**
 * Beginner casket opening with special unique/cabbage mechanics
 *
 * WIKI MECHANICS:
 * - Unique/Cabbage roll: 1/12 (41/492 weight)
 *   - When hitting this table: 50% Cabbage, 50% Specific unique item
 *   - This is handled in the reward data structure
 * - Black items table: 11/492 weight, then 1/18 for each item
 * - Common items: 440/492 weight
 *
 * The key insight is that the weighted table selection naturally handles these
 * mechanics since the reward data is properly structured.
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)
 */
function openBeginnerCasket(): CasketReward {
  const rewardCount = getBeginnerRewardCount();
  const rewards: Item[] = [];
  const tables = getClueRewardTables("beginner")!;

  for (let i = 0; i < rewardCount; i++) {
    const selectedTable = selectWeightedTable(tables);
    const item = selectRandomReward(selectedTable);
    rewards.push(item);
  }

  return { items: rewards, count: rewardCount };
}

/**
 * Easy casket opening with master clue special mechanic
 *
 * WIKI MECHANICS:
 * - Main rewards: 2-4 items per casket roll
 * - Master clue scroll: SEPARATE 1/50 chance per casket opening
 *   - Not part of the main reward slots
 *   - Is an additional reward if rolled successfully
 * - Unique items: High probability tier (~22.9%)
 * - Standard items: Common weapons, armor, runes, food
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(easy)
 */
function openEasyCasket(): CasketReward {
  const rewardCount = getEasyRewardCount();
  const rewards: Item[] = [];
  const tables = getClueRewardTables("easy")!;

  // Main rewards using weighted table selection
  for (let i = 0; i < rewardCount; i++) {
    const selectedTable = selectWeightedTable(tables);
    const item = selectRandomReward(selectedTable);
    rewards.push(item);
  }

  // Master clue: 1/50 chance (separate roll)
  const masterClueRoll = Math.random();
  let masterClue: Item | undefined;
  if (masterClueRoll < 1 / 50) {
    // Get master clue from the master clue table
    const masterTable = tables.find((t) => t.weight === 0 && "items" in t);
    if (masterTable && "Clue scroll (master)" in masterTable.items) {
      masterClue = masterTable.items["Clue scroll (master)"].item;
    }
  }

  const result: CasketReward = { items: rewards, count: rewardCount };
  if (masterClue) {
    result.masterClue = masterClue;
  }
  return result;
}

/**
 * Medium casket opening
 * Standard weighted table selection with no special mechanics
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(medium)
 */
function openMediumCasket(): CasketReward {
  const rewardCount = getMediumRewardCount();
  const rewards: Item[] = [];
  const tables = getClueRewardTables("medium")!;

  for (let i = 0; i < rewardCount; i++) {
    const selectedTable = selectWeightedTable(tables);
    const item = selectRandomReward(selectedTable);
    rewards.push(item);
  }

  return { items: rewards, count: rewardCount };
}

/**
 * Hard casket opening
 * Standard weighted table selection with no special mechanics
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(hard)
 */
function openHardCasket(): CasketReward {
  const rewardCount = getHardRewardCount();
  const rewards: Item[] = [];
  const tables = getClueRewardTables("hard")!;

  for (let i = 0; i < rewardCount; i++) {
    const selectedTable = selectWeightedTable(tables);
    const item = selectRandomReward(selectedTable);
    rewards.push(item);
  }

  return { items: rewards, count: rewardCount };
}

/**
 * Elite casket opening with master clue special mechanic
 *
 * WIKI MECHANICS:
 * - Main rewards: 4-6 items per casket
 * - Master clue scroll: 1/5 chance (20%), DOES NOT consume a reward slot
 *   - This is an additional reward beyond the main reward count
 *   - If obtained, casket total rewards = rewardCount + 1
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(elite)
 */
function openEliteCasket(): CasketReward {
  const rewardCount = getEliteRewardCount();
  const rewards: Item[] = [];
  const tables = getClueRewardTables("elite")!;

  // Main rewards
  for (let i = 0; i < rewardCount; i++) {
    const selectedTable = selectWeightedTable(tables);
    const item = selectRandomReward(selectedTable);
    rewards.push(item);
  }

  // Master clue: 1/5 chance (20%), DOES NOT consume a slot
  const masterClueRoll = Math.random();
  let masterClue: Item | undefined;
  if (masterClueRoll < 1 / 5) {
    const masterTable = tables.find((t) => t.weight === 0 && "items" in t);
    if (masterTable && "Clue scroll (master)" in masterTable.items) {
      masterClue = masterTable.items["Clue scroll (master)"].item;
    }
  }

  const result: CasketReward = { items: rewards, count: rewardCount };
  if (masterClue) {
    result.masterClue = masterClue;
  }
  return result;
}

/**
 * Master casket opening
 * Standard weighted table selection with no special mechanics
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(master)
 */
function openMasterCasket(): CasketReward {
  const rewardCount = getMasterRewardCount();
  const rewards: Item[] = [];
  const tables = getClueRewardTables("master")!;

  for (let i = 0; i < rewardCount; i++) {
    const selectedTable = selectWeightedTable(tables);
    const item = selectRandomReward(selectedTable);
    rewards.push(item);
  }

  return { items: rewards, count: rewardCount };
}

//======================================================================================
// PUBLIC API
//======================================================================================

/**
 * Main ClueScrollHelper class that provides methods to simulate clue scroll rewards
 */
export class ClueScrollHelper {
  /**
   * Simulate opening a clue casket and return all rewards
   *
   * Uses tier-specific mechanics per OSRS Wiki documented behavior:
   * - Beginner: 1-3 rewards with unique/cabbage sub-mechanic
   * - Easy: 2-4 rewards + 1/50 master clue
   * - Medium: 3-5 rewards (standard)
   * - Hard: 4-6 rewards (standard)
   * - Elite: 4-6 rewards + 1/5 master clue (bonus, doesn't consume slot)
   * - Master: 5-7 rewards (standard)
   *
   * @param tier The difficulty tier of the clue scroll
   * @returns CasketReward containing all items, count, and optional master clue
   */
  static openCasket(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): CasketReward {
    switch (tier.toLowerCase()) {
      case "beginner":
        return openBeginnerCasket();
      case "easy":
        return openEasyCasket();
      case "medium":
        return openMediumCasket();
      case "hard":
        return openHardCasket();
      case "elite":
        return openEliteCasket();
      case "master":
        return openMasterCasket();
      default:
        throw new Error(`Unknown clue tier: ${tier}`);
    }
  }

  /**
   * Get the probability of obtaining a specific item from a casket as a fraction
   * @param tier The difficulty tier
   * @param itemName The item name to check probability for
   * @returns The probability as a fraction (e.g., 0.0278 for 1/36)
   */
  static getItemProbability(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master", itemName: string): number {
    const rewards = getClueRewardsByTier(tier);
    const reward = rewards[itemName];
    return reward ? 1 / reward.rarity : 0;
  }

  /**
   * Get the rarity denominator (X in "1 in X") for an item
   */
  static getItemRarity(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master", itemName: string): number {
    const rewards = getClueRewardsByTier(tier);
    const reward = rewards[itemName];
    return reward ? reward.rarity : 0;
  }

  /**
   * Get all possible rewards for a tier as Item objects
   */
  static getPossibleRewards(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): Item[] {
    const rewards = getClueRewardsByTier(tier);
    return Object.values(rewards).map((r) => r.item);
  }

  /**
   * Get all possible reward items names for a tier
   */
  static getPossibleRewardNames(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): string[] {
    const rewards = getClueRewardsByTier(tier);
    return Object.keys(rewards);
  }

  /**
   * Simulate opening multiple caskets
   * @param tier The clue tier
   * @param count Number of caskets to open
   * @returns Array of all reward items
   */
  static simulateMultiple(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master", count: number): Item[] {
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
  static getRewardStats(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): {
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
      rareItems: items.filter((r) => r.rarity > 100).length,
      commonItems: items.filter((r) => r.rarity <= 50).length,
    };
  }
}
