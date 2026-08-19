/**
 * Duradel - Slayer Master
 * Location: Shilo Village
 * Combat requirement: 100
 * Slayer requirement: 50 (not represented in minimumCombatLevel)
 * Quest requirement: Shilo Village
 * Wiki: https://oldschool.runescape.wiki/w/Duradel
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { duradelTasks } from '../task/DuradelTasks';
import { registerMaster } from './registry';

/**
 * Duradel - High-level Slayer Master
 * One of the top-tier masters offering the highest rewards and most difficult tasks.
 * Awards 15 points per task; milestone multipliers follow the universal
 * 5×/15×/25×/35×/50× pattern.
 * Completing the Karamja Elite diary grants +5 points on every task.
 * Reference: https://oldschool.runescape.wiki/w/Duradel#Slayer_points
 */
export const Duradel = new SlayerMaster({
  // Karamja Elite diary adds a flat +5 points to every task interval.
  eliteDiaryTaskPoints: {
    1: 20,
    10: 80,
    50: 230,
    100: 380,
    250: 530,
    1000: 755,
  },
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Duradel.png',
  location: 'Shilo Village',
  minimumCombatLevel: 100,
  minimumSlayerLevel: 50,
  name: 'Duradel',
  pointsTable: {
    1: 15,
    10: 75,
    50: 225,
    100: 375,
    250: 525,
    1000: 750,
  },
  tasks: duradelTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Duradel',
});

// Register in the masters registry
registerMaster(Duradel);

export default Duradel;
