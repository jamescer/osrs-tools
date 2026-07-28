/**
 * Konar Quo Maten - Slayer Master
 * Location: Mount Karuulm
 * Combat requirement: 75
 * Wiki: https://oldschool.runescape.wiki/w/Konar_Quo_Maten
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
  eliteDiaryTaskPoints: {
    1: 20,
    10: 100,
    100: 500,
    1000: 1000,
    250: 700,
    50: 300,
  },
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Konar_quo_Maten.png',
  location: 'Mount Karuulm',
  minimumCombatLevel: 75,
  name: 'Konar Quo Maten',
  pointsTable: {
    1: 18,
    10: 90,
    100: 450,
    1000: 900,
    250: 630,
    50: 270,
  },
  tasks: konarTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Konar_Quo_Maten',
});

// Register in the masters registry
registerMaster(KonarQuoMaten);

export default KonarQuoMaten;
