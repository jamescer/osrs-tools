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
  name: 'Mazchna',
  location: 'Canifis',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Mazchna',
  minimumCombatLevel: 20,
  tasks: mazchnaTasks,
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
registerMaster(Mazchna);

export default Mazchna;
