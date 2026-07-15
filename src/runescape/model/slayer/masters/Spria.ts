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
  eliteDiaryTaskPoints: {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  location: 'Draynor Village',
  minimumCombatLevel: 1,
  name: 'Spria',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: spriaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Spria',
});

// Register in the masters registry
registerMaster(Spria);

export default Spria;
