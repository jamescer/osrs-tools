/**
 * Mortimer - Slayer Master
 * Location: Wyrmscraig Cavern
 * Combat requirement: 100 (or any combat level with 99 Slayer)
 * Slayer requirement: 70 (waived if base Slayer is 99)
 * Quest requirement: Fallen From Grace (unlocked on reaching the Wyrmscraig caverns)
 * Wiki: https://oldschool.runescape.wiki/w/Mortimer
 *
 * Released 29 July 2026 as part of Fallen From Grace.
 */

import { MortimerSlayerMaster } from '../core/MortimerSlayerMaster';
import { mortimerTasks } from '../task/MortimerTasks';
import { registerMaster } from './registry';

/**
 * Mortimer - Slayer Master of Wyrmscraig
 *
 * Rather than a standard Slayer point table, Mortimer's primary incentive is the Mortifier
 * system (see MortimerSlayerMaster.getAvailableMortifiers()) - though one Mortifier
 * ("Bonus Slayer Points") does award extra Slayer points on top of a task. Every monster he
 * assigns has a superior variant, and he offers 2 task choices per visit (3 once the "Third
 * Task Choice" Mortifier is unlocked at 50 completed tasks), instead of assigning a single task.
 */
export const Mortimer = new MortimerSlayerMaster({
  blockSlotCost: 120,
  blockSlots: 2,
  imageUrl: 'https://oldschool.runescape.wiki/w/Special:FilePath/Mortimer.png',
  location: 'Wyrmscraig Cavern',
  minimumCombatLevel: 100,
  minimumSlayerLevel: 70,
  name: 'Mortimer',
  pointsTable: {},
  skipCost: 100,
  tasks: mortimerTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Mortimer',
});

// Register in the masters registry
registerMaster(Mortimer);

export default Mortimer;
