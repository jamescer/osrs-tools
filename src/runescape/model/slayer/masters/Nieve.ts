/**
 * Nieve - Slayer Master
 * Location: Nieve's Cave
 * Combat requirement: 85
 * Wiki: https://oldschool.runescape.wiki/w/Nieve
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { nieveTasks } from '../task/NieveTasks';
import { registerMaster } from './registry';

/**
 * Nieve - Advanced Slayer Master
 * High-level slayer master requiring combat level 85
 * Offers greater rewards through both standard and elite diary point tables
 */
export const Nieve = new SlayerMaster({
  eliteDiaryTaskPoints: {
    1: 15,
    10: 75,
    100: 375,
    1000: 750,
    250: 525,
    50: 225,
  },
  location: "Nieve's Cave",
  minimumCombatLevel: 85,
  name: 'Nieve',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: nieveTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Nieve',
});

// Register in the masters registry
registerMaster(Nieve);

export default Nieve;
