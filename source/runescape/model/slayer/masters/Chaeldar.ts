/**
 * Chaeldar - Slayer Master
 * Location: Zanaris
 * Combat requirement: 70
 * Wiki: https://oldschool.runescape.wiki/w/Chaeldar
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { chaeldarTasks } from '../task/ChaelderTasks';
import { registerMaster } from './registry';

/**
 * Chaeldar - Intermediate Level Slayer Master
 * Requires combat level 70 and access to Zanaris
 */
export const Chaeldar = new SlayerMaster({
  name: 'Chaeldar',
  location: 'Zanaris',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Chaeldar',
  minimumCombatLevel: 70,
  tasks: chaeldarTasks,
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
registerMaster(Chaeldar);

export default Chaeldar;
