import type { CombatAchievementTask } from '../CombatAchievement';
import { CombatAchievementTier } from '../CombatAchievement';
import { EASY_COMBAT_ACHIEVEMENTS } from './Easy';
import { ELITE_COMBAT_ACHIEVEMENTS } from './Elite';
import { GRANDMASTER_COMBAT_ACHIEVEMENTS } from './Grandmaster';
import { HARD_COMBAT_ACHIEVEMENTS } from './Hard';
import { MASTER_COMBAT_ACHIEVEMENTS } from './Master';
import { MEDIUM_COMBAT_ACHIEVEMENTS } from './Medium';

export { EASY_COMBAT_ACHIEVEMENTS } from './Easy';
export { ELITE_COMBAT_ACHIEVEMENTS } from './Elite';
export { GRANDMASTER_COMBAT_ACHIEVEMENTS } from './Grandmaster';
export { HARD_COMBAT_ACHIEVEMENTS } from './Hard';
export { MASTER_COMBAT_ACHIEVEMENTS } from './Master';
export { MEDIUM_COMBAT_ACHIEVEMENTS } from './Medium';

/** All 637 Combat Achievement tasks across every tier. */
export const ALL_COMBAT_ACHIEVEMENT_TASKS: CombatAchievementTask[] = [
  ...EASY_COMBAT_ACHIEVEMENTS,
  ...MEDIUM_COMBAT_ACHIEVEMENTS,
  ...HARD_COMBAT_ACHIEVEMENTS,
  ...ELITE_COMBAT_ACHIEVEMENTS,
  ...MASTER_COMBAT_ACHIEVEMENTS,
  ...GRANDMASTER_COMBAT_ACHIEVEMENTS,
];

const TASKS_BY_TIER: Record<CombatAchievementTier, CombatAchievementTask[]> = {
  [CombatAchievementTier.Easy]: EASY_COMBAT_ACHIEVEMENTS,
  [CombatAchievementTier.Medium]: MEDIUM_COMBAT_ACHIEVEMENTS,
  [CombatAchievementTier.Hard]: HARD_COMBAT_ACHIEVEMENTS,
  [CombatAchievementTier.Elite]: ELITE_COMBAT_ACHIEVEMENTS,
  [CombatAchievementTier.Master]: MASTER_COMBAT_ACHIEVEMENTS,
  [CombatAchievementTier.Grandmaster]: GRANDMASTER_COMBAT_ACHIEVEMENTS,
};

export function getCombatAchievementsByTier(tier: CombatAchievementTier): CombatAchievementTask[] {
  return TASKS_BY_TIER[tier];
}

export function getCombatAchievementByName(name: string): CombatAchievementTask | undefined {
  const found = ALL_COMBAT_ACHIEVEMENT_TASKS.find(t => t.name.toLowerCase() === name.toLowerCase());
  return found;
}

export function getCombatAchievementsByMonster(monster: string): CombatAchievementTask[] {
  return ALL_COMBAT_ACHIEVEMENT_TASKS.filter(t => t.monster.toLowerCase() === monster.toLowerCase());
}
