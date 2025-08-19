/**
 * Base error class for OSRS Tools
 * Contains additional context and helper methods
 */
export class OsrsToolsError extends Error {
  /** ISO timestamp when the error occurred */
  readonly timestamp: string;

  constructor(message: string) {
    super(message);
    this.name = 'OsrsToolsError';
    this.timestamp = new Date().toISOString();
  }

  /**
   * Get error details in a structured format
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      timestamp: this.timestamp,
      stack: this.stack,
    };
  }
}

/**
 * Error thrown when quest-related operations fail
 */
export class QuestError extends OsrsToolsError {
  readonly questName: string;

  constructor(questName: string, message: string) {
    super(`Quest error (${questName}): ${message}`);
    this.name = 'QuestError';
    this.questName = questName;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      questName: this.questName,
    };
  }
}

/**
 * Error thrown when skill-related operations fail
 */
export class SkillError extends OsrsToolsError {
  readonly skillName: string;
  readonly value?: number;

  constructor(skillName: string, message: string, value?: number) {
    super(`Skill error (${skillName}): ${message}`);
    this.name = 'SkillError';
    this.skillName = skillName;
    this.value = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      skillName: this.skillName,
      value: this.value,
    };
  }
}

/**
 * Error thrown when account-related operations fail
 */
export class AccountError extends OsrsToolsError {
  readonly accountName?: string;

  constructor(message: string, accountName?: string) {
    super(`Account error${accountName ? ` (${accountName})` : ''}: ${message}`);
    this.name = 'AccountError';
    this.accountName = accountName;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      accountName: this.accountName,
    };
  }
}

/**
 * Error thrown when API-related operations fail
 */
export class ApiError extends OsrsToolsError {
  readonly statusCode?: number;
  readonly endpoint?: string;

  constructor(message: string, statusCode?: number, endpoint?: string) {
    super(`API error: ${message}`);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.endpoint = endpoint;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      statusCode: this.statusCode,
      endpoint: this.endpoint,
    };
  }
}

/**
 * Error thrown when validation fails
 */
export class ValidationError extends OsrsToolsError {
  readonly field: string;
  readonly value: unknown;
  readonly constraints: Record<string, unknown>;

  constructor(
    field: string,
    value: unknown,
    message: string,
    constraints: Record<string, unknown> = {},
  ) {
    super(`Validation error (${field}): ${message}`);
    this.name = 'ValidationError';
    this.field = field;
    this.value = value;
    this.constraints = constraints;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      field: this.field,
      value: this.value,
      constraints: this.constraints,
    };
  }
}
