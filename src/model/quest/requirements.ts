/**
 * Types and interfaces for quest and skill requirements
 */

/**
 * Base type for all requirements in OSRS
 */
export enum RequirementType {
  /** Level requirement for a specific skill */
  Level = 'Level',

  /** Required combat level */
  CombatLevel = 'CombatLevel',

  /** Required Slayer level */
  SlayerLevel = 'SlayerLevel',

  /** Quest that must be completed */
  Quest = 'Quest',

  /** Number of quest points needed */
  QuestPoint = 'QuestPoint',

  /** Item that must be possessed */
  Item = 'Item',

  /** Location that must be accessible */
  Location = 'Location',

  /** Slayer reward that must be unlocked */
  SlayerUnlock = 'SlayerUnlock',
}

/**
 * Base interface for all requirement types
 */
export interface Requirement {
  /** The type of requirement */
  type: RequirementType;

  /** Human-readable description of the requirement */
  description: string;
}

/**
 * Requirement for a specific skill level
 */
export interface LevelRequirement extends Requirement {
  type: RequirementType.Level;

  /** The name of the skill */
  skillName: string;

  /** The required level */
  level: number;

  /** Whether the requirement can be boosted */
  boostable: boolean;
}

/**
 * Requirement for overall combat level
 */
export interface CombatLevelRequirement extends Requirement {
  type: RequirementType.CombatLevel;

  /** The required combat level */
  level: number;
}

/**
 * Requirement for Slayer level
 */
export interface SlayerLevelRequirement extends Requirement {
  type: RequirementType.SlayerLevel;

  /** The required Slayer level */
  level: number;

  /** Whether the requirement can be boosted */
  boostable: boolean;
}

/**
 * Requirement to have completed a quest
 */
export interface QuestRequirement extends Requirement {
  type: RequirementType.Quest;

  /** The name of the required quest */
  questName: string;
}

/**
 * Requirement for total quest points
 */
export interface QuestPointRequirement extends Requirement {
  type: RequirementType.QuestPoint;

  /** The number of quest points required */
  points: number;
}

/**
 * Requirement to possess an item
 */
export interface ItemRequirement extends Requirement {
  type: RequirementType.Item;

  /** The name of the required item */
  itemName: string;

  /** The quantity needed (defaults to 1) */
  quantity?: number;

  /** Whether the item is consumed during the quest */
  consumed?: boolean;
}

/**
 * Requirement to access a location
 */
export interface LocationRequirement extends Requirement {
  type: RequirementType.Location;

  /** The name of the required location */
  locationName: string;
}

/**
 * Requirement for a Slayer unlock
 */
export interface SlayerUnlockRequirement extends Requirement {
  type: RequirementType.SlayerUnlock;

  /** The name of the required Slayer unlock */
  unlockName: string;
}

/** Helper function to create a level requirement */
export function createLevelRequirement(
  skillName: string,
  level: number,
  boostable: boolean = false,
  description?: string,
): LevelRequirement {
  return {
    boostable,
    description: description || `${level} ${skillName}`,
    level,
    skillName,
    type: RequirementType.Level,
  };
}

/** Helper function to create a quest requirement */
export function createQuestRequirement(questName: string, description?: string): QuestRequirement {
  return {
    description: description || `Completion of ${questName}`,
    questName,
    type: RequirementType.Quest,
  };
}

/** Helper function to create a quest points requirement */
export function createQuestPointRequirement(
  points: number,
  description?: string,
): QuestPointRequirement {
  return {
    description: description || `${points} Quest Points`,
    points,
    type: RequirementType.QuestPoint,
  };
}

/** Helper function to create an item requirement */
export function createItemRequirement(
  itemName: string,
  quantity: number = 1,
  consumed: boolean = false,
  description?: string,
): ItemRequirement {
  return {
    consumed,
    description: description || `${quantity}x ${itemName}${consumed ? ' (consumed)' : ''}`,
    itemName,
    quantity,
    type: RequirementType.Item,
  };
}
