/**
 * Slayer Extends Data
 * All extend unlocks available in the game
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */

import { SlayerExtend } from './SlayerExtend';

export const SLAYER_EXTENDS = [
  new SlayerExtend({
    appliesTo: ['Dark beasts'],
    cost: 100,
    name: 'Need more darkness',
    notes: 'Number of dark beasts assigned is increased to 100-149.',
  }),
  new SlayerExtend({
    appliesTo: ['Ankou'],
    cost: 100,
    name: 'Ankou very much',
    notes: 'Number of ankous assigned is increased to 91-149.',
  }),
  new SlayerExtend({
    appliesTo: ['Suqah'],
    cost: 100,
    name: 'Suq-a-nother one',
    notes: 'Number of suqahs assigned is increased to 185-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Black dragons'],
    cost: 50,
    name: 'Fire & Darkness',
    notes: 'Number of black dragons assigned is increased to 40-60.',
  }),
  new SlayerExtend({
    appliesTo: ['Bronze dragons', 'Iron dragons', 'Steel dragons'],
    cost: 100,
    name: 'Pedal to the metals',
    notes: 'Number of bronze, iron and steel dragons assigned is increased to 30-50, 60-100 and 40-60, respectively.',
  }),
  new SlayerExtend({
    appliesTo: ['Mithril dragons'],
    cost: 120,
    name: 'I really mith you',
    notes: 'Number of mithril dragons assigned is increased to 20-40.',
  }),
  new SlayerExtend({
    appliesTo: ['Adamant dragons'],
    cost: 100,
    name: "Ada'mind some more",
    notes: 'Number of adamant dragons assigned is increased to 20-30.',
  }),
  new SlayerExtend({
    appliesTo: ['Rune dragons'],
    cost: 100,
    name: 'RUUUUUNE',
    notes: 'Number of rune dragons assigned is increased to 30-60.',
  }),
  new SlayerExtend({
    appliesTo: ['Spiritual creatures'],
    cost: 100,
    name: 'Spiritual fervour',
    notes: 'Number of spiritual creatures assigned is increased to 181-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Aviansie'],
    cost: 100,
    name: 'Birds of a Feather',
    notes: 'Number of aviansies assigned is increased to 130-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Greater demons'],
    cost: 100,
    name: 'Greater challenge',
    notes: 'Number of greater demons assigned is increased to 150-200.',
  }),
  new SlayerExtend({
    appliesTo: ['Black demons'],
    cost: 100,
    name: "It's dark in here",
    notes: 'Number of black demons assigned is increased to 200-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Bloodveld'],
    cost: 75,
    name: 'Bleed me dry',
    notes: 'Number of bloodvelds assigned is increased to 200-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Aberrant spectres'],
    cost: 100,
    name: 'Smell ya later',
    notes: 'Number of aberrant spectres assigned is increased to 200-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Cave horrors'],
    cost: 100,
    name: 'Horrorific',
    notes: 'Number of cave horrors assigned is increased to 200-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Dust devils'],
    cost: 100,
    name: 'To dust you shall return',
    notes: 'Number of dust devils assigned is increased to 200-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Skeletal Wyvern'],
    cost: 100,
    name: 'Wyver-nother one',
    notes: 'Number of skeletal Wyverns assigned is increased to 50-75.',
  }),
  new SlayerExtend({
    appliesTo: ['Gargoyle'],
    cost: 100,
    name: 'Get smashed',
    notes: 'Number of gargoyles assigned is increased to 200-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Nechryael'],
    cost: 100,
    name: 'Nechs please',
    notes: 'Number of nechryael assigned is increased to 200-250.',
  }),
  new SlayerExtend({
    appliesTo: ['Abyssal demons'],
    cost: 100,
    name: 'Augment my abbies',
    notes: 'Number of abyssal demons assigned is increased to 200-250.',
  }),
];

/**
 * Get an extend by name (case insensitive)
 */
export function getExtendByName(name: string): SlayerExtend | undefined {
  return SLAYER_EXTENDS.find(extend => extend.getName().toLowerCase() === name.toLowerCase());
}

/**
 * Get all extends for a specific task
 */
export function getExtendsForTask(taskName: string): SlayerExtend[] {
  return SLAYER_EXTENDS.filter(extend =>
    extend.getAppliesToTasks()?.some(t => t.toLowerCase() === taskName.toLowerCase()),
  );
}
