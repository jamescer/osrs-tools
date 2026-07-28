import { getAvailableMortifiers, Mortifier } from './Mortifier';
import { SlayerMaster } from './SlayerMaster';
import { Task } from './Task';
import { SlayerMasterConfig } from './types';

/**
 * Configuration for Mortimer, extending the standard SlayerMaster config with the
 * quirks that make him behave differently to every other Slayer Master.
 * Reference: https://oldschool.runescape.wiki/w/Mortimer
 */
export interface MortimerSlayerMasterConfig extends SlayerMasterConfig {
  /** Slayer points cost to skip a task offer (Mortimer: 100, vs. the usual 30). */
  skipCost?: number;
  /** Number of block slots Mortimer offers (Mortimer: 2, vs. the usual 6/7). */
  blockSlots?: number;
  /** Slayer points cost per block slot (Mortimer: 120). */
  blockSlotCost?: number;
  /** Number of task choices offered before the "Third Task Choice" Mortifier is unlocked. */
  baseTaskChoiceCount?: number;
  /** Number of task choices offered once the "Third Task Choice" Mortifier is unlocked. */
  extendedTaskChoiceCount?: number;
}

/**
 * Mortimer - a planned Slayer Master for the upcoming Wyrmscraig island.
 *
 * Unlike other masters, Mortimer:
 *  - Offers multiple task choices per visit (2, or 3 after 50 completed tasks) rather than
 *    assigning a single task outright.
 *  - Only assigns monsters that have a superior variant.
 *  - Can assign Venators directly.
 *  - Uses the Mortifier system in place of standard Slayer point rewards as the main incentive.
 *  - Has a significantly higher skip cost and far fewer, more expensive block slots.
 *
 * NOTE: This content had not been released at time of writing (Player Designed Island
 * Competition submission); values are subject to change.
 */
class MortimerSlayerMaster extends SlayerMaster {
  skipCost: number;
  blockSlots: number;
  blockSlotCost: number;
  baseTaskChoiceCount: number;
  extendedTaskChoiceCount: number;

  constructor(config: MortimerSlayerMasterConfig) {
    super(config);
    this.skipCost = config.skipCost ?? 100;
    this.blockSlots = config.blockSlots ?? 2;
    this.blockSlotCost = config.blockSlotCost ?? 120;
    this.baseTaskChoiceCount = config.baseTaskChoiceCount ?? 2;
    this.extendedTaskChoiceCount = config.extendedTaskChoiceCount ?? 3;
  }

  /**
   * All creatures Mortimer assigns have superior variants - this is his defining trait.
   */
  hasSuperiorVariants(): boolean {
    return true;
  }

  /**
   * Mortimer is the only Slayer Master who can assign Venators directly.
   */
  assignsVenatorsDirectly(): boolean {
    return true;
  }

  getSkipCost(): number {
    return this.skipCost;
  }

  getBlockSlots(): number {
    return this.blockSlots;
  }

  getBlockSlotCost(): number {
    return this.blockSlotCost;
  }

  /**
   * Get the Mortifiers currently unlocked for a player, based on tasks completed with Mortimer.
   */
  getAvailableMortifiers(completedTasks: number): Mortifier[] {
    return getAvailableMortifiers(completedTasks);
  }

  /**
   * Number of task choices offered on a given visit: 2 by default, 3 once the
   * "Third Task Choice" Mortifier is unlocked at 50 completed tasks.
   */
  getTaskChoiceCount(completedTasks: number): number {
    const thirdChoiceUnlocked = this.getAvailableMortifiers(completedTasks).some(
      mortifier => mortifier.name === 'Third Task Choice',
    );
    return thirdChoiceUnlocked ? this.extendedTaskChoiceCount : this.baseTaskChoiceCount;
  }

  /**
   * Get a set of distinct, weighted-random task choices for a Mortimer visit.
   * The number of choices scales with completedTasks (see getTaskChoiceCount()).
   * Mortimer never offers the same task twice in a single set of choices.
   * @returns {Task[]} The offered tasks. May be shorter than requested if there aren't enough distinct unblocked tasks.
   */
  getTaskChoices(completedTasks: number = 0): Task[] {
    const choiceCount = this.getTaskChoiceCount(completedTasks);
    const remainingTasks = this.getAvailableTasks().slice();
    const choices: Task[] = [];

    while (choices.length < choiceCount && remainingTasks.length > 0) {
      const totalWeight = remainingTasks.reduce((total, task) => total + (task.weight || 0), 0);
      if (totalWeight <= 0) break;

      const randomWeight = Math.random() * totalWeight;
      let cumulativeWeight = 0;
      let selectedIndex = -1;

      for (let i = 0; i < remainingTasks.length; i++) {
        cumulativeWeight += remainingTasks[i].weight || 0;
        if (randomWeight <= cumulativeWeight) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) break;

      choices.push(remainingTasks[selectedIndex]);
      remainingTasks.splice(selectedIndex, 1);
    }

    return choices;
  }
}

export { MortimerSlayerMaster };
