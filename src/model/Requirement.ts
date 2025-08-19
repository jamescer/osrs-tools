// Base interface for all types of requirements
interface Requirement {
  description: string;
  type: RequirementType;
}

// TODO: Add a requirement type for all "levels" (combat, slayer, farming, crafting etc.)
class LevelRequirement implements Requirement {
  type: RequirementType = RequirementType.Level;
  skillName: string;
  level: number;
  boostable: boolean = false; // Indicates if the level can be boosted

  constructor(skillName: string, level: number, boostable: boolean = false) {
    this.boostable = boostable;
    this.skillName = skillName;
    this.level = level;
  }

  get description(): string {
    return `Level ${this.level}`;
  }
}

// Enum for requirement types
enum RequirementType {
  SlayerLevel = 'SlayerLevel',
  Level = 'Level',
  CombatLevel = 'CombatLevel',
  Quest = 'Quest',
  Item = 'Item',
  QuestPoint = 'QuestPoint',
  Location = 'Location',
  SlayerUnlock = 'SlayerUnlock',
}

// Slayer Unlock requirement
class SlayerUnlockRequirement implements Requirement {
  type: RequirementType = RequirementType.SlayerUnlock;
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  get description(): string {
    return `Slayer unlock: ${this.name}`;
  }
}

// Slayer level requirement
class SlayerLevelRequirement implements Requirement {
  type: RequirementType = RequirementType.SlayerLevel;
  level: number;

  constructor(level: number) {
    this.level = level;
  }

  get description(): string {
    return `Slayer level ${this.level}`;
  }
}

// Combat level requirement
class CombatLevelRequirement implements Requirement {
  type: RequirementType = RequirementType.CombatLevel;
  level: number;

  constructor(level: number) {
    this.level = level;
  }

  get description(): string {
    return `Combat level ${this.level}`;
  }
}

// Quest requirement
class QuestRequirement implements Requirement {
  type: RequirementType = RequirementType.Quest;
  questName: string;

  constructor(questName: string) {
    this.questName = questName;
  }

  get description(): string {
    return `Completed quest: ${this.questName}`;
  }
}

class QuestPointRequirement implements Requirement {
  type: RequirementType = RequirementType.Quest;
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  get description(): string {
    return `Quest Points Needed: ${this.amount}`;
  }
}

// Item requirement
class ItemRequirement implements Requirement {
  type: RequirementType = RequirementType.Item;
  itemName: string;
  quantity: number;
  /** Whether the item is consumed during the quest */
  consumed: boolean;
  /** Alternative items that can be used instead */
  alternatives?: string[];
  /** Whether the item must be noted */
  noted?: boolean;
  /** Whether the item can be banked and withdrawn during the quest */
  bankable?: boolean;
  /** Any additional notes about the item requirement */
  notes?: string;

  constructor(
    itemName: string,
    quantity: number = 1,
    options: {
      consumed?: boolean;
      alternatives?: string[];
      noted?: boolean;
      bankable?: boolean;
      notes?: string;
    } = {},
  ) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.consumed = options.consumed ?? true;
    this.alternatives = options.alternatives;
    this.noted = options.noted;
    this.bankable = options.bankable;
    this.notes = options.notes;
  }

  get description(): string {
    let desc = `${this.quantity}x ${this.itemName}`;
    if (this.noted) desc += ' (noted)';
    if (!this.consumed) desc += ' (not consumed)';
    if (this.alternatives?.length) {
      desc += ` (or ${this.alternatives.join(' or ')})`;
    }
    if (this.notes) desc += ` (${this.notes})`;
    return desc;
  }
}

// Location requirement
class LocationRequirement implements Requirement {
  type: RequirementType = RequirementType.Location;
  locationName: string;

  constructor(locationName: string) {
    this.locationName = locationName;
  }

  get description(): string {
    return `Access to location: ${this.locationName}`;
  }
}

export {
  CombatLevelRequirement,
  QuestPointRequirement,
  ItemRequirement,
  LevelRequirement,
  LocationRequirement,
  QuestRequirement,
  Requirement,
  RequirementType,
  SlayerLevelRequirement,
  SlayerUnlockRequirement,
};
