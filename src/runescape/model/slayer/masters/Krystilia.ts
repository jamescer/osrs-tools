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
  name: 'Krystilia',
  location: 'Edgeville',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Krystilia',
  minimumCombatLevel: 1,
  tasks: krystiliaTasks,
  pointsTable: POINTS_TABLE.STANDARD,
  eliteDiaryTaskPoints: {
    1: 15,
    10: 75,
    50: 225,
    100: 375,
    250: 525,
    1000: 750,
  },
});

// Register in the masters registry
registerMaster(Krystilia);

export default Krystilia;
