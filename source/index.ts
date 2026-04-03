/**
 * OSRS Tools - Main Entry Point
 * A comprehensive TypeScript library for Old School RuneScape data and utilities
 *
 * Core API exports:
 * - QuestTool: Quest system and utilities
 * - OsrsAccount: Player account management
 * - Diaries: Achievement diary system
 * - ClueScrollHelper: Clue scroll utilities
 * - Item system and models
 * - Slayer system and masters
 *
 * For individual quests and detailed submodule imports, use subpackage exports:
 * - import { ... } from 'osrs-tools/quest' - Access all quest classes and utilities
 * - import { ... } from 'osrs-tools/account' - Account and skill management
 * - import { ... } from 'osrs-tools/slayer' - Slayer system
 * - import { ... } from 'osrs-tools/diary' - Achievement diaries
 * - import { ... } from 'osrs-tools/tools' - Utility tools
 * - import { ... } from 'osrs-tools/utils' - Helper utilities
 */

// Core API exports - Most frequently used
export * from "./runescape/model/quest/QuestTool";
export * from "./runescape/model/account/OsrsAccount";
export * from "./runescape/model/diaries";
export * from "./runescape/model/clue/ClueScrollHelper";

// Item system
export * from "./runescape/model/Item/Item";
export * from "./runescape/model/Item/models";

// Slayer system (refactored exports)
export {
  SlayerMaster,
  Task,
  Assignment,
  Turael,
  Spria,
  Mazchna,
  Vannaka,
  Chaeldar,
  KonarQuoMaten,
  Nieve,
  Duradel,
  Krystilia,
  SlayerUnlock,
  SlayerExtend,
  SlayerBuy,
  SLAYER_UNLOCKS,
  SLAYER_EXTENDS,
  SLAYER_BUYS,
  SlayerLocation,
  SlayerBoss,
  POINTS_TABLE,
  getMasterByName,
  getAllMasters,
  getMastersByMinimumLevel,
  getMastersByProgression,
} from "./runescape/model/slayer";

// Core requirement types
export * from "./runescape/model/Requirement";
export * from "./runescape/errors";
