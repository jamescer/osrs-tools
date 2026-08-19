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
    notes: 'Stores up to 30 of each type of grimy herb (for a total of 450 herbs). Requires 58 Herblore to use.',
    requirements: ['58 Herblore'],
    wikiUrl: 'https://oldschool.runescape.wiki/w/Herb_sack',
  }),
  new SlayerBuy({
    cost: 750,
    item: 'Rune pouch',
    notes:
      'Stores up to 16,000 of three types of runes. Only one can be owned. Can also be obtained by exchanging a rune pouch note at a bank.',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Rune_pouch',
  }),
  new SlayerBuy({
    cost: 10,
    item: 'Looting bag',
    notes: 'Within the Wilderness and certain other PvP areas, tradeable items can be stored in the looting bag, enabling you to carry more loot.',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Looting_bag',
  }),
  new SlayerBuy({
    cost: 100,
    item: 'Gem bag',
    notes: 'Stores up to 60 uncut gems (sapphires through diamonds). Requires 25 Crafting to use.',
    requirements: ['25 Crafting'],
    wikiUrl: 'https://oldschool.runescape.wiki/w/Gem_bag',
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
