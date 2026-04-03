import { Skill, SKILL_METADATA, SkillMetadata } from '../model/account/Skill';

/**
 * Utility functions for working with skills and skill metadata.
 * Provides helper methods for validation, categorization, and metadata lookup.
 */

/**
 * Get metadata for a specific skill.
 * @param skill - The skill to get metadata for
 * @returns The skill's metadata or undefined if not found
 */
export function getSkillMetadata(skill: Skill | string): SkillMetadata | undefined {
  return SKILL_METADATA[skill as Skill];
}

/**
 * Check if a skill is valid.
 * @param skillName - The skill name to validate
 * @returns true if the skill exists, false otherwise
 */
export function isValidSkill(skillName: string): boolean {
  return skillName in SKILL_METADATA;
}

/**
 * Get all skills in a specific category.
 * @param category - The category to filter by
 * @returns Array of skills in that category
 */
export function getSkillsByCategory(
  category: "combat" | "gathering" | "production" | "support"
): Skill[] {
  return Object.entries(SKILL_METADATA)
    .filter(([_, meta]) => meta.category === category)
    .map(([skill, _]) => skill as Skill);
}

/**
 * Check if a skill level is valid.
 * @param skill - The skill to check
 * @param level - The level to validate
 * @returns true if the level is between 1 and the skill's max level
 */
export function isValidLevel(skill: Skill | string, level: number): boolean {
  const meta = getSkillMetadata(skill);
  if (!meta) return false;
  return level >= 1 && level <= meta.maxLevel;
}

/**
 * Check if a skill can be boosted.
 * @param skill - The skill to check
 * @returns true if the skill is boostable
 */
export function isBoostable(skill: Skill | string): boolean {
  return getSkillMetadata(skill)?.isBoostable ?? false;
}

/**
 * Get the max level for a skill.
 * @param skill - The skill to check
 * @returns The maximum level for this skill, or 99 as default
 */
export function getMaxLevel(skill: Skill | string): number {
  return getSkillMetadata(skill)?.maxLevel ?? 99;
}

/**
 * Get category for a skill.
 * @param skill - The skill to check
 * @returns The category of the skill or undefined if not found
 */
export function getSkillCategory(
  skill: Skill | string
): "combat" | "gathering" | "production" | "support" | undefined {
  return getSkillMetadata(skill)?.category;
}

/**
 * Get all available skills.
 * @returns Array of all skills in the game
 */
export function getAllSkills(): Skill[] {
  return Object.keys(SKILL_METADATA) as Skill[];
}

/**
 * Get all combat-related skills.
 * @returns Array of combat category skills
 */
export function getCombatSkills(): Skill[] {
  return getSkillsByCategory("combat");
}

/**
 * Get the total combat level from individual combat skills.
 * Combat level formula: (Attack + Defence + 2*Strength + 2*Magic + 2*Ranged + Prayer) / 4 + 1
 * This is a helper; actual calculation depends on account implementation.
 * @param skillLevels - Object mapping skill names to levels
 * @returns Calculated combat level
 */
export function calculateCombatLevel(skillLevels: Record<string, number>): number {
  const get = (skill: Skill): number => skillLevels[skill] ?? 0;
  const base =
    (get(Skill.Attack) +
      get(Skill.Defence) +
      2 * get(Skill.Strength) +
      2 * get(Skill.Magic) +
      2 * get(Skill.Ranged) +
      get(Skill.Prayer)) /
    4;
  return Math.floor(base) + 1;
}
