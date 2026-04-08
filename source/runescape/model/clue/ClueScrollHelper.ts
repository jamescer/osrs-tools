/**
 * Helper class for OSRS Clue Scrolls
 * Handles casket opening simulation with accurate wiki-based reward odds
 *
 * WIKI REFERENCE: https://oldschool.runescape.wiki/w/Clue_scrolls
 * Each tier has unique mechanics documented in the reward casket pages
 */

import { Item } from "../Item/Item";
import { getClueRewardsByTier, getClueRewardTables } from "./ClueScrollRewards";

/**
 * Result of opening a casket - contains all rewards obtained
 */
export interface CasketReward {
  items: Item[];
  count: number;
  /** Optional: master clue if obtained from certain tiers */
  masterClue?: Item;
  /** Optional: true when a casket triggered a mimic encounter roll */
  mimicTriggered?: boolean;
  /** Optional: true when mimic trigger came from guaranteed pity logic */
  mimicGuaranteed?: boolean;
  /** Optional: mimic bonus reward roll for master caskets */
  mimicBonusItem?: Item;
}

const ELITE_MIMIC_BASE_CHANCE = 1 / 35;

//======================================================================================
// CORE UTILITY METHODS - Wiki Rarity Driven Selection
//======================================================================================

function cloneItemWithQuantity(item: Item, quantity: number): Item {
  const cloned = Object.assign(Object.create(Object.getPrototypeOf(item)), item) as Item;
  cloned.quantity = quantity;
  return cloned;
}

function toCanonicalRewardName(rewardKey: string): string {
  // Keep canonical suffixes that are real item names, but strip quantity-range descriptors.
  if (/\((?:\d|\d+k|\d+-\d+|\d+k-\d+k)/i.test(rewardKey)) {
    return rewardKey.replace(/\s*\((?:\d|\d+k|\d+-\d+|\d+k-\d+k)[^)]*\)$/i, "").trim();
  }

  return rewardKey;
}

function canonicalizeRewardItem(rewardKey: string, reward: { item: Item; quantity?: number; quantityMin?: number; quantityMax?: number }): Item {
  const canonicalName = toCanonicalRewardName(rewardKey);
  const canonicalized = cloneItemWithQuantity(reward.item, resolveRewardQuantity(reward));
  canonicalized.name = canonicalName;
  canonicalized.officialWikiUrl = `https://oldschool.runescape.wiki/w/${canonicalName.replace(/ /g, "_")}`;
  return canonicalized;
}

