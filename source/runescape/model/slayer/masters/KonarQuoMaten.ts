/**
 * Konar Quo Maten - Slayer Master
 * Location: Mount Karuulm
 * Combat requirement: 75
 * Wiki: https://oldschool.runescape.wiki/w/Konar_Quo_Maten
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { konarTasks } from '../task/KonarTasks';
import { registerMaster } from './registry';

/**
 * Konar Quo Maten - Advanced Slayer Master
 * Requires combat level 75 and access to Mount Karuulm
 */
export const KonarQuoMaten = new SlayerMaster({
  name: 'Konar Quo Maten',
  location: 'Mount Karuulm',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Konar_Quo_Maten',
  minimumCombatLevel: 75,
  tasks: konarTasks,
  pointsTable: POINTS_TABLE.STANDARD,
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    50: 15,
    100: 50,
    250: 70,
    1000: 100,
  },
});

// Register in the masters registry
registerMaster(KonarQuoMaten);

export default KonarQuoMaten;
