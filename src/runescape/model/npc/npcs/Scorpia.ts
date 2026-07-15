import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Scorpia
 * A massive scorpion queen of the Wilderness, the final boss of the arachnid family.
 * Wiki: https://oldschool.runescape.wiki/w/Scorpia
 */
export const scorpia = new Npc({
  aggressiveStats: {
    attackBonus: 100,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 110,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Magic', 'Melee'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: true,
    maxHit: 40,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 225,
  defences: {
    magic: { bonus: 15, elementalWeakness: 'None' },
    melee: { crush: 25, slash: 40, stab: 30 },
    ranged: { heavy: 35, light: 35, standard: 35 },
  },
  drops: [
    new NpcDrop('Scorpion Poison', 1, 'Always'),
    new NpcDrop('Bones', 1, 'Always'),
    new NpcDrop('Coins', [500, 1000], 'Always'),
    new NpcDrop('Scorpias Orb', 1, '1/512'),
    new NpcDrop('Scorpia Husk', 1, '1/512'),
  ],
  examine: 'A massive scorpion.',
  id: 6617,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: true,
  },
  locations: ['Wilderness'],
  members: true,
  name: 'Scorpia',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Scorpia',
  stats: {
    attack: 140,
    defence: 130,
    hitpoints: 225,
    magic: 60,
    ranged: 60,
    strength: 150,
  },
  trivia: [
    'Scorpia is the massive queen of all scorpions.',
    'She is a boss creature found in the Wilderness.',
    'Scorpia is poisonous and feeds on creatures weaker than itself.',
  ],
});

export default scorpia;
