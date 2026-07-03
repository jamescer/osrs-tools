import { OsrsAccount } from '../account/OsrsAccount';
import type { CombatAchievementRewardTier, CombatAchievementTask } from './CombatAchievement';
import { COMBAT_ACHIEVEMENT_TIER_POINTS, CombatAchievementTier } from './CombatAchievement';
import { COMBAT_ACHIEVEMENT_REWARD_TIERS } from './RewardTiers';
import { ALL_COMBAT_ACHIEVEMENT_TASKS, getCombatAchievementsByTier } from './tasks';

export interface CombatAchievementTierProgress {
  completed: CombatAchievementTask[];
  remaining: CombatAchievementTask[];
  pointsEarned: number;
  pointsAvailable: number;
}

export type CombatAchievementProgress = Record<CombatAchievementTier, CombatAchievementTierProgress> & {
  totalPoints: number;
  unlockedRewardTiers: CombatAchievementRewardTier[];
  nextRewardTier?: CombatAchievementRewardTier;
};

const TIERS: CombatAchievementTier[] = [
  CombatAchievementTier.Easy,
  CombatAchievementTier.Medium,
  CombatAchievementTier.Hard,
  CombatAchievementTier.Elite,
  CombatAchievementTier.Master,
  CombatAchievementTier.Grandmaster,
];

/**
 * Convert a Combat Achievement "monster" name (e.g. "The Royal Titans", "TzTok-Jad")
 * into the camelCase key convention used by OsrsAccount's boss score map
 * (e.g. "royalTitans", "tzTokJad"), matching osrs-json-hiscores.
 */
function normalizeBossKey(monster: string): string {
  let name = monster.trim();
  if (name.startsWith('The ')) name = name.slice(4);
  name = name.replace(/['’:]/g, '');
  const words = name.split(/[\s-]+/).filter(Boolean);
  return words
    .map((word, i) =>
      i === 0 ? word.charAt(0).toLowerCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join('');
}

/**
 * A utility class for analyzing a player's Combat Achievement progress.
 * It can be instantiated with an OsrsAccount to check for monster engagement,
 * or used without an account to calculate points and progress from a list of completed task names.
 */
class CombatAchievementTool {
  private osrsAccount: OsrsAccount | undefined;

  constructor(account?: OsrsAccount) {
    this.osrsAccount = account;
  }

  setOsrsAccount(account: OsrsAccount): boolean {
    if (account) {
      this.osrsAccount = account;
      return true;
    }
    return false;
  }

  getOsrsAccount(): OsrsAccount | undefined {
    return this.osrsAccount;
  }

  /**
   * Whether the account has any recorded kills against a task's monster.
   * This is only a rough signal that the content is accessible — actual task completion
   * (e.g. a specific kill mechanic or restriction) is not exposed via hiscores and cannot be verified.
   * Many Combat Achievement monsters (ordinary slayer monsters, minigames) aren't tracked as
   * hiscore boss categories at all, in which case this always returns false.
   * @param task The Combat Achievement task to check
   * @param account Override the bound account for this check
   */
  hasEngagedMonster(task: CombatAchievementTask, account?: OsrsAccount): boolean {
    const acc = account ?? this.osrsAccount;
    if (!acc) return false;
    const score = acc.getBossScore(normalizeBossKey(task.monster));
    return !!score && score.score > 0;
  }

  /**
   * Return tasks from the given list where the account has recorded kills against the monster.
   * @param tasks The tasks to filter
   * @param account Override the bound account for this check
   */
  getAccessibleTasks(tasks: CombatAchievementTask[], account?: OsrsAccount): CombatAchievementTask[] {
    const acc = account ?? this.osrsAccount;
    if (!acc) return [];
    return tasks.filter(task => this.hasEngagedMonster(task, acc));
  }

  /**
   * Return tasks from the given list where the account has no recorded kills against the monster.
   * @param tasks The tasks to filter
   * @param account Override the bound account for this check
   */
  getInaccessibleTasks(tasks: CombatAchievementTask[], account?: OsrsAccount): CombatAchievementTask[] {
    const acc = account ?? this.osrsAccount;
    if (!acc) return [];
    return tasks.filter(task => !this.hasEngagedMonster(task, acc));
  }

  /**
   * Sum the points for a set of completed task names.
   * @param completedTaskNames Names of tasks the player has completed (case-insensitive)
   * @param tasks The task pool to match against; defaults to every Combat Achievement task
   */
  calculatePoints(
    completedTaskNames: Iterable<string>,
    tasks: CombatAchievementTask[] = ALL_COMBAT_ACHIEVEMENT_TASKS,
  ): number {
    const completed = new Set([...completedTaskNames].map(n => n.toLowerCase()));
    return tasks.filter(task => completed.has(task.name.toLowerCase())).reduce((sum, task) => sum + task.points, 0);
  }

  /**
   * Return every reward tier unlocked at the given point total, in ascending order.
   * @param points Total Combat Achievement points
   */
  getUnlockedRewardTiers(points: number): CombatAchievementRewardTier[] {
    return COMBAT_ACHIEVEMENT_REWARD_TIERS.filter(rewardTier => points >= rewardTier.pointsRequired);
  }

  /**
   * Return the next reward tier not yet unlocked at the given point total, if any.
   * @param points Total Combat Achievement points
   */
  getNextRewardTier(points: number): CombatAchievementRewardTier | undefined {
    return COMBAT_ACHIEVEMENT_REWARD_TIERS.find(rewardTier => points < rewardTier.pointsRequired);
  }

  /**
   * Build a full progress breakdown: completed/remaining tasks and points per tier,
   * plus overall totals and unlocked/next reward tiers.
   * @param completedTaskNames Names of tasks the player has completed (case-insensitive)
   */
  getProgress(completedTaskNames: Iterable<string>): CombatAchievementProgress {
    const completed = new Set([...completedTaskNames].map(n => n.toLowerCase()));
    const progress = {} as CombatAchievementProgress;

    for (const tier of TIERS) {
      const tierTasks = getCombatAchievementsByTier(tier);
      const completedTasks = tierTasks.filter(task => completed.has(task.name.toLowerCase()));
      const remainingTasks = tierTasks.filter(task => !completed.has(task.name.toLowerCase()));
      progress[tier] = {
        completed: completedTasks,
        pointsAvailable: tierTasks.length * COMBAT_ACHIEVEMENT_TIER_POINTS[tier],
        pointsEarned: completedTasks.length * COMBAT_ACHIEVEMENT_TIER_POINTS[tier],
        remaining: remainingTasks,
      };
    }

    const totalPoints = this.calculatePoints(completed);
    progress.totalPoints = totalPoints;
    progress.unlockedRewardTiers = this.getUnlockedRewardTiers(totalPoints);
    progress.nextRewardTier = this.getNextRewardTier(totalPoints);

    return progress;
  }
}

export { CombatAchievementTool };
