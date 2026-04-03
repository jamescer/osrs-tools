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
  name: 'Nieve',
  location: "Nieve's Cave",
  wikiUrl: 'https://oldschool.runescape.wiki/w/Nieve',
  minimumCombatLevel: 85,
  tasks: nieveTasks,
  pointsTable: POINTS_TABLE.STANDARD,
  eliteDiaryTaskPoints: {
    1: 15,
    10: 75,
    50: 225,
    100: 375,
    250: 525,
    1000: 750,
  },
});

// Register in the masters registry
registerMaster(Nieve);

export default Nieve;
