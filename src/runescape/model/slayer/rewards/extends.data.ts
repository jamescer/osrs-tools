/**
 * Slayer Extends Data
 * All extend unlocks available in the game
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */

import { SlayerExtend } from './SlayerExtend';

export const SLAYER_EXTENDS = [
  new SlayerExtend({
    name: 'Need more darkness',
    cost: 100,
    notes: 'Number of dark beasts assigned is increased to 100-149.',
    appliesTo: ['Dark beasts'],
  }),
  new SlayerExtend({
    name: 'Ankou very much',
    cost: 100,
    notes: 'Number of ankous assigned is increased to 91-149.',
    appliesTo: ['Ankou'],
  }),
  new SlayerExtend({
    name: 'Suq-a-nother one',
    cost: 100,
    notes: 'Number of suqahs assigned is increased to 185-250.',
    appliesTo: ['Suqah'],
  }),
  new SlayerExtend({
    name: 'Fire & Darkness',
    cost: 50,
    notes: 'Number of black dragons assigned is increased to 40-60.',
    appliesTo: ['Black dragons'],
  }),
  new SlayerExtend({
    name: 'Pedal to the metals',
    cost: 100,
    notes: 'Number of bronze, iron and steel dragons assigned is increased to 30-50, 60-100 and 40-60, respectively.',
    appliesTo: ['Bronze dragons', 'Iron dragons', 'Steel dragons'],
  }),
  new SlayerExtend({
    name: 'I really mith you',
    cost: 120,
    notes: 'Number of mithril dragons assigned is increased to 20-40.',
    appliesTo: ['Mithril dragons'],
  }),
  new SlayerExtend({
    name: "Ada'mind some more",
    cost: 100,
    notes: 'Number of adamant dragons assigned is increased to 20-30.',
    appliesTo: ['Adamant dragons'],
  }),
  new SlayerExtend({
    name: 'RUUUUUNE',
    cost: 100,
    notes: 'Number of rune dragons assigned is increased to 30-60.',
    appliesTo: ['Rune dragons'],
  }),
  new SlayerExtend({
    name: 'Spiritual fervour',
    cost: 100,
    notes: 'Number of spiritual creatures assigned is increased to 181-250.',
    appliesTo: ['Spiritual creatures'],
  }),
  new SlayerExtend({
    name: 'Birds of a Feather',
    cost: 100,
    notes: 'Number of aviansies assigned is increased to 130-250.',
    appliesTo: ['Aviansie'],
  }),
  new SlayerExtend({
    name: 'Greater challenge',
    cost: 100,
    notes: 'Number of greater demons assigned is increased to 150-200.',
    appliesTo: ['Greater demons'],
  }),
  new SlayerExtend({
    name: "It's dark in here",
    cost: 100,
    notes: 'Number of black demons assigned is increased to 200-250.',
    appliesTo: ['Black demons'],
  }),
  new SlayerExtend({
    name: 'Bleed me dry',
    cost: 75,
    notes: 'Number of bloodvelds assigned is increased to 200-250.',
    appliesTo: ['Bloodveld'],
  }),
  new SlayerExtend({
    name: 'Smell ya later',
    cost: 100,
    notes: 'Number of aberrant spectres assigned is increased to 200-250.',
    appliesTo: ['Aberrant spectres'],
  }),
  new SlayerExtend({
    name: 'Horrorific',
    cost: 100,
    notes: 'Number of cave horrors assigned is increased to 200-250.',
    appliesTo: ['Cave horrors'],
  }),
  new SlayerExtend({
    name: 'To dust you shall return',
    cost: 100,
    notes: 'Number of dust devils assigned is increased to 200-250.',
    appliesTo: ['Dust devils'],
  }),
  new SlayerExtend({
    name: 'Wyver-nother one',
    cost: 100,
    notes: 'Number of skeletal Wyverns assigned is increased to 50-75.',
    appliesTo: ['Skeletal Wyvern'],
  }),
  new SlayerExtend({
    name: 'Get smashed',
    cost: 100,
    notes: 'Number of gargoyles assigned is increased to 200-250.',
    appliesTo: ['Gargoyle'],
  }),
  new SlayerExtend({
    name: 'Nechs please',
    cost: 100,
    notes: 'Number of nechryael assigned is increased to 200-250.',
    appliesTo: ['Nechryael'],
  }),
  new SlayerExtend({
    name: 'Augment my abbies',
    cost: 100,
    notes: 'Number of abyssal demons assigned is increased to 200-250.',
    appliesTo: ['Abyssal demons'],
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
    extend.getAppliesToTasks()?.some(t => t.toLowerCase() === taskName.toLowerCase())
  );
}
