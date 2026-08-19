/**
 * Konar Quo Maten - Slayer Master
 * Location: Mount Karuulm
 * Combat requirement: 75
 * Wiki: https://oldschool.runescape.wiki/w/Konar_quo_Maten
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { konarTasks } from '../task/KonarTasks';
import { registerMaster } from './registry';

/**
 * Konar Quo Maten - Advanced Slayer Master
 * Requires combat level 75 and access to Mount Karuulm
 *
 * Konar is the second highest points-per-task Slayer master (after Krystilia), owing to
 * the requirement of slaying in a specific, rolled location.
 * Reference: https://oldschool.runescape.wiki/w/Konar_quo_Maten#Slayer_points
 */
export const KonarQuoMaten = new SlayerMaster({
  /**
   * Completing the Kourend & Kebos Elite Achievement Diary doubles all of Konar's task point
   * awards. Values here are exactly 2× the regular pointsTable.
   * Reference: https://oldschool.runescape.wiki/w/Konar_quo_Maten#Slayer_points
   */
  eliteDiaryTaskPoints: {
    1: 36,
    10: 180,
    50: 540,
    100: 900,
    250: 1260,
    1000: 1800,
  },
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Konar_quo_Maten.png',
  location: 'Mount Karuulm',
  minimumCombatLevel: 75,
  name: 'Konar Quo Maten',
  pointsTable: {
    1: 18,
    10: 90,
    50: 270,
    100: 450,
    250: 630,
    1000: 900,
  },
  tasks: konarTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Konar_quo_Maten',
});

// Register in the masters registry
registerMaster(KonarQuoMaten);

export default KonarQuoMaten;
