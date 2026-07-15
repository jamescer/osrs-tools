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
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  location: 'Edgeville Dungeon',
  minimumCombatLevel: 40,
  name: 'Vannaka',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: vannakaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Vannaka',
});

// Register in the masters registry
registerMaster(Vannaka);

export default Vannaka;
