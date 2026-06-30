/**
 * Spria - Slayer Master
 * Location: Draynor Village
 * Combat requirement: 1
 * Wiki: https://oldschool.runescape.wiki/w/Spria
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { spriaTasks } from '../task/SpriaTasks';
import { registerMaster } from './registry';

/**
 * Spria - Beginner Slayer Master
 * Beginner-level slayer master in Draynor
 */
export const Spria = new SlayerMaster({
  name: 'Spria',
  location: 'Draynor Village',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Spria',
  minimumCombatLevel: 1,
  tasks: spriaTasks,
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
registerMaster(Spria);

export default Spria;
