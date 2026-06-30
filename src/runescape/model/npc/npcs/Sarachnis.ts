import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Sarachnis
 * A massive spider boss found in Sarachnis's Lair, a dangerous wilderness boss.
 * Wiki: https://oldschool.runescape.wiki/w/Sarachnis
 */
export const sarachnis = new Npc({
  id: 8387,
  name: 'Sarachnis',
  examine: 'A massive spider.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Sarachnis',
  combatLevel: 225,
  stats: {
    hitpoints: 300,
    attack: 150,
    strength: 160,
    defence: 140,
    magic: 60,
    ranged: 70,
  },
  aggressiveStats: {
    attackBonus: 100,
    strengthBonus: 110,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 35, slash: 50, crush: 30 },
    magic: { bonus: 20, elementalWeakness: 'None' },
    ranged: { light: 40, standard: 40, heavy: 40 },
  },
  combat: {
    maxHit: 40,
    attackSpeed: 5,
    respawnTime: 0,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Slash'],
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
  locations: ['Sarachnis\'s Lair'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
    new NpcDrop('Sarachnis Hide', 1, '1/8'),
    new NpcDrop('Sarachnis Cudgel', 1, '1/16'),
  ],
  trivia: [
    'Sarachnis is a massive spider boss encountered in the wilderness.',
    'Defeating this boss is required for some Wilderness achievements.',
    'It drops unique spider-based armor components.',
  ],
});

export default sarachnis;
