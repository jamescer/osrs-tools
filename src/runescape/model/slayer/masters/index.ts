/**
 * Slayer Masters Module
 * Exports all Slayer master instances and utilities
 */

// Ensure registry is initialized first
import {
  initializeMastersRegistry,
  getMasterByName,
  getAllMasters,
  getMastersByMinimumLevel,
  getMastersByProgression,
  getRandomMasterForLevel,
  SlayerMasterProgression,
  registerMaster,
} from "./registry";

// Import all masters (in order of progression - beginner to elite)
import "./Turael"; // Combat 1
import "./Spria"; // Combat 1
import "./Mazchna"; // Combat 20
import "./Vannaka"; // Combat 40
import "./Chaeldar"; // Combat 70
import "./KonarQuoMaten"; // Combat 75
import "./Nieve"; // Combat 85
import "./Duradel"; // Combat 50 (but elite rewards)
import "./Krystilia"; // Combat 1 (Wilderness)

// Export individual masters
export { Turael } from "./Turael";
export { Spria } from "./Spria";
export { Mazchna } from "./Mazchna";
export { Vannaka } from "./Vannaka";
export { Chaeldar } from "./Chaeldar";
export { KonarQuoMaten } from "./KonarQuoMaten";
export { Nieve } from "./Nieve";
export { Duradel } from "./Duradel";
export { Krystilia } from "./Krystilia";

// Export registry utilities and types
export { getMasterByName, getAllMasters, getMastersByMinimumLevel, getMastersByProgression, getRandomMasterForLevel, SlayerMasterProgression } from "./registry";

// Initialize the registry on module load
initializeMastersRegistry();
