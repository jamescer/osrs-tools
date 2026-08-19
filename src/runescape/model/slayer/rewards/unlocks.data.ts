/**
 * Slayer Unlocks Data
 * Permanent one-time unlocks purchasable from the Slayer reward point shop.
 * Reference: https://oldschool.runescape.wiki/w/Slayer_reward_point
 */

import { SlayerUnlock } from './SlayerUnlock';

export const SLAYER_UNLOCKS: SlayerUnlock[] = [
  // --- Finishing-blow automations ---
  new SlayerUnlock({
    cost: 120,
    description: 'Gargoyles are automatically dealt the finishing blow if the player has a rock hammer in their inventory.',
    name: 'Gargoyle Smasher',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Gargoyle_Smasher',
  }),
  new SlayerUnlock({
    cost: 10,
    description: 'Rock slugs are automatically dealt the finishing blow if the player has a bag of salt in their inventory.',
    name: 'Slug Salter',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Slug_Salter',
  }),
  new SlayerUnlock({
    cost: 10,
    description: 'Desert lizards are automatically dealt the finishing blow if the player has an ice cooler in their inventory.',
    name: 'Reptile Freezer',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Reptile_Freezer',
  }),
  new SlayerUnlock({
    cost: 110,
    description: 'Mutated zygomites are automatically dealt the finishing blow if the player has fungicide spray and fungicide in their inventory.',
    name: "'Shroom Sprayer",
    wikiUrl: "https://oldschool.runescape.wiki/w/'Shroom_Sprayer",
  }),
  // --- Crafting unlocks ---
  new SlayerUnlock({
    cost: 400,
    description: 'Learn to assemble a Slayer helmet, which requires level 55 Crafting.',
    name: 'Malevolent Masquerade',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Malevolent_Masquerade',
  }),
  new SlayerUnlock({
    cost: 150,
    description: 'Learn to craft a Slayer ring, which requires level 75 Crafting.',
    name: 'Ring Bling',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Ring_Bling',
  }),
  new SlayerUnlock({
    cost: 300,
    description: 'Learn to fletch broad arrows (level 52 Fletching), broad bolts (level 55 Fletching), and amethyst broad bolts (level 76 Fletching).',
    name: 'Broader Fletching',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Broader_Fletching',
  }),
  // --- Task unlocks (new monster types) ---
  new SlayerUnlock({
    cost: 50,
    description: 'Konar, Duradel, and Nieve will be able to assign red dragons as your task.',
    name: 'Seeing Red',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Seeing_Red',
  }),
  new SlayerUnlock({
    cost: 80,
    description: 'Konar, Duradel, Nieve, Chaeldar, and Krystilia will be able to assign Aviansie as your task. Requires level 60 Agility or 60 Strength to unlock.',
    name: 'Watch the Birdie',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Watch_the_Birdie',
  }),
  new SlayerUnlock({
    cost: 100,
    description: 'Duradel, Nieve, and Chaeldar will be able to assign TzHaar as your task. You will be offered a chance to slay TzTok-Jad.',
    name: 'Hot Stuff',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Hot_Stuff',
  }),
  new SlayerUnlock({
    cost: 200,
    description: 'Konar, Duradel, Krystilia, and Nieve will be able to assign various boss monsters as your task.',
    name: 'Like a Boss',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Like_a_Boss',
  }),
  new SlayerUnlock({
    cost: 75,
    description: 'Konar, Duradel, Nieve, and Chaeldar will be able to assign Lizardmen as your task.',
    name: 'Reptile Got Ripped',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Reptile_Got_Ripped',
  }),
  new SlayerUnlock({
    cost: 50,
    description: 'Certain Slayer monsters will have the chance of spawning a superior version whilst on a Slayer task.',
    name: 'Bigger and Badder',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Bigger_and_Badder',
  }),
  new SlayerUnlock({
    cost: 200,
    description: 'Mithril dragons drop mithril bars in banknote form while killed on assignment.',
    name: 'Duly Noted',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Duly_Noted',
  }),
  new SlayerUnlock({
    cost: 500,
    description: 'Stops you getting Fossil Island Wyvern tasks, without counting towards your blocked task limit.',
    name: 'Stop the Wyvern',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Stop_the_Wyvern',
  }),
  new SlayerUnlock({
    cost: 500,
    description: 'Slaying Dusk and Dawn now counts for two kills towards your task rather than one.',
    name: 'Double Trouble',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Double_Trouble',
  }),
  new SlayerUnlock({
    cost: 80,
    description: 'Konar, Duradel, and Nieve will be able to assign Basilisks as your task.',
    name: 'Basilocked',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Basilocked',
  }),
  new SlayerUnlock({
    cost: 80,
    description: 'Konar, Duradel, Nieve, and Chaeldar will be able to assign Vampyres as your task.',
    name: 'Actual Vampyre Slayer',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Actual_Vampyre_Slayer',
  }),
  new SlayerUnlock({
    cost: 500,
    description: 'Gain the ability to store your task. You can freely swap between your current task and stored task at any Slayer master.',
    name: 'Task Storage',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Task_Storage',
  }),
  new SlayerUnlock({
    cost: 0,
    description: 'Krystilia will be able to assign Jellies, Dust Devils, Nechryaels, and Abyssal Demons as your task.',
    name: 'I Wildy More Slayer',
    wikiUrl: 'https://oldschool.runescape.wiki/w/I_Wildy_More_Slayer',
  }),
  new SlayerUnlock({
    cost: 60,
    description: 'Konar, Duradel, Nieve, and Chaeldar will be able to assign Warped creatures as your task. Requires completion of The Path of Glouphrie.',
    name: 'Warped Reality',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Warped_Reality',
  }),
  new SlayerUnlock({
    cost: 80,
    description: 'Nieve and Duradel will be able to assign Aquanites as your task.',
    name: 'Lured In',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Lured_In',
  }),
  new SlayerUnlock({
    cost: 80,
    description: 'Nieve and Duradel will be able to assign Gryphons as your task. Requires completion of Troubled Tortugans.',
    name: 'Wings Spread',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Wings_Spread',
  }),
  new SlayerUnlock({
    cost: 100,
    description: 'Weighting increased from 5 to 8 for Frost dragon tasks from Nieve and Duradel.',
    name: 'Chance of Heavy Frost',
    wikiUrl: 'https://oldschool.runescape.wiki/w/Chance_of_Heavy_Frost',
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
