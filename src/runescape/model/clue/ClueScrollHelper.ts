/**
 * Helper class for OSRS Clue Scrolls
 * Handles casket opening simulation with accurate wiki-based reward odds
 *
 * WIKI REFERENCE: https://oldschool.runescape.wiki/w/Clue_scrolls
 * Each tier has unique mechanics documented in the reward casket pages
 */

import { Item } from '../items/Item';
import { getClueRewardsByTier, getClueRewardTables, RewardEntry } from './ClueScrollRewards';

export type ClueTier = 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master';

/** A source of randomness in [0, 1), same shape as Math.random. */
export type Rng = () => number;

type RewardTable = ReturnType<typeof getClueRewardsByTier>;

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
// RANDOMNESS - single object carrying the RNG, instead of a bare function
// threaded through every roll helper
//======================================================================================

/**
 * Wraps a source of randomness (defaulting to Math.random) with the specific
 * kinds of rolls a casket needs. Callers pass one Roller around instead of a
 * raw `() => number` plus the arithmetic for each kind of roll.
 */
class Roller {
  constructor(private readonly rng: Rng = Math.random) {}

  /** True with the given probability, e.g. roller.chance(1 / 50). */
  chance(probability: number): boolean {
    return this.rng() < probability;
  }

  /** Uniform random integer in [min, max], inclusive. */
  intRange(min: number, max: number): number {
    return Math.floor(this.rng() * (max - min + 1)) + min;
  }

  /** Picks one item from a list, weighted by weightOf(item). */
  pickWeighted<T>(items: readonly T[], weightOf: (item: T) => number): T {
    const totalWeight = items.reduce((sum, item) => sum + weightOf(item), 0);
    const roll = this.rng() * totalWeight;
    let cumulative = 0;

    for (const item of items) {
      cumulative += weightOf(item);
      if (roll < cumulative) {
        return item;
      }
    }

    return items[items.length - 1];
  }

  /** Picks one of several fixed outcomes, e.g. [[1, 0.25], [2, 0.5], [3, 0.25]]. */
  weightedValue<T>(outcomes: ReadonlyArray<readonly [T, number]>): T {
    return this.pickWeighted(outcomes, ([, weight]) => weight)[0];
  }
}

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
    return rewardKey.replace(/\s*\((?:\d|\d+k|\d+-\d+|\d+k-\d+k)[^)]*\)$/i, '').trim();
  }

  return rewardKey;
}

function resolveRewardQuantity(reward: RewardEntry, roller: Roller): number {
  if (typeof reward.quantity === 'number') {
    return reward.quantity;
  }

  if (typeof reward.quantityMin === 'number' && typeof reward.quantityMax === 'number') {
    return roller.intRange(Math.ceil(reward.quantityMin), Math.floor(reward.quantityMax));
  }

  return 1;
}

function canonicalizeRewardItem(rewardKey: string, reward: RewardEntry, roller: Roller): Item {
  const canonicalName = toCanonicalRewardName(rewardKey);
  const canonicalized = cloneItemWithQuantity(reward.item, resolveRewardQuantity(reward, roller));
  canonicalized.name = canonicalName;
  canonicalized.officialWikiUrl = `https://oldschool.runescape.wiki/w/${canonicalName.replace(/ /g, '_')}`;
  return canonicalized;
}

/** Rolls one reward from a tier's flattened table, weighted by 1/rarity. */
function rollTierReward(tier: ClueTier, roller: Roller, excludeMasterClue = true): Item {
  const rewards = getClueRewardsByTier(tier);
  const entries = Object.entries(rewards).filter(([name]) => !(excludeMasterClue && name === 'Clue scroll (master)'));

  if (entries.length === 0) {
    throw new Error(`No rewards configured for tier: ${tier}`);
  }

  const [rewardKey, reward] = roller.pickWeighted(entries, ([, entry]) => 1 / entry.rarity);
  return canonicalizeRewardItem(rewardKey, reward, roller);
}

/**
 * Rolls the primary reward for a tier, which may involve weighted table selection if multiple tables exist.
 * This handles the multi-table mechanics for beginner clues and any future tiers that may have them.
 * @param tier  The clue tier to roll a reward for
 * @param roller The roller to draw randomness from
 *
 * @returns An Item representing the rolled reward, with canonicalized name and resolved quantity
 */
