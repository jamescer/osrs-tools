/**
 * Slayer Module
 * Complete slayer system including masters, tasks, rewards, and utilities
 * Reference: https://oldschool.runescape.wiki/w/Slayer
 */

// ===== Core Classes (Refactored) =====
export type { SlayerMasterConfig, TaskDefinition, TaskOptions, TaskQuantity } from './core';
export { Assignment, SlayerMaster, Task } from './core';
export { POINTS_TABLE, SlayerBoss, SlayerLocation, TASK_DEFAULTS } from './core';

// ===== Slayer Masters =====
export type { SlayerMasterProgression } from './masters';
export {
  Chaeldar,
  Duradel,
  getAllMasters,
  getMasterByName,
  getMastersByMinimumLevel,
  getMastersByProgression,
  getRandomMasterForLevel,
  KonarQuoMaten,
  Krystilia,
  Mazchna,
  Nieve,
  Spria,
  Turael,
  Vannaka,
} from './masters';

// ===== Rewards =====
export { SlayerBuy, SlayerExtend, SlayerUnlock } from './rewards';
export { SLAYER_BUYS, SLAYER_EXTENDS, SLAYER_UNLOCKS } from './rewards';
export {
  calculateBuysCost,
  calculateUnlocksCost,
  getBuyByItem,
  getBuysByCostRange,
  getBuysByRequirement,
  getExtendByName,
  getExtendsForTask,
  getUnlockByName,
  getUnlocksByCostRange,
} from './rewards';

// ===== Tasks & Utilities =====
export { MonsterType, SLAYER_EXP_RATES, STANDARD_TASK_WEIGHTS } from './tasks';
export { EXTENDED_QUANTITY_PRESETS, TASK_QUANTITY_PRESETS } from './tasks';
