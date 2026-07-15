import { beforeEach, describe, expect, it } from '@jest/globals';
import { OsrsAccount } from 'src/runescape/model/account/OsrsAccount';
import { ArdougneDiary } from 'src/runescape/model/diaries/ardougne/Ardougne';
import type { DiaryTask } from 'src/runescape/model/diaries/Diary';
import { DiaryTool } from 'src/runescape/model/diaries/DiaryTool';
import {
  CombatLevelRequirement,
  LevelRequirement,
  QuestPointRequirement,
  QuestRequirement,
} from 'src/runescape/model/Requirement';

import { account } from '../../resources/A_Squeezer_Main_Data';

// A Squeezer key skill levels:
//   agility: 84, herblore: 85, firemaking: 88, hunter: 87
//   prayer: 90, runecraft: 91, construction: 85
//   most combat / gathering skills: 99
//   questPoints: 300, combatLevel: 126

const noReqTask: DiaryTask = { description: 'No requirements task', requirements: [] };
const metSkillTask: DiaryTask = {
  description: 'Requires Herblore 85',
  requirements: [new LevelRequirement('Herblore', 85, false)],
};
const unmetSkillTask: DiaryTask = {
  description: 'Requires Agility 90',
  requirements: [new LevelRequirement('Agility', 90, false)],
};
const boostableMetTask: DiaryTask = {
  description: 'Requires Agility 88 (boostable)',
  requirements: [new LevelRequirement('Agility', 88, true)],
}; // 84 + 5 boost = 89 >= 88
const boostableUnmetTask: DiaryTask = {
  description: 'Requires Agility 90 (boostable)',
  requirements: [new LevelRequirement('Agility', 90, true)],
}; // 84 + 5 = 89 < 90
const combatMetTask: DiaryTask = {
  description: 'Requires combat 100',
  requirements: [new CombatLevelRequirement(100)],
};
const combatUnmetTask: DiaryTask = {
  description: 'Requires combat 130',
  requirements: [new CombatLevelRequirement(130)],
};
const qpMetTask: DiaryTask = { description: 'Requires 200 QP', requirements: [new QuestPointRequirement(200)] };
const qpUnmetTask: DiaryTask = { description: 'Requires 400 QP', requirements: [new QuestPointRequirement(400)] };
const questTask: DiaryTask = {
  description: 'Requires Rune Mysteries',
  requirements: [new QuestRequirement('Rune Mysteries')],
};

