/**
 * Duradel - Slayer Master
 * Location: Shilo Village
 * Combat requirement: 50+
 * Wiki: https://oldschool.runescape.wiki/w/Duradel
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { duradelTasks } from '../task/DuradelTasks';
import { registerMaster } from './registry';

/**
 * Duradel - High-level Slayer Master
 * One of the top-tier masters offering the highest rewards and most difficult tasks
 */
export const Duradel = new SlayerMaster({
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    100: 50,
    // +5 bonus
    1000: 125,

    250: 75,
    50: 15, // +25 bonus
  },
  location: 'Shilo Village',
  minimumCombatLevel: 50,
  name: 'Duradel',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: duradelTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Duradel',
});

// Register in the masters registry
registerMaster(Duradel);

export default Duradel;
