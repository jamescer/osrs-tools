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
  ShortMedium = 'Short-Medium',
  Medium = 'Medium',
  MediumLong = 'Medium-Long',
  Long = 'Long',
  VeryLong = 'Very long',
}

/**
 * Current status of a quest for a player.
 * OSRS quests have exactly three states — there is no "failed" state in-game.
 */
export enum QuestStatus {
  NotStarted = 'NotStarted',
  InProgress = 'InProgress',
  Completed = 'Completed',
}
