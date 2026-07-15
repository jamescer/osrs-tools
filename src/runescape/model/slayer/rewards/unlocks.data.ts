/**
 * Slayer Unlocks Data
 * All unlock rewards available in the game
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */

import { SlayerUnlock } from './SlayerUnlock';

export const SLAYER_UNLOCKS = [
  new SlayerUnlock({
    cost: 3_000_000,
    description: 'Unlocks the Abyssal Sire as a slayer task.',
    name: 'Abyssal Sire',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Abyssal_Sire',
  }),
  new SlayerUnlock({
    cost: 150,
    description: 'Allows NPCs to be fought again should you die to them.',
    name: 'Bigger and Badder',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Grants the ability to permanently pop your boils if you have a Perp Pop boil incurable.',
    name: 'Perp Pop',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Allows you to hunt creatures in the Catacombs of Kourend.',
    name: 'Reaper',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Allows you to create a Ring of Slaying with a Slayer ring.',
    name: 'Ring of Slaying',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Unlocks Konar quo Maten as a Slayer master.',
    name: 'Unlock Konar',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Unlocks the ability to locate creatures.',
    name: 'Spello Explore',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Unlocks Krystilia as a Slayer master.',
    name: 'Unlock Krystilia',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Allows Revenants to be hunted as a slayer task.',
    name: 'Revenant Unlock',
  }),
];

/**
 * Get an unlock by name (case insensitive)
 */
export function getUnlockByName(name: string): SlayerUnlock | undefined {
  return SLAYER_UNLOCKS.find(unlock => unlock.getName().toLowerCase() === name.toLowerCase());
}

/**
 * Get all unlocks within a cost range
 */
export function getUnlocksByCostRange(minCost: number, maxCost: number): SlayerUnlock[] {
  return SLAYER_UNLOCKS.filter(unlock => unlock.getCost() >= minCost && unlock.getCost() <= maxCost);
}

/**
 * Get the total cost of multiple unlocks
 */
export function calculateUnlocksCost(names: string[]): number {
  return names.reduce((total, name) => {
    const unlock = getUnlockByName(name);
    return total + (unlock?.getCost() || 0);
  }, 0);
}
