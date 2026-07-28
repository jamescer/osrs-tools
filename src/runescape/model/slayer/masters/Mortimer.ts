/**
 * Mortimer - Slayer Master
 * Location: Wyrmscraig
 * Wiki: https://oldschool.runescape.wiki/w/Mortimer
 *
 * NOTE: Mortimer is planned content for the upcoming Wyrmscraig island (Player Designed
 * Island Competition, designed by ScreteMonge) and had not been released at time of writing.
 * Values here reflect the published design and may change before/if this ships live.
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
  // Mortimer had not been released at time of writing; this is concept art (by Mod Jerv), not an in-game portrait.
  imageUrl:
    'https://oldschool.runescape.wiki/w/Special:FilePath/Wyrmscraig%20-%20Activities%20%26%20Lock%20In%20Poll%20(5).png',
  location: 'Wyrmscraig',
  minimumCombatLevel: 0,
  name: 'Mortimer',
  pointsTable: {},
  skipCost: 100,
  tasks: mortimerTasks,
  wikiUrl: 'https://oldschool.runescape.wiki/w/Mortimer',
});

// Register in the masters registry
registerMaster(Mortimer);

export default Mortimer;