describe('DiaryTool', () => {
  let tool: DiaryTool;
  let testAccount: OsrsAccount;

  beforeEach(() => {
    testAccount = OsrsAccount.fromJson(account);
    tool = new DiaryTool(testAccount);
  });

  describe('Account management', () => {
    it('holds an account passed to the constructor', () => {
      expect(tool.getOsrsAccount()).toBe(testAccount);
    });

    it('returns undefined when no account is set', () => {
      expect(new DiaryTool().getOsrsAccount()).toBeUndefined();
    });

    it('sets and retrieves an account via setOsrsAccount', () => {
      const fresh = new DiaryTool();
      expect(fresh.setOsrsAccount(testAccount)).toBe(true);
      expect(fresh.getOsrsAccount()).toBe(testAccount);
    });

    it('replaces the bound account when setOsrsAccount is called again', () => {
      const other = OsrsAccount.fromJson({ ...account, name: 'Other' });
      tool.setOsrsAccount(other);
      expect(tool.getOsrsAccount()?.name).toBe('Other');
    });
  });

  describe('canCompleteTask', () => {
    it('returns false when no account is bound and none is passed', () => {
      expect(new DiaryTool().canCompleteTask(noReqTask)).toBe(false);
    });

    it('returns true for a task with no requirements', () => {
      expect(tool.canCompleteTask(noReqTask)).toBe(true);
    });

    it('returns true when the account meets a skill requirement', () => {
      expect(tool.canCompleteTask(metSkillTask)).toBe(true);
    });

    it('returns false when the account does not meet a skill requirement', () => {
      expect(tool.canCompleteTask(unmetSkillTask)).toBe(false);
    });

    it('returns true when skill + boost meets a boostable requirement', () => {
      expect(tool.canCompleteTask(boostableMetTask)).toBe(true);
    });

    it('returns false when skill + boost still falls short of a boostable requirement', () => {
      expect(tool.canCompleteTask(boostableUnmetTask)).toBe(false);
    });

    it('returns true when account meets a combat level requirement', () => {
      expect(tool.canCompleteTask(combatMetTask)).toBe(true);
    });

    it('returns false when account does not meet a combat level requirement', () => {
      expect(tool.canCompleteTask(combatUnmetTask)).toBe(false);
    });

    it('returns true when account has enough quest points', () => {
      expect(tool.canCompleteTask(qpMetTask)).toBe(true);
    });

    it('returns false when account does not have enough quest points', () => {
      expect(tool.canCompleteTask(qpUnmetTask)).toBe(false);
    });

    it('returns true for a quest requirement the account can fulfil', () => {
      expect(tool.canCompleteTask(questTask)).toBe(true);
    });

    it('accepts an account override instead of the bound account', () => {
      const unbound = new DiaryTool();
      expect(unbound.canCompleteTask(noReqTask, testAccount)).toBe(true);
      expect(unbound.canCompleteTask(unmetSkillTask, testAccount)).toBe(false);
    });
  });

  describe('getCompletableTasks', () => {
    it('returns empty array when no account is bound', () => {
      expect(new DiaryTool().getCompletableTasks(ArdougneDiary.easy)).toHaveLength(0);
    });

    it('returns completable tasks for a single diary tier (DiaryLevel)', () => {
      const completable = tool.getCompletableTasks(ArdougneDiary.easy);
      expect(completable.length).toBeGreaterThan(0);
      expect(completable.length).toBeLessThanOrEqual(ArdougneDiary.easy.tasks.length);
    });

    it('returns completable tasks across all tiers when given a full Diary', () => {
      const allTasks = [
        ...ArdougneDiary.easy.tasks,
        ...ArdougneDiary.medium.tasks,
        ...ArdougneDiary.hard.tasks,
        ...ArdougneDiary.elite.tasks,
      ];
      const completable = tool.getCompletableTasks(ArdougneDiary);
      expect(completable.length).toBeGreaterThan(0);
      expect(completable.length).toBeLessThanOrEqual(allTasks.length);
    });

    it('accepts an account override', () => {
      const unbound = new DiaryTool();
      const completable = unbound.getCompletableTasks(ArdougneDiary.easy, testAccount);
      expect(completable.length).toBeGreaterThan(0);
    });
  });

  describe('getRemainingTasks', () => {
    it('returns empty array when no account is bound', () => {
      expect(new DiaryTool().getRemainingTasks(ArdougneDiary.easy)).toHaveLength(0);
    });

    it('completable + remaining equals total tasks for a DiaryLevel', () => {
      const completable = tool.getCompletableTasks(ArdougneDiary.easy);
      const remaining = tool.getRemainingTasks(ArdougneDiary.easy);
      expect(completable.length + remaining.length).toBe(ArdougneDiary.easy.tasks.length);
    });

    it('completable + remaining equals total tasks for a full Diary', () => {
      const allTasks = [
        ...ArdougneDiary.easy.tasks,
        ...ArdougneDiary.medium.tasks,
        ...ArdougneDiary.hard.tasks,
        ...ArdougneDiary.elite.tasks,
      ];
      const completable = tool.getCompletableTasks(ArdougneDiary);
      const remaining = tool.getRemainingTasks(ArdougneDiary);
      expect(completable.length + remaining.length).toBe(allTasks.length);
    });

    it('completable and remaining are disjoint', () => {
      const completable = tool.getCompletableTasks(ArdougneDiary);
      const remaining = tool.getRemainingTasks(ArdougneDiary);
      const completableDescs = new Set(completable.map(t => t.description));
      for (const task of remaining) {
        expect(completableDescs.has(task.description)).toBe(false);
      }
    });
  });

  describe('canCompleteLevel', () => {
    it('returns false when no account is bound', () => {
      expect(new DiaryTool().canCompleteLevel(ArdougneDiary.easy)).toBe(false);
    });

    it('returns true when every task in the tier is completable', () => {
      // Build a tier where all tasks have no requirements
      const allOpen = { tasks: [noReqTask, noReqTask] };
      expect(tool.canCompleteLevel(allOpen)).toBe(true);
    });

    it('returns false when any task in the tier cannot be completed', () => {
      const mixed = { tasks: [noReqTask, unmetSkillTask] };
      expect(tool.canCompleteLevel(mixed)).toBe(false);
    });

    it('accepts an account override', () => {
      const unbound = new DiaryTool();
      expect(unbound.canCompleteLevel({ tasks: [noReqTask] }, testAccount)).toBe(true);
    });
  });

  describe('getDiaryProgress', () => {
    it('returns false when no account is bound — all tiers have empty arrays', () => {
      const progress = new DiaryTool().getDiaryProgress(ArdougneDiary);
      expect(progress.easy.completable).toHaveLength(0);
      expect(progress.easy.remaining).toHaveLength(0);
      expect(progress.hard.completable).toHaveLength(0);
    });

    it('returns all four tiers', () => {
      const progress = tool.getDiaryProgress(ArdougneDiary);
      expect(progress).toHaveProperty('easy');
      expect(progress).toHaveProperty('medium');
      expect(progress).toHaveProperty('hard');
      expect(progress).toHaveProperty('elite');
    });

    it('total matches the source tier task count for each tier', () => {
      const progress = tool.getDiaryProgress(ArdougneDiary);
      expect(progress.easy.total).toBe(ArdougneDiary.easy.tasks.length);
      expect(progress.medium.total).toBe(ArdougneDiary.medium.tasks.length);
      expect(progress.hard.total).toBe(ArdougneDiary.hard.tasks.length);
      expect(progress.elite.total).toBe(ArdougneDiary.elite.tasks.length);
    });

    it('completable + remaining === total for every tier', () => {
      const progress = tool.getDiaryProgress(ArdougneDiary);
      for (const tier of ['easy', 'medium', 'hard', 'elite'] as const) {
        const { completable, remaining, total } = progress[tier];
        expect(completable.length + remaining.length).toBe(total);
      }
    });

    it('is consistent with getCompletableTasks per tier', () => {
      const progress = tool.getDiaryProgress(ArdougneDiary);
      for (const tier of ['easy', 'medium', 'hard', 'elite'] as const) {
        expect(progress[tier].completable).toEqual(tool.getCompletableTasks(ArdougneDiary[tier]));
        expect(progress[tier].remaining).toEqual(tool.getRemainingTasks(ArdougneDiary[tier]));
      }
    });

    it('accepts an account override', () => {
      const unbound = new DiaryTool();
      const progress = unbound.getDiaryProgress(ArdougneDiary, testAccount);
      expect(progress.easy.total).toBe(ArdougneDiary.easy.tasks.length);
    });
  });
});
