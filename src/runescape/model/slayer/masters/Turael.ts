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
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  location: 'Burthope',
  minimumCombatLevel: 1,
  name: 'Turael',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: turealTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Turael',
});

// Register in the masters registry
registerMaster(Turael);

export default Turael;
