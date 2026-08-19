/**
 * Chaeldar - Slayer Master
 * Location: Zanaris
 * Combat requirement: 70
 * Wiki: https://oldschool.runescape.wiki/w/Chaeldar
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { chaeldarTasks } from '../task/ChaelderTasks';
import { registerMaster } from './registry';

/**
 * Chaeldar - Intermediate Level Slayer Master
 * Requires combat level 70 and access to Zanaris.
 * Awards 10 points per task; milestone multipliers follow the universal
 * 5×/15×/25×/35×/50× pattern.
 * Reference: https://oldschool.runescape.wiki/w/Chaeldar#Slayer_points
 */
export const Chaeldar = new SlayerMaster({
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Chaeldar.png',
  location: 'Zanaris',
  minimumCombatLevel: 70,
  name: 'Chaeldar',
  pointsTable: {
    1: 10,
    10: 50,
    50: 150,
    100: 250,
    250: 350,
    1000: 500,
  },
  tasks: chaeldarTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Chaeldar',
});

// Register in the masters registry
registerMaster(Chaeldar);

export default Chaeldar;
