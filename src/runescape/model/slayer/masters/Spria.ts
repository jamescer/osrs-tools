/**
 * Spria - Slayer Master
 * Location: Draynor Village
 * Combat requirement: 1
 * Wiki: https://oldschool.runescape.wiki/w/Spria
 */

import { SlayerMaster } from '../core/SlayerMaster';
import { spriaTasks } from '../task/SpriaTasks';
import { registerMaster } from './registry';

/**
 * Spria - Beginner Slayer Master
 * Beginner-level slayer master in Draynor Village.
 * Like Turael, Spria is a "reset master" — completing her tasks resets the
 * player's streak to 0 and awards 0 Slayer points.
 */
export const Spria = new SlayerMaster({
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Spria.png',
  location: 'Draynor Village',
  minimumCombatLevel: 1,
  name: 'Spria',
  pointsTable: {}, // 0 points per task — Spria is a streak-reset master
  tasks: spriaTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Spria',
});

// Register in the masters registry
registerMaster(Spria);

export default Spria;
