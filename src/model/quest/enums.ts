/**
 * Quest difficulty levels in OSRS
 */
export enum QuestDifficulty {
  Novice = 'Novice',
  Intermediate = 'Intermediate',
  Experienced = 'Experienced',
  Master = 'Master',
  Grandmaster = 'Grandmaster',
}

/**
 * Quest length categories in OSRS
 */
export enum QuestLength {
  VeryShort = 'Very short',
  Short = 'Short',
  Medium = 'Medium',
  Long = 'Long',
  VeryLong = 'Very long',
}

/**
 * Current status of a quest for a player
 */
export enum QuestStatus {
  NotStarted = 'NotStarted',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Failed = 'Failed',
}
