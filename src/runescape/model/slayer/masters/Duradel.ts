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
  name: 'Duradel',
  location: 'Shilo Village',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Duradel',
  minimumCombatLevel: 50,
  tasks: duradelTasks,
  pointsTable: POINTS_TABLE.STANDARD,
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    50: 15,
    100: 50,
    250: 75, // +5 bonus
    1000: 125, // +25 bonus
  },
});

// Register in the masters registry
registerMaster(Duradel);

export default Duradel;