function rollTierPrimaryReward(tier: ClueTier, roller: Roller): Item {
  const tierTables = getClueRewardTables(tier);
  const primaryTables = tierTables?.filter(table => table.weight > 0) ?? [];

  if (primaryTables.length === 0) {
    return rollTierReward(tier, roller);
  }

  const table = roller.pickWeighted(primaryTables, t => t.weight);
  const itemEntries = Object.entries(table.items);
  const [rewardKey, reward] = roller.pickWeighted(itemEntries, ([, entry]) => 1 / entry.rarity);
  return canonicalizeRewardItem(rewardKey, reward, roller);
}

/** Rolls `count` primary rewards for a tier. */
function rollRewards(count: number, tier: ClueTier, roller: Roller): Item[] {
  return Array.from({ length: count }, () => rollTierPrimaryReward(tier, roller));
}

/** Rolls a tier's separate bonus master clue chance, if that tier offers one. */
function rollBonusMasterClue(tierRewards: RewardTable, chance: number, roller: Roller): Item | undefined {
  const masterClueReward = tierRewards['Clue scroll (master)'];
  if (!masterClueReward || !roller.chance(chance)) {
    return undefined;
  }

  return cloneItemWithQuantity(masterClueReward.item, resolveRewardQuantity(masterClueReward, roller));
}

//======================================================================================
// TIER-SPECIFIC REWARD COUNT METHODS
//======================================================================================

/**
 * Beginner: 1-3 items, weighting towards 2
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)
 */
function getBeginnerRewardCount(roller: Roller): number {
  return roller.weightedValue([
    [1, 0.25],
    [2, 0.5],
    [3, 0.25],
  ]);
}

/**
 * Easy: 2-4 items, weighting towards 3
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(easy)
 */
function getEasyRewardCount(roller: Roller): number {
  return roller.weightedValue([
    [2, 0.25],
    [3, 0.5],
    [4, 0.25],
  ]);
}

/**
 * Medium: 3-5 items, uniform distribution
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(medium)
 */
function getMediumRewardCount(roller: Roller): number {
  return roller.weightedValue([
    [3, 1],
    [4, 1],
    [5, 1],
  ]);
}

/**
 * Hard: 4-6 items, weighting towards 5
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(hard)
 */
function getHardRewardCount(roller: Roller): number {
  return roller.weightedValue([
    [4, 0.25],
    [5, 0.5],
    [6, 0.25],
  ]);
}

/**
 * Elite: 4-6 items, weighting towards 5
 * NOTE: Master clue is separate (1/5 chance, doesn't consume a slot)
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(elite)
 */
function getEliteRewardCount(roller: Roller): number {
  return roller.weightedValue([
    [4, 0.25],
    [5, 0.5],
    [6, 0.25],
  ]);
}

/**
 * Master: 5-7 items, weighting towards 6
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(master)
 */
