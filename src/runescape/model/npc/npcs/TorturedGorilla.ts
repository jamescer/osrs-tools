import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Tortured Gorilla
 * A tortured demonic ape from Kruk's Dungeon, a creature of pure rage.
 * Wiki: https://oldschool.runescape.wiki/w/Tortured_gorilla
 */
export const torturedGorilla = new Npc({
  aggressiveStats: {
    attackBonus: 140,
    magicStrengthBonus: 60,
    rangedStrengthBonus: 80,
    strengthBonus: 160,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Melee', 'Magic', 'Ranged'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 50,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 275,
  defences: {
    magic: { bonus: 20, elementalWeakness: 'Fire' },
    melee: { crush: 35, slash: 50, stab: 40 },
    ranged: { heavy: 50, light: 50, standard: 50 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A tortured demonic ape.',
  id: 7146,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ["Kruk's Dungeon"],
  members: true,
  name: 'Tortured Gorilla',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tortured_gorilla',
  stats: {
    attack: 180,
    defence: 160,
    hitpoints: 300,
    magic: 100,
    ranged: 120,
    strength: 200,
  },
  trivia: [
    'Tortured Gorillas are demonic apes twisted by magical torture.',
    "They are found in Kruk's Dungeon.",
    'These creatures can attack with all three combat styles.',
  ],
});

export default torturedGorilla;
