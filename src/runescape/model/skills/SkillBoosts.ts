/**
 * Maximum temporary boost achievable for each skill, from https://oldschool.runescape.wiki/w/Temporary_skill_boost
 * Kept independent of the quest module so lightweight consumers (e.g. Slayer eligibility) don't
 * need to pull in the entire quest catalog just to check whether a level requirement is boostable.
 *
 * Values represent the maximum fixed-component boost (e.g. Ranging potion is +4, not the level-scaled total).
 */
const MAX_SKILL_BOOSTS: { [key: string]: number } = {
  Agility: 5,     // Spicy stew (yellow) ±5
  Attack: 5,      // Super combat potion / Overload(+)
  Construction: 5, // Spicy stew (orange) ±5
  Cooking: 5,     // Admiral pie
  Crafting: 4,    // Mushroom pie
  Defence: 5,     // Super combat potion / Overload(+)
  Farming: 5,     // Spicy stew (yellow) ±5
  Firemaking: 5,  // Spicy stew (red) ±5
  Fishing: 5,     // Spicy stew (orange) ±5
  Fletching: 5,   // Spicy stew (any color) ±5
  Herblore: 5,    // Spicy stew (orange) ±5
  Hitpoints: 0,   // Cannot be temporarily boosted above max
  Hunter: 4,      // Horn of plenty (charged)
  Magic: 4,       // Ancient brew / Imbued heart (base +4)
  Mining: 3,      // Dragon pickaxe special attack
  Prayer: 0,      // Cannot be temporarily boosted above max
  Ranged: 4,      // Ranging potion (base +4, plus ~10% of level)
  Runecraft: 0,   // No known temporary boost exists
  Slayer: 5,      // Wild pie
  Smithing: 4,    // Kovac's grog / Dwarven stout(m)
  Strength: 5,    // Super combat potion / Overload(+)
  Thieving: 5,    // Spicy stew (red) ±5
  Woodcutting: 3, // Dragon axe special attack
  Sailing: 3,     // Whirlpool surprise
};

/**
 * Get the maximum boost for a given skill, based on OSRS Wiki data.
 * @param skillName The name of the skill (case-insensitive, e.g. 'Attack', 'Herblore')
 * @returns The maximum boost amount for the skill (positive integer, or 0 if unboostable)
 */
function getMaxSkillBoost(skillName: string): number {
  const normalized = skillName.charAt(0).toUpperCase() + skillName.slice(1).toLowerCase();
  return MAX_SKILL_BOOSTS[normalized] ?? 0;
}

export { getMaxSkillBoost };
