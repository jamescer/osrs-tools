/**
 * Mazchna - Slayer Master
 * Location: Canifis
 * Combat requirement: 20
 * Wiki: https://oldschool.runescape.wiki/w/Mazchna
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { mazchnaTasks } from '../task/MazchnaTasks';
import { registerMaster } from './registry';

/**
 * Mazchna - Beginner Level Slayer Master
 * Accessible at combat level 20 in Canifis.
 * Awards 2 points per task; milestone multipliers follow the universal
 * 5×/15×/25×/35×/50× pattern.
 * Reference: https://oldschool.runescape.wiki/w/Mazchna#Slayer_points
 */
export const Mazchna = new SlayerMaster({
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Mazchna.png',
  location: 'Canifis',
  minimumCombatLevel: 20,
  name: 'Mazchna',
  pointsTable: {
    1: 2,
    10: 10,
    50: 30,
    100: 50,
    250: 70,
    1000: 100,
  },
  tasks: mazchnaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Mazchna',
});

// Register in the masters registry
registerMaster(Mazchna);

export default Mazchna;
