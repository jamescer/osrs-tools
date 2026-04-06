import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Scorpia
 * A massive scorpion queen of the Wilderness, the final boss of the arachnid family.
 * Wiki: https://oldschool.runescape.wiki/w/Scorpia
 */
export const scorpia = new Npc({
  id: 6617,
  name: 'Scorpia',
  examine: 'A massive scorpion.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Scorpia',
  combatLevel: 225,
  stats: {
    hitpoints: 225,
    attack: 140,
    strength: 150,
    defence: 130,
    magic: 60,
    ranged: 60,
  },
  aggressiveStats: {
    attackBonus: 100,
    strengthBonus: 110,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 30, slash: 40, crush: 25 },
    magic: { bonus: 15, elementalWeakness: 'None' },
    ranged: { light: 35, standard: 35, heavy: 35 },
  },
  combat: {
    maxHit: 40,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Magic', 'Melee'],
    isPoisonous: true,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: true,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Wilderness'],
  drops: [
    new NpcDrop('Scorpion Poison', 1, 'Always'),
    new NpcDrop('Bones', 1, 'Always'),
    new NpcDrop('Coins', [500, 1000], 'Always'),
    new NpcDrop('Scorpias Orb', 1, '1/512'),
    new NpcDrop('Scorpia Husk', 1, '1/512'),
  ],
  trivia: [
    'Scorpia is the massive queen of all scorpions.',
    'She is a boss creature found in the Wilderness.',
    'Scorpia is poisonous and feeds on creatures weaker than itself.',
  ],
});

export default scorpia;
