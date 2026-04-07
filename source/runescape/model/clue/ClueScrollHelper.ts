/**
 * Helper class for OSRS Clue Scrolls
 * Handles casket opening simulation with accurate wiki-based reward odds
 *
 * WIKI REFERENCE: https://oldschool.runescape.wiki/w/Clue_scrolls
 * Each tier has unique mechanics documented in the reward casket pages
 */

import { Item } from "../Item/Item";
import { getClueRewardsByTier, getClueRewardTables, ELITE_REWARDS, MASTER_REWARDS } from "./ClueScrollRewards";

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
const ELITE_MIMIC_GUARANTEE_STREAK = 25;

let eliteCasketsSinceMimic = 0;

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
  const uniqueTable = ELITE_REWARDS.tables.find((t) => t.name === "unique")?.items;
  const standardTable = ELITE_REWARDS.tables.find((t) => t.name === "standard")?.items;
  const megaRareTable = ELITE_REWARDS.tables.find((t) => t.name === "mega-rare")?.items;
  const masterBonusTable = ELITE_REWARDS.tables.find((t) => t.name === "master")?.items;

  if (!uniqueTable || !standardTable || !megaRareTable) {
    throw new Error("Elite reward tables are missing required unique/standard/mega-rare entries.");
  }

  // Main rewards (4-6): explicit hierarchy per roll.
  for (let i = 0; i < rewardCount; i++) {
    rewards.push(generateElitePrimaryRoll(uniqueTable, standardTable, megaRareTable));
  }

  const mimicGuaranteed = eliteCasketsSinceMimic >= ELITE_MIMIC_GUARANTEE_STREAK - 1;
  const mimicTriggered = mimicGuaranteed || Math.random() < ELITE_MIMIC_BASE_CHANCE;

  if (mimicTriggered) {
    eliteCasketsSinceMimic = 0;
  } else {
    eliteCasketsSinceMimic += 1;
  }

  // Master clue: 1/5 chance (20%), DOES NOT consume a slot
  const masterClueRoll = Math.random();
  let masterClue: Item | undefined;
  if (masterClueRoll < 1 / 5) {
    if (masterBonusTable && "Clue scroll (master)" in masterBonusTable) {
      masterClue = masterBonusTable["Clue scroll (master)"].item;
    }
  }

  // Pity roll behavior is not fully public; this simulation uses a conservative
  // threshold + proc chance to emulate the documented mechanic.

  const result: CasketReward = {
    items: rewards,
    count: rewardCount,
    mimicTriggered,
    mimicGuaranteed: mimicTriggered ? mimicGuaranteed : undefined,
  };
  if (masterClue) {
    result.masterClue = masterClue;
  }
  return result;
}

function generateElitePrimaryRoll(
  uniqueTable: { [itemName: string]: { item: Item; rarity: number } },
  standardTable: { [itemName: string]: { item: Item; rarity: number } },
  megaRareTable: { [itemName: string]: { item: Item; rarity: number } },
): Item {
  // Elite mega-rare gate per roll.
  if (Math.random() < 1 / 13616) {
    return selectEliteMegaRareWithThirdAgeWeaponsBias(megaRareTable);
  }

  // Elite uniques are roughly 1/14 per roll.
  if (Math.random() < 1 / 14) {
    return selectRandomReward(uniqueTable);
  }

  // Default fallback.
  return selectRandomReward(standardTable);
}

