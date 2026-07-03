import { OsrsAccount } from '../account/OsrsAccount';
import { QuestTool } from '../quest/QuestTool';
import {
  CombatLevelRequirement,
  LevelRequirement,
  QuestPointRequirement,
  QuestRequirement,
  RequirementType,
} from '../Requirement';
import type { Diary, DiaryLevel, DiaryTask } from './Diary';

export type DiaryTier = 'easy' | 'medium' | 'hard' | 'elite';

export interface DiaryTierProgress {
  completable: DiaryTask[];
  remaining: DiaryTask[];
  total: number;
}

export interface DiaryProgress {
  easy: DiaryTierProgress;
  medium: DiaryTierProgress;
  hard: DiaryTierProgress;
  elite: DiaryTierProgress;
}

function isDiary(source: Diary | DiaryLevel): source is Diary {
  return 'easy' in source;
}

const TIERS: DiaryTier[] = ['easy', 'medium', 'hard', 'elite'];

class DiaryTool {
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
   * Check whether an account meets the verifiable requirements for a single diary task.
   * Item and Location requirements cannot be verified from account data and are treated as passing.
   * @param task The diary task to check
   * @param account Override the bound account for this check
   */
  canCompleteTask(task: DiaryTask, account?: OsrsAccount): boolean {
    const acc = account ?? this.osrsAccount;
    if (!acc) return false;
    if (!task.requirements || task.requirements.length === 0) return true;

    // Instantiate once per call so quest registry cache is shared across all requirements
    const questTool = new QuestTool(acc);

    for (const req of task.requirements) {
      if (req.type === RequirementType.Level) {
        const levelReq = req as LevelRequirement;
        const skill = acc.getSkill(levelReq.skillName);
        if (!skill) return false;
        const effective = levelReq.boostable
          ? skill.level + QuestTool.getMaxSkillBoost(levelReq.skillName)
          : skill.level;
        if (effective < levelReq.level) return false;
      } else if (req.type === RequirementType.Quest) {
        const questReq = req as QuestRequirement;
        const quest = QuestTool.getQuestByName(questReq.questName);
        if (!questTool.canCompleteQuest(quest)) return false;
      } else if (req.type === RequirementType.CombatLevel) {
        const combatReq = req as CombatLevelRequirement;
        if (acc.combatLevel < combatReq.level) return false;
      } else if (req.type === RequirementType.QuestPoint) {
        const qpReq = req as QuestPointRequirement;
        if (acc.questPoints < qpReq.amount) return false;
      }
      // Item and Location requirements cannot be verified from account data — treated as passing
    }
    return true;
  }

  /**
   * Check whether an account meets all task requirements in a diary tier.
   * @param level A single DiaryLevel (Easy/Medium/Hard/Elite)
   * @param account Override the bound account for this check
   */
  canCompleteLevel(level: DiaryLevel, account?: OsrsAccount): boolean {
    const acc = account ?? this.osrsAccount;
    if (!acc) return false;
    return level.tasks.every(task => this.canCompleteTask(task, acc));
  }

  /**
   * Return all tasks from a diary or diary tier that the account meets requirements for.
   * When passed a full Diary, combines tasks across all four tiers.
   * @param source A full Diary or a single DiaryLevel (Easy/Medium/Hard/Elite)
   * @param account Override the bound account for this check
   */
  getCompletableTasks(source: Diary | DiaryLevel, account?: OsrsAccount): DiaryTask[] {
    const acc = account ?? this.osrsAccount;
    if (!acc) return [];
    return this.extractTasks(source).filter(task => this.canCompleteTask(task, acc));
  }

  /**
   * Return all tasks from a diary or diary tier that the account does NOT yet meet requirements for.
   * When passed a full Diary, combines tasks across all four tiers.
   * @param source A full Diary or a single DiaryLevel (Easy/Medium/Hard/Elite)
   * @param account Override the bound account for this check
   */
  getRemainingTasks(source: Diary | DiaryLevel, account?: OsrsAccount): DiaryTask[] {
    const acc = account ?? this.osrsAccount;
    if (!acc) return [];
    return this.extractTasks(source).filter(task => !this.canCompleteTask(task, acc));
  }

  /**
   * Return a structured breakdown of completable vs remaining tasks for every tier of a diary.
   * Useful for building a progress view without four separate calls.
   * @param diary The full diary to analyse
   * @param account Override the bound account for this check
   */
  getDiaryProgress(diary: Diary, account?: OsrsAccount): DiaryProgress {
    const acc = account ?? this.osrsAccount;
    const progress = {} as DiaryProgress;
    for (const tier of TIERS) {
      const level = diary[tier];
      const completable = acc ? level.tasks.filter(t => this.canCompleteTask(t, acc)) : [];
      const remaining = acc ? level.tasks.filter(t => !this.canCompleteTask(t, acc)) : [];
      progress[tier] = { completable, remaining, total: level.tasks.length };
    }
    return progress;
  }

  private extractTasks(source: Diary | DiaryLevel): DiaryTask[] {
    if (isDiary(source)) {
      return [...source.easy.tasks, ...source.medium.tasks, ...source.hard.tasks, ...source.elite.tasks];
    }
    return source.tasks;
  }
}

export { DiaryTool };