function getMasterRewardCount(roller: Roller): number {
  return roller.weightedValue([
    [5, 0.2],
    [6, 0.6],
    [7, 0.2],
  ]);
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
function openBeginnerCasket(roller: Roller): CasketReward {
  const rewardCount = getBeginnerRewardCount(roller);
  const items = rollRewards(rewardCount, 'beginner', roller);

  return { count: rewardCount, items };
}

/**
 * Easy casket opening with master clue special mechanic
 *
 * WIKI MECHANICS:
 * - Main rewards: 2-4 items per casket roll
 * - Master clue scroll: SEPARATE 1/50 chance per casket opening
 *   - Not part of the main reward slots
 *   - Is an additional reward if rolled successfully
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(easy)
 */
function openEasyCasket(roller: Roller): CasketReward {
  const rewardCount = getEasyRewardCount(roller);
  const items = rollRewards(rewardCount, 'easy', roller);
  const masterClue = rollBonusMasterClue(getClueRewardsByTier('easy'), 1 / 50, roller);

  const result: CasketReward = { count: rewardCount, items };
  if (masterClue) {
    result.masterClue = masterClue;
  }
  return result;
}

/**
 * Medium casket opening
 * Standard weighted table selection, plus a 1/30 separate master clue chance.
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(medium)
 */
function openMediumCasket(roller: Roller): CasketReward {
  const rewardCount = getMediumRewardCount(roller);
  const items = rollRewards(rewardCount, 'medium', roller);
  const masterClue = rollBonusMasterClue(getClueRewardsByTier('medium'), 1 / 30, roller);

  const result: CasketReward = { count: rewardCount, items };
  if (masterClue) {
    result.masterClue = masterClue;
  }
  return result;
}

/**
 * Hard casket opening
 * Standard weighted table selection, plus a 1/15 separate master clue chance.
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(hard)
 */
function openHardCasket(roller: Roller): CasketReward {
  const rewardCount = getHardRewardCount(roller);
  const items = rollRewards(rewardCount, 'hard', roller);
  const masterClue = rollBonusMasterClue(getClueRewardsByTier('hard'), 1 / 15, roller);

  const result: CasketReward = { count: rewardCount, items };
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
function openEliteCasket(roller: Roller): CasketReward {
  const rewardCount = getEliteRewardCount(roller);
  const items = rollRewards(rewardCount, 'elite', roller);
  const mimicTriggered = roller.chance(ELITE_MIMIC_BASE_CHANCE);

  const bonusMasterClue = rollBonusMasterClue(getClueRewardsByTier('elite'), 1 / 5, roller);
  if (bonusMasterClue) {
    items.push(bonusMasterClue);
  }

  return { count: rewardCount, items, mimicTriggered };
}

/**
 * Master casket opening
 * Standard weighted table selection with a 1/15 mimic chance that adds a bonus reward.
 *
 * Wiki: https://oldschool.runescape.wiki/w/Reward_casket_(master)
 */
function openMasterCasket(roller: Roller): CasketReward {
  const rewardCount = getMasterRewardCount(roller);
  const items = rollRewards(rewardCount, 'master', roller);

  const mimicTriggered = roller.chance(1 / 15);
  if (!mimicTriggered) {
    return { count: rewardCount, items };
  }

  const mimicBonusItem = rollTierPrimaryReward('master', roller);
  items.push(mimicBonusItem);

  return { count: rewardCount, items, mimicBonusItem, mimicTriggered: true };
}

const CASKET_OPENERS: Record<ClueTier, (roller: Roller) => CasketReward> = {
  beginner: openBeginnerCasket,
  easy: openEasyCasket,
  elite: openEliteCasket,
  hard: openHardCasket,
  master: openMasterCasket,
  medium: openMediumCasket,
};

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
   * @param rng Optional seeded RNG returning a float in [0, 1); defaults to Math.random
   * @returns CasketReward containing all items, count, and optional master clue
   */
  static openCasket(tier: ClueTier, rng: Rng = Math.random): CasketReward {
    const opener = CASKET_OPENERS[tier.toLowerCase() as ClueTier];
    if (!opener) {
      throw new Error(`Unknown clue tier: ${tier}`);
    }
    return opener(new Roller(rng));
  }

  /**
   * Get the probability of obtaining a specific item from a casket as a fraction
   * @param tier The difficulty tier
   * @param itemName The item name to check probability for
   * @returns The probability as a fraction (e.g., 0.0278 for 1/36)
   */
  static getItemProbability(tier: ClueTier, itemName: string): number {
    const rewards = getClueRewardsByTier(tier);
    const reward = rewards[itemName];
    return reward ? 1 / reward.rarity : 0;
  }

  /**
   * Get the rarity denominator (X in "1 in X") for an item
   */
  static getItemRarity(tier: ClueTier, itemName: string): number {
    const rewards = getClueRewardsByTier(tier);
    const reward = rewards[itemName];
    return reward ? reward.rarity : 0;
  }

  /**
   * Get all possible rewards for a tier as Item objects
   */
  static getPossibleRewards(tier: ClueTier): Item[] {
    const rewards = getClueRewardsByTier(tier);
    return Object.values(rewards).map(r => r.item);
  }

  /**
   * Get all possible reward items names for a tier
   */
  static getPossibleRewardNames(tier: ClueTier): string[] {
    const rewards = getClueRewardsByTier(tier);
    return Object.keys(rewards);
  }

  /**
   * Simulate opening multiple caskets
   * @param tier The clue tier
   * @param count Number of caskets to open
   * @returns Array of all reward items
   */
  static simulateMultiple(tier: ClueTier, count: number): Item[] {
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
  static getRewardStats(tier: ClueTier): {
    tier: string;
    totalUnique: number;
    rareItems: number;
    commonItems: number;
  } {
    const rewards = getClueRewardsByTier(tier);
    const items = Object.values(rewards);

    return {
      commonItems: items.filter(r => r.rarity <= 50).length,
      rareItems: items.filter(r => r.rarity > 100).length,
      tier,
      totalUnique: items.length,
    };
  }
}
