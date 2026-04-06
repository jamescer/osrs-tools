import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Scorpia's Guardian
 * A powerful guardian that protects Scorpia in the Wilderness.
 * Wiki: https://oldschool.runescape.wiki/w/Scorpia's_guardian
 */
export const scorpiasGuardian = new Npc({
  id: 6618,
  name: 'Scorpia\'s guardian',
  examine: 'A guardian of the great scorpion.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Scorpia\'s_guardian',
  combatLevel: 155,
  stats: {
    hitpoints: 150,
    attack: 120,
    strength: 115,
    defence: 100,
    magic: 50,
    ranged: 50,
  },
  aggressiveStats: {
    attackBonus: 70,
    strengthBonus: 65,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 20, slash: 15, crush: 25 },
    magic: { bonus: -10, elementalWeakness: 'None' },
    ranged: { light: 10, standard: 10, heavy: 10 },
  },
  combat: {
    maxHit: 30,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Stab'],
    isPoisonous: true,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: false,
    isPoisonous: true,
    canBeVenom: false,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Wilderness'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
  ],
  trivia: [
    'Scorpia\'s Guardian is one of the guardians protecting Scorpia in the Wilderness.',
    'They are much stronger than regular scorpions and require higher combat stats.',
    'Defeating them may drop unique items related to Scorpia.',
  ],
});

export default scorpiasGuardian;
