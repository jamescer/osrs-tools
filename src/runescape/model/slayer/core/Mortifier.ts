/**
 * Mortifiers - Mortimer's unique task modifier system
 * Reference: https://oldschool.runescape.wiki/w/Mortimer
 *
 * Unlike other Slayer Masters, Mortimer does not reward Slayer points as the primary
 * incentive for completing tasks. Instead his tasks carry a "Mortifier" - a modifier
 * that is unlocked permanently as a player completes more tasks with him, and which
 * is then applied (with a variable magnitude, "X") to a given task offer.
 *
 * Unlock thresholds (0/0/15/25/40/50 tasks completed with Mortimer) confirmed against the
 * live release notes: https://oldschool.runescape.wiki/w/Update:Meet_Mortimer:_Your_Newest_Slayer_Master
 */

export interface MortifierConfig {
  id: number;
  name: string;
  /** Number of Slayer tasks completed with Mortimer required to unlock this Mortifier. */
  unlockThreshold: number;
  description: string;
}

export class Mortifier {
  id: number;
  name: string;
  unlockThreshold: number;
  description: string;

  constructor(config: MortifierConfig) {
    this.id = config.id;
    this.name = config.name;
    this.unlockThreshold = config.unlockThreshold;
    this.description = config.description;
  }

  /**
   * Get the number of tasks that must be completed with Mortimer to unlock this Mortifier.
   */
  getUnlockThreshold(): number {
    return this.unlockThreshold;
  }

  /**
   * Whether this Mortifier is unlocked for a player with the given number of completed tasks.
   */
  isUnlockedAt(completedTasks: number): boolean {
    return completedTasks >= this.unlockThreshold;
  }

  getDescription(): string {
    return this.description;
  }
}

const BonusSlayerPoints = new Mortifier({
  description: 'Task awards X additional Slayer Points on completion.',
  id: 1,
  name: 'Bonus Slayer Points',
  unlockThreshold: 0,
});

const QuantityModifier = new Mortifier({
  description: 'Task quantity modified by X%.',
  id: 2,
  name: 'Quantity Modifier',
  unlockThreshold: 0,
});

const ClueScrollBoost = new Mortifier({
  description: 'Clue scroll drop-rates are increased by X%.',
  id: 3,
  name: 'Clue Scroll Boost',
  unlockThreshold: 15,
});

const SuperiorUniqueBoost = new Mortifier({
  description: "Slayer creatures' superiors access the superior unique table X% more often.",
  id: 4,
  name: 'Superior Unique Boost',
  unlockThreshold: 25,
});

const BonusSlayerExp = new Mortifier({
  description: 'Slayer creatures award X% more Slayer XP.',
  id: 5,
  name: 'Bonus Slayer Exp',
  unlockThreshold: 40,
});

const ThirdTaskChoice = new Mortifier({
  description: 'Adds a third task choice to Mortimer task offers.',
  id: 6,
  name: 'Third Task Choice',
  unlockThreshold: 50,
});

/**
 * All Mortifiers, in unlock order.
 */
export const MORTIFIERS: Mortifier[] = [
  BonusSlayerPoints,
  QuantityModifier,
  ClueScrollBoost,
  SuperiorUniqueBoost,
  BonusSlayerExp,
  ThirdTaskChoice,
];

/**
 * Get every Mortifier unlocked for a player with the given number of tasks completed with Mortimer.
 */
export function getAvailableMortifiers(completedTasks: number): Mortifier[] {
  return MORTIFIERS.filter(mortifier => mortifier.isUnlockedAt(completedTasks));
}

/**
 * Get a single Mortifier by its name (case insensitive).
 */
export function getMortifierByName(name: string): Mortifier | undefined {
  const normalized = name.toLowerCase();
  return MORTIFIERS.find(mortifier => mortifier.name.toLowerCase() === normalized);
}
