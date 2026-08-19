/**
 * Vannaka - Slayer Master
 * Location: Edgeville Dungeon
 * Combat requirement: 40
 * Wiki: https://oldschool.runescape.wiki/w/Vannaka
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { vannakaTasks } from '../task/VannakaTasks';
import { registerMaster } from './registry';

/**
 * Vannaka - Intermediate Slayer Master
 * Accessible at combat level 40 in Edgeville Dungeon.
 * Awards 4 points per task; milestone multipliers follow the universal
 * 5×/15×/25×/35×/50× pattern.
 * Reference: https://oldschool.runescape.wiki/w/Vannaka#Slayer_points
 */
export const Vannaka = new SlayerMaster({
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Vannaka.png',
  location: 'Edgeville Dungeon',
  minimumCombatLevel: 40,
  name: 'Vannaka',
  pointsTable: {
    1: 4,
    10: 20,
    50: 60,
    100: 100,
    250: 140,
    1000: 200,
  },
  tasks: vannakaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Vannaka',
});

// Register in the masters registry
registerMaster(Vannaka);

export default Vannaka;
