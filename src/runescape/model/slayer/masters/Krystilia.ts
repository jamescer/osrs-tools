/**
 * Krystilia - Slayer Master
 * Location: Edgeville (Wilderness)
 * Combat requirement: 1
 * Wiki: https://oldschool.runescape.wiki/w/Krystilia
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { POINTS_TABLE } from '../core/types';
import { krystiliaTasks } from '../task/KrystiliaTasks';
import { registerMaster } from './registry';

/**
 * Krystilia - Wilderness Slayer Master
 * Elite slayer master in the Wilderness with no level requirement
 * Offers wilderness-themed tasks and elite point bonuses
 */
export const Krystilia = new SlayerMaster({
  eliteDiaryTaskPoints: {
    1: 15,
    10: 75,
    100: 375,
    1000: 750,
    250: 525,
    50: 225,
  },
  location: 'Edgeville',
  minimumCombatLevel: 1,
  name: 'Krystilia',
  pointsTable: POINTS_TABLE.STANDARD,
  tasks: krystiliaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Krystilia',
});

// Register in the masters registry
registerMaster(Krystilia);

export default Krystilia;
