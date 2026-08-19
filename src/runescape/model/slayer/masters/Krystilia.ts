/**
 * Krystilia - Slayer Master
 * Location: Edgeville (Wilderness)
 * Combat requirement: 1
 * Wiki: https://oldschool.runescape.wiki/w/Krystilia
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { krystiliaTasks } from '../task/KrystiliaTasks';
import { registerMaster } from './registry';

/**
 * Krystilia - Wilderness Slayer Master
 * Wilderness-only tasks with no combat level requirement.
 * Awards 25 points per task — the highest base rate of any master —
 * reflecting the extra risk of completing tasks in the Wilderness.
 * Milestone multipliers follow the universal 5×/15×/25×/35×/50× pattern.
 * Reference: https://oldschool.runescape.wiki/w/Krystilia#Slayer_points
 */
export const Krystilia = new SlayerMaster({
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Krystilia.png',
  location: 'Edgeville',
  minimumCombatLevel: 1,
  name: 'Krystilia',
  pointsTable: {
    1: 25,
    10: 125,
    50: 375,
    100: 625,
    250: 875,
    1000: 1250,
  },
  tasks: krystiliaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Krystilia',
});

// Register in the masters registry
registerMaster(Krystilia);

export default Krystilia;
