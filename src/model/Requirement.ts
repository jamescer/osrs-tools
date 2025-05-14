// Base interface for all types of requirements
interface Requirement {
  description: string;
  isMet(): boolean;
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

  isMet(): boolean {
    // Replace with actual logic to check the player's level
    return false; // TODO
  }
}

// Enum for requirement types
enum RequirementType {
  SlayerLevel = "SlayerLevel",
  Level = "Level",
  CombatLevel = "CombatLevel",
  Quest = "Quest",
  Item = "Item",
  Location = "Location",
  SlayerUnlock = "SlayerUnlock",
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

  isMet(): boolean {
    // Replace with actual logic to check the player's Slayer level
    return false; // TODO
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

  isMet(): boolean {
    // Replace with actual logic to check the player's Slayer level
    return false; // TODO
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

  isMet(): boolean {
    // Replace with actual logic to check the player's Combat level
    return false; // TODO
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

  isMet(): boolean {
    // Replace with actual logic to check if the quest is completed
    return false; // TODO
  }
}

// Item requirement
class ItemRequirement implements Requirement {
  type: RequirementType = RequirementType.Item;
  itemName: string;

  constructor(itemName: string) {
    this.itemName = itemName;
  }

  get description(): string {
    return `Has item: ${this.itemName}`;
  }

  isMet(): boolean {
    // Replace with actual logic to check if the player has the item
    return false; // TODO
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

  isMet(): boolean {
    // Replace with actual logic to check if the player is in the location
    return false; // TODO
  }
}

// Example usage: Array of requirements for a monster
const monsterRequirements: Requirement[] = [
  new SlayerLevelRequirement(44),
  new CombatLevelRequirement(5),
  new QuestRequirement("Dragon Slayer"),
  new ItemRequirement("Anti-dragon shield"),
  new LocationRequirement("Taverley Dungeon"),
];

export {
  CombatLevelRequirement,
  ItemRequirement,
  LevelRequirement,
  LocationRequirement,
  QuestRequirement,
  Requirement,
  RequirementType,
  SlayerLevelRequirement,
  SlayerUnlockRequirement,
};
