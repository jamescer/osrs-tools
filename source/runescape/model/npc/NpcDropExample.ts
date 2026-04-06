/**
 * Example usage of the NPC Drop model
 * Demonstrates how to create and use NpcDrop instances
 */

import { Npc } from './Npc';
import { NpcDrop } from './NpcDrop';

// ============================================================================
// EXAMPLE 1: Creating individual drops
// ============================================================================

// Simple guaranteed drop (100% chance)
const coinsDrop = new NpcDrop('Coins', 50, 'Always');
console.log(coinsDrop.toString()); // "50x Coins (Always)"

// Drop with specific ratio
const rareDropDrop = new NpcDrop('Dragon Bones', 1, '1/128');
console.log(rareDropDrop.toString()); // "1x Dragon Bones (1/128)"

// Drop with quantity range
const herbDropDrop = new NpcDrop('Grimy Ranarr Weed', [1, 3], '1/32');
console.log(herbDropDrop.toString()); // "1-3x Grimy Ranarr Weed (1/32)"

// ============================================================================
// EXAMPLE 2: Creating an NPC with drops
// ============================================================================

const goblin = new Npc({
  id: 7,
  name: 'Goblin',
  examine: 'A small green creature',
  members: false,
  combatLevel: 2,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Goblin',
  hitpoints: 5,
  locations: ['Lumbridge'],
  drops: [
    new NpcDrop('Coins', [1, 5], 'Always'),
    new NpcDrop('Tinderbox', 1, '1/64'),
    new NpcDrop('Bronze Axe', 1, '1/128'),
  ],
  weaknesses: ['Fire'],
});

console.log(`\n${goblin.name} drops:`);
goblin.drops.forEach((drop: NpcDrop) => console.log(`  - ${drop.toString()}`));

// ============================================================================
// EXAMPLE 3: Accessing drop properties
// ============================================================================

const expensiveDrop = new NpcDrop('Justiciar Faceguard', 1, '1/512');
console.log(`\nDrop: ${expensiveDrop.toString()}`);
console.log(`Item: ${expensiveDrop.item}`);
console.log(`Quantity: ${expensiveDrop.quantity}`);
console.log(`Rarity: ${expensiveDrop.rarity}`);
