/**
 * Mazchna - Slayer Master
 * Location: Canifis
 * Combat requirement: 20
 * Wiki: https://oldschool.runescape.wiki/w/Mazchna
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { mazchnaTasks } from '../task/MazchnaTasks';
import { registerMaster } from './registry';

/**
 * Mazchna - Beginner Level Slayer Master
 * Accessible at combat level 20 in Canifis
 */
export const Mazchna = new SlayerMaster({
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  location: 'Canifis',
  minimumCombatLevel: 20,
  name: 'Mazchna',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: mazchnaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Mazchna',
});

// Register in the masters registry
registerMaster(Mazchna);

export default Mazchna;
