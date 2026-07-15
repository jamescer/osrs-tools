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
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  location: 'Zanaris',
  minimumCombatLevel: 70,
  name: 'Chaeldar',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: chaeldarTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Chaeldar',
});

// Register in the masters registry
registerMaster(Chaeldar);

export default Chaeldar;
