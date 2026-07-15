import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Sarachnis
 * A massive spider boss found in Sarachnis's Lair, a dangerous wilderness boss.
 * Wiki: https://oldschool.runescape.wiki/w/Sarachnis
 */
export const sarachnis = new Npc({
  aggressiveStats: {
    attackBonus: 100,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 110,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Slash'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 40,
    respawnTime: 0,
    weaknesses: [],
  },
  combatLevel: 225,
  defences: {
    magic: { bonus: 20, elementalWeakness: 'None' },
    melee: { crush: 30, slash: 50, stab: 35 },
    ranged: { heavy: 40, light: 40, standard: 40 },
  },
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
    new NpcDrop('Sarachnis Hide', 1, '1/8'),
    new NpcDrop('Sarachnis Cudgel', 1, '1/16'),
  ],
  examine: 'A massive spider.',
  id: 8387,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ["Sarachnis's Lair"],
  members: true,
  name: 'Sarachnis',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Sarachnis',
  stats: {
    attack: 150,
    defence: 140,
    hitpoints: 300,
    magic: 60,
    ranged: 70,
    strength: 160,
  },
  trivia: [
    'Sarachnis is a massive spider boss encountered in the wilderness.',
    'Defeating this boss is required for some Wilderness achievements.',
    'It drops unique spider-based armor components.',
  ],
});

export default sarachnis;