function resolveRewardQuantity(reward: { quantity?: number; quantityMin?: number; quantityMax?: number }): number {
  if (typeof reward.quantity === "number") {
    return reward.quantity;
  }

  if (typeof reward.quantityMin === "number" && typeof reward.quantityMax === "number") {
    const min = Math.ceil(reward.quantityMin);
    const max = Math.floor(reward.quantityMax);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return 1;
}

function rollTierReward(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master", excludeMasterClue = true): Item {
  const rewards = getClueRewardsByTier(tier);
  const entries = Object.entries(rewards).filter(([name]) => !(excludeMasterClue && name === "Clue scroll (master)"));

  if (entries.length === 0) {
    throw new Error(`No rewards configured for tier: ${tier}`);
  }

  const totalWeight = entries.reduce((sum, [, reward]) => sum + 1 / reward.rarity, 0);
  const roll = Math.random() * totalWeight;
  let cumulative = 0;

  for (const [rewardKey, reward] of entries) {
    cumulative += 1 / reward.rarity;
    if (roll < cumulative) {
      return canonicalizeRewardItem(rewardKey, reward);
    }
  }

  const [fallbackKey, fallbackReward] = entries[entries.length - 1];
  return canonicalizeRewardItem(fallbackKey, fallbackReward);
}

/**
 * Rolls the primary reward for a tier, which may involve weighted table selection if multiple tables exist.
 * This handles the multi-table mechanics for beginner clues and any future tiers that may have them.
 * @param tier  The clue tier to roll a reward for
 *
 * @returns An Item representing the rolled reward, with canonicalized name and resolved quantity
 */
function rollTierPrimaryReward(tier: "beginner" | "easy" | "medium" | "hard" | "elite" | "master"): Item {
  const tierTables = getClueRewardTables(tier);

  if (!tierTables) {
    return rollTierReward(tier, true);
  }

  const primaryTables = tierTables.filter((table) => table.weight > 0);
  if (primaryTables.length === 0) {
    return rollTierReward(tier, true);
  }

  const totalWeight = primaryTables.reduce((sum, table) => sum + table.weight, 0);
  const tableRoll = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  for (const table of primaryTables) {
    cumulativeWeight += table.weight;
    if (tableRoll < cumulativeWeight) {
      const itemEntries = Object.entries(table.items);
      const itemWeightTotal = itemEntries.reduce((sum, [, reward]) => sum + 1 / reward.rarity, 0);
      const itemRoll = Math.random() * itemWeightTotal;
      let cumulativeItemWeight = 0;

      for (const [rewardKey, reward] of itemEntries) {
        cumulativeItemWeight += 1 / reward.rarity;
        if (itemRoll < cumulativeItemWeight) {
          return canonicalizeRewardItem(rewardKey, reward);
        }
      }

      const [fallbackKey, fallbackReward] = itemEntries[itemEntries.length - 1];
      return canonicalizeRewardItem(fallbackKey, fallbackReward);
    }
  }

  return rollTierReward(tier, true);
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

  for (let i = 0; i < rewardCount; i++) {
    rewards.push(rollTierPrimaryReward("beginner"));
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

  for (let i = 0; i < rewardCount; i++) {
    rewards.push(rollTierPrimaryReward("easy"));
  }

  const easyRewards = getClueRewardsByTier("easy");
  let masterClue: Item | undefined;
  if (Math.random() < 1 / 50 && easyRewards["Clue scroll (master)"]) {
    masterClue = cloneItemWithQuantity(easyRewards["Clue scroll (master)"].item, resolveRewardQuantity(easyRewards["Clue scroll (master)"]));
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

  for (let i = 0; i < rewardCount; i++) {
    rewards.push(rollTierPrimaryReward("medium"));
  }

  const mediumRewards = getClueRewardsByTier("medium");
  let masterClue: Item | undefined;
  if (Math.random() < 1 / 30 && mediumRewards["Clue scroll (master)"]) {
    masterClue = cloneItemWithQuantity(mediumRewards["Clue scroll (master)"].item, resolveRewardQuantity(mediumRewards["Clue scroll (master)"]));
  }

  const result: CasketReward = { items: rewards, count: rewardCount };
  if (masterClue) {
    result.masterClue = masterClue;
  }
  return result;
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

  for (let i = 0; i < rewardCount; i++) {
    rewards.push(rollTierPrimaryReward("hard"));
  }

  const hardRewards = getClueRewardsByTier("hard");
  let masterClue: Item | undefined;
  if (Math.random() < 1 / 15 && hardRewards["Clue scroll (master)"]) {
    masterClue = cloneItemWithQuantity(hardRewards["Clue scroll (master)"].item, resolveRewardQuantity(hardRewards["Clue scroll (master)"]));
  }

  const result: CasketReward = { items: rewards, count: rewardCount };
  if (masterClue) {
    result.masterClue = masterClue;
  }
  return result;
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
  for (let i = 0; i < rewardCount; i++) {
    rewards.push(rollTierPrimaryReward("elite"));
  }

  const mimicTriggered = Math.random() < ELITE_MIMIC_BASE_CHANCE;

  const eliteRewards = getClueRewardsByTier("elite");
  if (Math.random() < 1 / 5 && eliteRewards["Clue scroll (master)"]) {
    rewards.push(cloneItemWithQuantity(eliteRewards["Clue scroll (master)"].item, resolveRewardQuantity(eliteRewards["Clue scroll (master)"])));
  }

  const result: CasketReward = {
    items: rewards,
    count: rewardCount,
    mimicTriggered,
  };

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

  for (let i = 0; i < rewardCount; i++) {
    rewards.push(rollTierPrimaryReward("master"));
  }

  const mimicTriggered = Math.random() < 1 / 15;
  if (!mimicTriggered) {
    return { items: rewards, count: rewardCount };
  }

  const mimicBonusItem = rollTierPrimaryReward("master");
  rewards.push(mimicBonusItem);

  return {
    items: rewards,
    count: rewardCount,
    mimicTriggered: true,
    mimicBonusItem,
  };
}

//======================================================================================
// PUBLIC API
//======================================================================================

/**
 * Main ClueScrollHelper class that provides methods to simulate clue scroll rewards
 */
export class ClueScrollHelper {
  /**
   * Resets internal simulation state.
   */
  static resetSimulationState(): void {
    // No persistent per-tier state is used in wiki-accurate roll mode.
  }

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
