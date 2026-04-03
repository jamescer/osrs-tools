/**
 * Slayer Module
 * Complete slayer system including masters, tasks, rewards, and utilities
 * Reference: https://oldschool.runescape.wiki/w/Slayer
 */

// ===== Core Classes (Refactored) =====
export { SlayerMaster, Task, Assignment } from "./core";
export type { TaskDefinition, TaskQuantity, SlayerMasterConfig, TaskOptions } from "./core";
export { SlayerLocation, SlayerBoss, POINTS_TABLE, TASK_DEFAULTS } from "./core";

// ===== Slayer Masters =====
export {
  Turael,
  Spria,
  Mazchna,
  Vannaka,
  Chaeldar,
  KonarQuoMaten,
  Nieve,
  Duradel,
  Krystilia,
  getMasterByName,
  getAllMasters,
  getMastersByMinimumLevel,
  getMastersByProgression,
  getRandomMasterForLevel,
} from "./masters";
export type { SlayerMasterProgression } from "./masters";

// ===== Rewards =====
export { SlayerUnlock, SlayerExtend, SlayerBuy } from "./rewards";
export { SLAYER_UNLOCKS, SLAYER_EXTENDS, SLAYER_BUYS } from "./rewards";
export { getUnlockByName, getUnlocksByCostRange, calculateUnlocksCost, getExtendByName, getExtendsForTask, getBuyByItem, getBuysByCostRange, getBuysByRequirement, calculateBuysCost } from "./rewards";

// ===== Tasks & Utilities =====
export { SLAYER_EXP_RATES, STANDARD_TASK_WEIGHTS, MonsterType } from "./tasks";
export { TASK_QUANTITY_PRESETS, EXTENDED_QUANTITY_PRESETS } from "./tasks";
