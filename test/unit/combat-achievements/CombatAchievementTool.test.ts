import { beforeEach, describe, expect, it } from '@jest/globals';
import { OsrsAccount } from 'src/runescape/model/account/OsrsAccount';
import { CombatAchievementTool } from 'src/runescape/model/combat-achievements/CombatAchievementTool';
import { ALL_COMBAT_ACHIEVEMENT_TASKS, EASY_COMBAT_ACHIEVEMENTS } from 'src/runescape/model/combat-achievements/tasks';

import { account } from '../../resources/A_Squeezer_Main_Data';

// A Squeezer bosses of interest:
//   barrows: score 40 (engaged), giantMole: score 250 (engaged)
//   alchemicalHydra: score 1094 (engaged), abyssalSire: score -1 (not engaged)
//   Aberrant Spectre is not a hiscore-tracked boss category at all

const barrowsTask = EASY_COMBAT_ACHIEVEMENTS.find(t => t.name === 'Barrows Novice')!;
const aberrantSpectreTask = EASY_COMBAT_ACHIEVEMENTS.find(t => t.name === 'Noxious Foe')!;
const abyssalSireTask = ALL_COMBAT_ACHIEVEMENT_TASKS.find(t => t.monster === 'Abyssal Sire')!;
const alchemicalHydraTask = ALL_COMBAT_ACHIEVEMENT_TASKS.find(t => t.monster === 'Alchemical Hydra')!;

describe('CombatAchievementTool', () => {
  let tool: CombatAchievementTool;
  let testAccount: OsrsAccount;

  beforeEach(() => {
    testAccount = OsrsAccount.fromJson(account);
    tool = new CombatAchievementTool(testAccount);
  });

  describe('Account management', () => {
    it('holds an account passed to the constructor', () => {
      expect(tool.getOsrsAccount()).toBe(testAccount);
    });

    it('returns undefined when no account is set', () => {
      expect(new CombatAchievementTool().getOsrsAccount()).toBeUndefined();
    });

    it('sets and retrieves an account via setOsrsAccount', () => {
      const fresh = new CombatAchievementTool();
      expect(fresh.setOsrsAccount(testAccount)).toBe(true);
      expect(fresh.getOsrsAccount()).toBe(testAccount);
    });
  });

  describe('hasEngagedMonster', () => {
    it('returns false when no account is bound and none is passed', () => {
      expect(new CombatAchievementTool().hasEngagedMonster(barrowsTask)).toBe(false);
    });

    it('returns true for a monster with a positive boss score', () => {
      expect(tool.hasEngagedMonster(barrowsTask)).toBe(true);
    });

    it('returns true for a multi-word boss name normalized to camelCase (Alchemical Hydra)', () => {
      expect(tool.hasEngagedMonster(alchemicalHydraTask)).toBe(true);
    });

    it('returns false for a boss with an unranked (-1) score', () => {
      expect(tool.hasEngagedMonster(abyssalSireTask)).toBe(false);
    });

    it("returns false for a monster that isn't a hiscore-tracked boss category", () => {
      expect(tool.hasEngagedMonster(aberrantSpectreTask)).toBe(false);
    });

    it('accepts an account override instead of the bound account', () => {
      const unbound = new CombatAchievementTool();
      expect(unbound.hasEngagedMonster(barrowsTask, testAccount)).toBe(true);
    });
  });

  describe('getAccessibleTasks / getInaccessibleTasks', () => {
    it('returns empty arrays when no account is bound', () => {
      const unbound = new CombatAchievementTool();
      expect(unbound.getAccessibleTasks(EASY_COMBAT_ACHIEVEMENTS)).toHaveLength(0);
      expect(unbound.getInaccessibleTasks(EASY_COMBAT_ACHIEVEMENTS)).toHaveLength(0);
    });

    it('splits tasks into accessible and inaccessible without overlap', () => {
      const accessible = tool.getAccessibleTasks(EASY_COMBAT_ACHIEVEMENTS);
      const inaccessible = tool.getInaccessibleTasks(EASY_COMBAT_ACHIEVEMENTS);
      expect(accessible.length + inaccessible.length).toBe(EASY_COMBAT_ACHIEVEMENTS.length);
      const accessibleNames = new Set(accessible.map(t => t.name));
      for (const task of inaccessible) {
        expect(accessibleNames.has(task.name)).toBe(false);
      }
    });

    it('includes the Barrows task in accessible tasks', () => {
      const accessible = tool.getAccessibleTasks(EASY_COMBAT_ACHIEVEMENTS);
      expect(accessible.some(t => t.name === 'Barrows Novice')).toBe(true);
    });
  });

  describe('calculatePoints', () => {
    it('sums points for completed task names', () => {
      const points = tool.calculatePoints(['Barrows Novice', 'Noxious Foe']);
      expect(points).toBe(2); // both easy tier, 1 point each
    });

    it('is case-insensitive', () => {
      expect(tool.calculatePoints(['barrows novice'])).toBe(1);
    });

    it('ignores unknown task names', () => {
      expect(tool.calculatePoints(['Not A Real Task'])).toBe(0);
    });

    it('returns 0 for an empty completed set', () => {
      expect(tool.calculatePoints([])).toBe(0);
    });
  });

  describe('getUnlockedRewardTiers / getNextRewardTier', () => {
    it('unlocks no reward tiers at 0 points', () => {
      expect(tool.getUnlockedRewardTiers(0)).toHaveLength(0);
      expect(tool.getNextRewardTier(0)?.tier).toBe('Easy');
    });

    it('unlocks exactly the Easy tier at 41 points', () => {
      const unlocked = tool.getUnlockedRewardTiers(41);
      expect(unlocked.map(r => r.tier)).toEqual(['Easy']);
      expect(tool.getNextRewardTier(41)?.tier).toBe('Medium');
    });

    it('unlocks every tier at the maximum possible points', () => {
      const unlocked = tool.getUnlockedRewardTiers(2630);
      expect(unlocked).toHaveLength(6);
      expect(tool.getNextRewardTier(2630)).toBeUndefined();
    });
  });

  describe('getProgress', () => {
    it('reports zero progress for an empty completed set', () => {
      const progress = tool.getProgress([]);
      expect(progress.totalPoints).toBe(0);
      expect(progress.unlockedRewardTiers).toHaveLength(0);
      expect(progress.Easy.completed).toHaveLength(0);
      expect(progress.Easy.remaining).toHaveLength(EASY_COMBAT_ACHIEVEMENTS.length);
    });

    it('reflects completed tasks in the matching tier', () => {
      const progress = tool.getProgress(['Barrows Novice']);
      expect(progress.Easy.completed).toHaveLength(1);
      expect(progress.Easy.pointsEarned).toBe(1);
      expect(progress.totalPoints).toBe(1);
    });

    it('pointsAvailable matches tier size times tier point value', () => {
      const progress = tool.getProgress([]);
      expect(progress.Easy.pointsAvailable).toBe(EASY_COMBAT_ACHIEVEMENTS.length * 1);
    });

    it('completed + remaining equals total tasks for every tier', () => {
      const progress = tool.getProgress(['Barrows Novice', 'Noxious Foe']);
      for (const tier of ['Easy', 'Medium', 'Hard', 'Elite', 'Master', 'Grandmaster'] as const) {
        const { completed, remaining } = progress[tier];
        const total = completed.length + remaining.length;
        expect(total).toBeGreaterThan(0);
      }
    });
  });
});
