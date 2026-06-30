/**
 * Vannaka - Slayer Master
 * Location: Edgeville Dungeon
 * Combat requirement: 40
 * Wiki: https://oldschool.runescape.wiki/w/Vannaka
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { vannakaTasks } from '../task/VannakaTasks';
import { registerMaster } from './registry';

/**
 * Vannaka - Intermediate Slayer Master
 * Accessible at combat level 40 in Edgeville Dungeon
 */
export const Vannaka = new SlayerMaster({
  name: 'Vannaka',
  location: 'Edgeville Dungeon',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Vannaka',
  minimumCombatLevel: 40,
  tasks: vannakaTasks,
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
registerMaster(Vannaka);

export default Vannaka;
