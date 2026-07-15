/**
 * Slayer Buys Data
 * All buyable items and services available from Slayer masters
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */

import { SlayerBuy } from './SlayerBuy';

export const SLAYER_BUYS = [
  new SlayerBuy({
    cost: 75,
    item: 'Slayer ring',
    notes:
      'An equippable ring that provides all the functions of an Enchanted gem, and provides 8 charges for teleporting to useful Slayer sites.',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Slayer_ring',
  }),
  new SlayerBuy({
    cost: 35,
    item: 'Broad bolts (x250)',
    notes: 'Bolts that can damage Turoths and Kurask. Level 55 Slayer and 61 Ranged required.',
    requirements: ['55 Slayer', '61 Ranged'],
  }),
  new SlayerBuy({
    cost: 35,
    item: 'Broad arrows (x250)',
    notes: 'Arrows that can damage Turoths and Kurask. Level 55 Slayer and 50 Ranged required.',
    requirements: ['55 Slayer', '50 Ranged'],
  }),
  new SlayerBuy({
    cost: 750,
    item: 'Herb sack',
    notes: 'Stores up to 30 of each type of grimy herb (for a total of 420 herbs). Requires 58 Herblore to use.',
    requirements: ['58 Herblore'],
  }),
  new SlayerBuy({
    cost: 750,
    item: 'Rune pouch',
    notes:
      'Stores up to 16,000 of three types of runes. Only one can be owned. Can also be obtained by exchanging a rune pouch note at a bank.',
  }),
  new SlayerBuy({
    cost: 300,
    item: 'Combat brace',
    notes: 'Provides +1 to all combat stats when equipped during slayer tasks.',
  }),
  new SlayerBuy({
    cost: 30,
    item: 'Assignment reset',
    notes: 'Allows you to reset your current slayer task.',
  }),
  new SlayerBuy({
    cost: 80,
    item: 'Amulet of Avarice',
    notes: 'Increases currency drops from slayer monsters by 5%.',
  }),
];

/**
 * Get a buy by item name (case insensitive)
 */
export function getBuyByItem(name: string): SlayerBuy | undefined {
  return SLAYER_BUYS.find(buy => buy.getItem().toLowerCase() === name.toLowerCase());
}

/**
 * Get all buys within a cost range
 */
export function getBuysByCostRange(minCost: number, maxCost: number): SlayerBuy[] {
  return SLAYER_BUYS.filter(buy => buy.getCost() >= minCost && buy.getCost() <= maxCost);
}

/**
 * Get all buys that require specific skills
 */
export function getBuysByRequirement(requirement: string): SlayerBuy[] {
  return SLAYER_BUYS.filter(buy =>
    buy.getRequirements()?.some(req => req.toLowerCase().includes(requirement.toLowerCase())),
  );
}

/**
 * Get the total cost of multiple buys
 */
export function calculateBuysCost(items: string[]): number {
  return items.reduce((total, itemName) => {
    const buy = getBuyByItem(itemName);
    return total + (buy?.getCost() || 0);
  }, 0);
}