function selectEliteMegaRareWithThirdAgeWeaponsBias(megaRareTable: { [itemName: string]: { item: Item; rarity: number } }): Item {
  const weightedItems: Array<{ item: Item; weight: number }> = [];
  let totalWeight = 0;

  for (const [name, { item, rarity }] of Object.entries(megaRareTable)) {
    const key = name.toLowerCase();
    const isDruidic = key.includes("druidic");
    const isEliteFavoredThirdAge = key.includes("3rd age longsword") || key.includes("3rd age bow") || key.includes("3rd age cloak") || key.includes("3rd age wand");

    // Elite tables emphasize 3rd age weapon/cloak outcomes and do not include druidic pieces.
    if (isDruidic) {
      continue;
    }

    const baseWeight = 1 / rarity;
    const boostedWeight = isEliteFavoredThirdAge ? baseWeight * 2 : baseWeight;
    weightedItems.push({ item, weight: boostedWeight });
    totalWeight += boostedWeight;
  }

  if (weightedItems.length === 0) {
    return selectRandomReward(megaRareTable);
  }

  const roll = Math.random() * totalWeight;
  let cumulative = 0;

  for (const candidate of weightedItems) {
    cumulative += candidate.weight;
    if (roll < cumulative) {
      return candidate.item;
    }
  }

  return weightedItems[weightedItems.length - 1].item;
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

  // Master casket hierarchy modeled from OSRS behavior:
  // 1) Mega-rare gate
  // 2) Unique gate
  // 3) Standard fallback
  const uniqueTable = MASTER_REWARDS.tables.find((t) => t.name === "unique")?.items;
  const standardTable = MASTER_REWARDS.tables.find((t) => t.name === "standard")?.items;
  const megaRareTable = MASTER_REWARDS.tables.find((t) => t.name === "mega-rare")?.items;

  if (!uniqueTable || !standardTable || !megaRareTable) {
    throw new Error("Master reward tables are missing required unique/standard/mega-rare entries.");
  }

  for (let i = 0; i < rewardCount; i++) {
    rewards.push(generateMasterPrimaryRoll(uniqueTable, standardTable, megaRareTable));
  }

  // Mimic encounter: 1/15 chance per casket opening.
  // Defeating mimic grants one extra roll with improved 3rd-age odds.
  const mimicTriggered = Math.random() < 1 / 15;
  if (!mimicTriggered) {
    return { items: rewards, count: rewardCount };
  }

  const mimicBonusItem = generateMasterMimicBonusRoll(uniqueTable, standardTable, megaRareTable);
  rewards.push(mimicBonusItem);

  return {
    items: rewards,
    count: rewardCount,
    mimicTriggered: true,
    mimicBonusItem,
  };
}

function generateMasterPrimaryRoll(
  uniqueTable: { [itemName: string]: { item: Item; rarity: number } },
  standardTable: { [itemName: string]: { item: Item; rarity: number } },
  megaRareTable: { [itemName: string]: { item: Item; rarity: number } },
): Item {
  // Mega-rare table gate per-roll.
  if (Math.random() < 1 / 13616) {
    return selectRandomReward(megaRareTable);
  }

  // Master unique table is approximately 1/10 per roll.
  if (Math.random() < 0.1) {
    return selectRandomReward(uniqueTable);
  }

  // Default fallback.
  return selectRandomReward(standardTable);
}

function generateMasterMimicBonusRoll(
  uniqueTable: { [itemName: string]: { item: Item; rarity: number } },
  standardTable: { [itemName: string]: { item: Item; rarity: number } },
  megaRareTable: { [itemName: string]: { item: Item; rarity: number } },
): Item {
  // Mimic bonus roll has boosted mega-rare access.
  if (Math.random() < 1 / 6808) {
    return selectMasterMegaRareWithThirdAgeBoost(megaRareTable);
  }

  // Keep the same unique/common hierarchy for non-mega outcomes.
  if (Math.random() < 0.1) {
    return selectRandomReward(uniqueTable);
  }

  return selectRandomReward(standardTable);
}

function selectMasterMegaRareWithThirdAgeBoost(megaRareTable: { [itemName: string]: { item: Item; rarity: number } }): Item {
  const weightedItems: Array<{ item: Item; weight: number }> = [];
  let totalWeight = 0;

  for (const [name, { item, rarity }] of Object.entries(megaRareTable)) {
    const baseWeight = 1 / rarity;
    const isThirdAge = name.toLowerCase().includes("3rd age");
    const boostedWeight = isThirdAge ? baseWeight * 2 : baseWeight;
    weightedItems.push({ item, weight: boostedWeight });
    totalWeight += boostedWeight;
  }

  const roll = Math.random() * totalWeight;
  let cumulative = 0;

  for (const candidate of weightedItems) {
    cumulative += candidate.weight;
    if (roll < cumulative) {
      return candidate.item;
    }
  }

  return weightedItems[weightedItems.length - 1].item;
}

//======================================================================================
// PUBLIC API
//======================================================================================

/**
 * Main ClueScrollHelper class that provides methods to simulate clue scroll rewards
 */
export class ClueScrollHelper {
  /**
   * Resets internal simulation counters used for pity/guaranteed mechanics.
   */
  static resetSimulationState(): void {
    eliteCasketsSinceMimic = 0;
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
