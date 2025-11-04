import { ValidationError } from '../errors';
import { Skill } from '../model/account/Skill';

/**
 * Validates a skill level value
 * @param level The level to validate
 * @param skillName Name of the skill (for error context)
 * @throws {ValidationError} If level is invalid
 */
export function validateSkillLevel(level: number, skillName: string): void {
  if (!Number.isInteger(level)) {
    throw new ValidationError('level', level, 'Skill level must be an integer', {
      skillName,
      type: 'integer',
    });
  }

  if (level < 1 || level > 99) {
    throw new ValidationError('level', level, 'Skill level must be between 1 and 99', {
      max: 99,
      min: 1,
      skillName,
    });
  }
}

/**
 * Validates quest points value
 * @param points The quest points to validate
 * @throws {ValidationError} If points value is invalid
 */
export function validateQuestPoints(points: number): void {
  if (!Number.isInteger(points)) {
    throw new ValidationError('questPoints', points, 'Quest points must be an integer', {
      type: 'integer',
    });
  }

  if (points < 0) {
    throw new ValidationError('questPoints', points, 'Quest points cannot be negative', {
      min: 0,
    });
  }

  // Current max quest points in OSRS (as of 2025)
  const MAX_QUEST_POINTS = 300;
  if (points > MAX_QUEST_POINTS) {
    throw new ValidationError(
      'questPoints',
      points,
      `Quest points cannot exceed ${MAX_QUEST_POINTS}`,
      {
        max: MAX_QUEST_POINTS,
      },
    );
  }
}

/**
 * Validates combat level value
 * @param level The combat level to validate
 * @throws {ValidationError} If level is invalid
 */
export function validateCombatLevel(level: number): void {
  if (!Number.isInteger(level)) {
    throw new ValidationError('combatLevel', level, 'Combat level must be an integer', {
      type: 'integer',
    });
  }

  if (level < 3 || level > 126) {
    throw new ValidationError('combatLevel', level, 'Combat level must be between 3 and 126', {
      max: 126,
      min: 3,
    });
  }
}

/**
 * Validates a skill name
 * @param name The skill name to validate
 * @throws {ValidationError} If name is invalid
 */
export function validateSkillName(name: string): void {
  const normalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  if (!(normalizedName in Skill)) {
    throw new ValidationError('skillName', name, 'Invalid skill name', {
      validSkills: Object.values(Skill),
    });
  }
}

/**
 * Type guard for checking if a value is a valid skill name
 * @param name The value to check
 * @returns True if value is a valid skill name
 */
export function isValidSkillName(name: string): name is keyof typeof Skill {
  try {
    validateSkillName(name);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates experience (XP) value
 * @param xp The XP value to validate
 * @param skillName Name of the skill (for error context)
 * @throws {ValidationError} If XP value is invalid
 */
export function validateExperience(xp: number, skillName: string): void {
  if (!Number.isInteger(xp)) {
    throw new ValidationError('experience', xp, 'Experience must be an integer', {
      skillName,
      type: 'integer',
    });
  }

  if (xp < 0) {
    throw new ValidationError('experience', xp, 'Experience cannot be negative', {
      min: 0,
      skillName,
    });
  }

  const MAX_XP = 200_000_000;
  if (xp > MAX_XP) {
    throw new ValidationError('experience', xp, `Experience cannot exceed ${MAX_XP}`, {
      max: MAX_XP,
      skillName,
    });
  }
}

/**
 * Validates rank value
 * @param rank The rank value to validate
 * @param context Additional context for error message
 * @throws {ValidationError} If rank value is invalid
 */
export function validateRank(rank: number, context: string): void {
  if (!Number.isInteger(rank)) {
    throw new ValidationError('rank', rank, 'Rank must be an integer', {
      context,
      type: 'integer',
    });
  }

  if (rank < 1) {
    throw new ValidationError('rank', rank, 'Rank must be positive', {
      context,
      min: 1,
    });
  }
}

/**
 * Validates an account name
 * @param name The account name to validate
 * @throws {ValidationError} If name is invalid
 */
export function validateAccountName(name: string): void {
  if (!name) {
    throw new ValidationError('name', name, 'Account name is required');
  }

  if (name.length > 12) {
    throw new ValidationError('name', name, 'Account name cannot exceed 12 characters', {
      maxLength: 12,
    });
  }

  const validNameRegex = /^[a-zA-Z0-9 -_]+$/;
  if (!validNameRegex.test(name)) {
    throw new ValidationError('name', name, 'Account name contains invalid characters', {
      pattern: validNameRegex.toString(),
    });
  }
}
