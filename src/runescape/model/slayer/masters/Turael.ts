/**
 * Turael - Slayer Master
 * Location: Burthorpe
 * Combat requirement: 1
 * Wiki: https://oldschool.runescape.wiki/w/Turael
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { turealTasks } from '../task/TurealTasks';
import { registerMaster } from './registry';

/**
 * Turael - Beginner Slayer Master
 * The lowest-level slayer master, accessible to any combat level.
 * Turael is a "reset master" — completing a task from him resets the player's
 * streak to 0 and awards 0 Slayer points, regardless of any diary completion.
 */
export const Turael = new SlayerMaster({
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Turael.png',
  location: 'Burthorpe',
  minimumCombatLevel: 1,
  name: 'Turael',
  pointsTable: {}, // 0 points per task — Turael is a streak-reset master
  tasks: turealTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Turael',
});

// Register in the masters registry
registerMaster(Turael);

export default Turael;
