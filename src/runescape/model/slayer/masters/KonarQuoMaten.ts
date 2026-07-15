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
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  location: 'Mount Karuulm',
  minimumCombatLevel: 75,
  name: 'Konar Quo Maten',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: konarTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Konar_Quo_Maten',
});

// Register in the masters registry
registerMaster(KonarQuoMaten);

export default KonarQuoMaten;
