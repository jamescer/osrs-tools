/**
 * Turael - Slayer Master
 * Location: Burthope
 * Combat requirement: 1
 * Wiki: https://oldschool.runescape.wiki/w/Turael
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { turealTasks } from '../task/TurealTasks';
import { registerMaster } from './registry';

/**
 * Turael - Beginner Slayer Master
 * The lowest-level slayer master, accessible to any combat level
 */
export const Turael = new SlayerMaster({
  name: 'Turael',
  location: 'Burthope',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Turael',
  minimumCombatLevel: 1,
  tasks: turealTasks,
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
registerMaster(Turael);

export default Turael;
