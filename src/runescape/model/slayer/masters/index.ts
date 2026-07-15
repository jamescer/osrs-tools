/**
 * Slayer Masters Module
 * Exports all Slayer master instances and utilities
 */

// Ensure registry is initialized first
// Import all masters (in order of progression - beginner to elite)
import './Turael'; // Combat 1
import './Spria'; // Combat 1
import './Mazchna'; // Combat 20
import './Vannaka'; // Combat 40
import './Chaeldar'; // Combat 70
import './KonarQuoMaten'; // Combat 75
import './Nieve'; // Combat 85
import './Duradel'; // Combat 50 (but elite rewards)
import './Krystilia'; // Combat 1 (Wilderness)

import {
  getAllMasters,
  getMasterByName,
  getMastersByMinimumLevel,
  getMastersByProgression,
  getRandomMasterForLevel,
  initializeMastersRegistry,
  registerMaster,
  SlayerMasterProgression,
} from './registry';

// Export individual masters
export { Chaeldar } from './Chaeldar';
export { Duradel } from './Duradel';
export { KonarQuoMaten } from './KonarQuoMaten';
export { Krystilia } from './Krystilia';
export { Mazchna } from './Mazchna';
export { Nieve } from './Nieve';
export { Spria } from './Spria';
export { Turael } from './Turael';
export { Vannaka } from './Vannaka';

// Export registry utilities and types
export {
  getAllMasters,
  getMasterByName,
  getMastersByMinimumLevel,
  getMastersByProgression,
  getRandomMasterForLevel,
  SlayerMasterProgression,
} from './registry';

// Initialize the registry on module load
initializeMastersRegistry();
