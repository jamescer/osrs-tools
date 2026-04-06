import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Tortured Gorilla
 * A tortured demonic ape from Kruk's Dungeon, a creature of pure rage.
 * Wiki: https://oldschool.runescape.wiki/w/Tortured_gorilla
 */
export const torturedGorilla = new Npc({
  id: 7146,
  name: 'Tortured Gorilla',
  examine: 'A tortured demonic ape.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tortured_gorilla',
  combatLevel: 275,
  stats: {
    hitpoints: 300,
    attack: 180,
    strength: 200,
    defence: 160,
    magic: 100,
    ranged: 120,
  },
  aggressiveStats: {
    attackBonus: 140,
    strengthBonus: 160,
    magicStrengthBonus: 60,
    rangedStrengthBonus: 80,
  },
  defences: {
    melee: { stab: 40, slash: 50, crush: 35 },
    magic: { bonus: 20, elementalWeakness: 'Fire' },
    ranged: { light: 50, standard: 50, heavy: 50 },
  },
  combat: {
    maxHit: 50,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Melee', 'Magic', 'Ranged'],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: false,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Kruk\'s Dungeon'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
  ],
  trivia: [
    'Tortured Gorillas are demonic apes twisted by magical torture.',
    'They are found in Kruk\'s Dungeon.',
    'These creatures can attack with all three combat styles.',
  ],
});

export default torturedGorilla;
