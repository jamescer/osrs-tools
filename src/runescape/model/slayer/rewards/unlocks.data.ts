/**
 * Slayer Unlocks Data
 * All unlock rewards available in the game
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */

import { SlayerUnlock } from './SlayerUnlock';

export const SLAYER_UNLOCKS = [
  new SlayerUnlock({
    name: 'Abyssal Sire',
    cost: 3_000_000,
    description: 'Unlocks the Abyssal Sire as a slayer task.',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Abyssal_Sire',
  }),
  new SlayerUnlock({
    name: 'Bigger and Badder',
    cost: 150,
    description: 'Allows NPCs to be fought again should you die to them.',
  }),
  new SlayerUnlock({
    name: 'Perp Pop',
    cost: 50,
    description: 'Grants the ability to permanently pop your boils if you have a Perp Pop boil incurable.',
  }),
  new SlayerUnlock({
    name: 'Reaper',
    cost: 50,
    description: 'Allows you to hunt creatures in the Catacombs of Kourend.',
  }),
  new SlayerUnlock({
    name: 'Ring of Slaying',
    cost: 50,
    description: 'Allows you to create a Ring of Slaying with a Slayer ring.',
  }),
  new SlayerUnlock({
    name: 'Unlock Konar',
    cost: 50,
    description: 'Unlocks Konar quo Maten as a Slayer master.',
  }),
  new SlayerUnlock({
    name: 'Spello Explore',
    cost: 50,
    description: 'Unlocks the ability to locate creatures.',
  }),
  new SlayerUnlock({
    name: 'Unlock Krystilia',
    cost: 50,
    description: 'Unlocks Krystilia as a Slayer master.',
  }),
  new SlayerUnlock({
    name: 'Revenant Unlock',
    cost: 50,
    description: 'Allows Revenants to be hunted as a slayer task.',
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
