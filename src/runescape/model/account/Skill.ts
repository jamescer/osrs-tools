/**
 * Enumeration of possible skills in the game.
 * Used for accessing skill-related data in accounts.
 * See:: https://oldschool.runescape.wiki/w/Skills
 * @enum {string}
 * @readonly
 * @reference Skill names from OSRS APIv1
 */
export enum Skill {
  Agility = 'Agility',
  Attack = 'Attack',
  Construction = 'Construction',
  Cooking = 'Cooking',
  Crafting = 'Crafting',
  Defence = 'Defence',
  Farming = 'Farming',
  Firemaking = 'Firemaking',
  Fishing = 'Fishing',
  Fletching = 'Fletching',
  Herblore = 'Herblore',
  Hitpoints = 'Hitpoints',
  Hunter = 'Hunter',
  Magic = 'Magic',
  Mining = 'Mining',
  Prayer = 'Prayer',
  Ranged = 'Ranged',
  Runecraft = 'Runecraft',
  Sailing = 'Sailing',
  Slayer = 'Slayer',
  Smithing = 'Smithing',
  Strength = 'Strength',
  Thieving = 'Thieving',
  Woodcutting = 'Woodcutting',
}

/**
 * Metadata for each skill including category, max level, and boostability.
 * Used for validation and requirement checking across quests, diaries, and accounts.
 */
export interface SkillMetadata {
  /** Category of the skill for organizational purposes */
  category: 'combat' | 'gathering' | 'production' | 'support';
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
  [Skill.Attack]: { category: 'combat', isBoostable: true, maxLevel: 99 },
  [Skill.Defence]: { category: 'combat', isBoostable: true, maxLevel: 99 },
  [Skill.Strength]: { category: 'combat', isBoostable: true, maxLevel: 99 },
  [Skill.Hitpoints]: { category: 'combat', isBoostable: true, maxLevel: 99 },
  [Skill.Ranged]: { category: 'combat', isBoostable: true, maxLevel: 99 },
  [Skill.Prayer]: { category: 'combat', isBoostable: true, maxLevel: 99 },
  [Skill.Magic]: { category: 'combat', isBoostable: true, maxLevel: 99 },
  [Skill.Cooking]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Woodcutting]: { category: 'gathering', isBoostable: true, maxLevel: 99 },
  [Skill.Fletching]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Fishing]: { category: 'gathering', isBoostable: true, maxLevel: 99 },
  [Skill.Firemaking]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Crafting]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Smithing]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Mining]: { category: 'gathering', isBoostable: true, maxLevel: 99 },
  [Skill.Herblore]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Agility]: { category: 'support', isBoostable: true, maxLevel: 99 },
  [Skill.Thieving]: { category: 'support', isBoostable: true, maxLevel: 99 },
  [Skill.Slayer]: { category: 'support', isBoostable: true, maxLevel: 99 },
  [Skill.Farming]: { category: 'gathering', isBoostable: true, maxLevel: 99 },
  [Skill.Runecraft]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Construction]: { category: 'production', isBoostable: true, maxLevel: 99 },
  [Skill.Hunter]: { category: 'gathering', isBoostable: true, maxLevel: 99 },
  [Skill.Sailing]: { category: 'gathering', isBoostable: true, maxLevel: 99 },
};
