/**
 * The six Combat Achievement difficulty tiers, in ascending order.
 *
 * Source: https://oldschool.runescape.wiki/w/Combat_Achievements
 */
export enum CombatAchievementTier {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
  Elite = 'Elite',
  Master = 'Master',
  Grandmaster = 'Grandmaster',
}

/**
 * The six Combat Achievement task types, in ascending order of difficulty.
 *
 * Source: https://oldschool.runescape.wiki/w/Combat_Achievements
 */
export enum CombatAchievementTaskType {
  KillCount = 'Kill Count',
  Mechanical = 'Mechanical',
  Perfection = 'Perfection',
  Restriction = 'Restriction',
  Speed = 'Speed',
  Stamina = 'Stamina',
}

/**
 * Represents a single Combat Achievement task.
 */
export interface CombatAchievementTask {
  /** Stable task id, matching the wiki's internal Combat Achievements task id. */
  id: number;
  name: string;
  tier: CombatAchievementTier;
  /** The boss/monster the task is associated with. */
  monster: string;
  type: CombatAchievementTaskType;
  /** Points awarded for completing this task. Fixed per tier: 1/2/3/4/5/6. */
  points: number;
  description: string;
}

/**
 * Represents a single Combat Achievement reward tier.
 */
export interface CombatAchievementRewardTier {
  tier: CombatAchievementTier;
  /** Total Combat Achievement points required to claim this tier's rewards. */
  pointsRequired: number;
  /** Reward descriptions, in the order listed on the wiki. */
  rewards: string[];
}

/**
 * Points awarded per task, by tier.
 */
export const COMBAT_ACHIEVEMENT_TIER_POINTS: Record<CombatAchievementTier, number> = {
  [CombatAchievementTier.Easy]: 1,
  [CombatAchievementTier.Medium]: 2,
  [CombatAchievementTier.Hard]: 3,
  [CombatAchievementTier.Elite]: 4,
  [CombatAchievementTier.Master]: 5,
  [CombatAchievementTier.Grandmaster]: 6,
};
