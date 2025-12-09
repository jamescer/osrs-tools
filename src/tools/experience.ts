// Experience per level in runescape

/**
 * Get experience required for a given level
 * @param level
 * @returns
 */
export function getExperienceForLevel(level: number): number {
  if (level < 1 || level > 99) {
    throw new Error('Level must be between 1 and 99');
  }
  let exp = 0;
  for (let lvl = 1; lvl < level; lvl++) {
    exp += Math.floor(lvl + 300 * Math.pow(2, lvl / 7));
  }
  return Math.floor(exp / 4);
}

/**
 * Get level for a given experience
 * @param exp
 * @returns
 */
export function getLevelForExperience(exp: number): number {
  let level = 1;
  while (level < 99) {
    const expForNextLevel = getExperienceForLevel(level + 1);
    if (exp < expForNextLevel) {
      break;
    }
    level++;
  }
  return level;
}
