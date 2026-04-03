/**
 * Enumeration of possible skills in the game.
 * Used for accessing skill-related data in accounts.
 * See:: https://oldschool.runescape.wiki/w/Skills
 * @enum {string}
 * @readonly
 * @reference Skill names from OSRS APIv1
 */
export enum Skill {
  Agility = "Agility",
  Attack = "Attack",
  Construction = "Construction",
  Cooking = "Cooking",
  Crafting = "Crafting",
  Defence = "Defence",
  Farming = "Farming",
  Firemaking = "Firemaking",
  Fishing = "Fishing",
  Fletching = "Fletching",
  Herblore = "Herblore",
  Hitpoints = "Hitpoints",
  Hunter = "Hunter",
  Magic = "Magic",
  Mining = "Mining",
  Prayer = "Prayer",
  Ranged = "Ranged",
  Runecraft = "Runecraft",
  Sailing = "Sailing",
  Slayer = "Slayer",
  Smithing = "Smithing",
  Strength = "Strength",
  Thieving = "Thieving",
  Woodcutting = "Woodcutting",
}

/**
 * Metadata for each skill including category, max level, and boostability.
 * Used for validation and requirement checking across quests, diaries, and accounts.
 */
export interface SkillMetadata {
  /** Category of the skill for organizational purposes */
  category: "combat" | "gathering" | "production" | "support";
  /** Maximum attainable level for the skill */
  maxLevel: number;
  /** Whether this skill can be boosted above natural level */
  isBoostable: boolean;
}

/**
 * Comprehensive metadata for all skills.
 * Provides details about skill properties for validation and categorization.
 */
export const SKILL_METADATA: Record<Skill, SkillMetadata> = {
  [Skill.Attack]: { category: "combat", maxLevel: 99, isBoostable: true },
  [Skill.Defence]: { category: "combat", maxLevel: 99, isBoostable: true },
  [Skill.Strength]: { category: "combat", maxLevel: 99, isBoostable: true },
  [Skill.Hitpoints]: { category: "combat", maxLevel: 99, isBoostable: true },
  [Skill.Ranged]: { category: "combat", maxLevel: 99, isBoostable: true },
  [Skill.Prayer]: { category: "combat", maxLevel: 99, isBoostable: true },
  [Skill.Magic]: { category: "combat", maxLevel: 99, isBoostable: true },
  [Skill.Cooking]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Woodcutting]: { category: "gathering", maxLevel: 99, isBoostable: true },
  [Skill.Fletching]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Fishing]: { category: "gathering", maxLevel: 99, isBoostable: true },
  [Skill.Firemaking]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Crafting]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Smithing]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Mining]: { category: "gathering", maxLevel: 99, isBoostable: true },
  [Skill.Herblore]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Agility]: { category: "support", maxLevel: 99, isBoostable: true },
  [Skill.Thieving]: { category: "support", maxLevel: 99, isBoostable: true },
  [Skill.Slayer]: { category: "support", maxLevel: 99, isBoostable: true },
  [Skill.Farming]: { category: "gathering", maxLevel: 99, isBoostable: true },
  [Skill.Runecraft]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Construction]: { category: "production", maxLevel: 99, isBoostable: true },
  [Skill.Hunter]: { category: "gathering", maxLevel: 99, isBoostable: true },
  [Skill.Sailing]: { category: "gathering", maxLevel: 99, isBoostable: true },
};
