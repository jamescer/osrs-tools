import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Scorpia's Guardian
 * A powerful guardian that protects Scorpia in the Wilderness.
 * Wiki: https://oldschool.runescape.wiki/w/Scorpia's_guardian
 */
export const scorpiasGuardian = new Npc({
  aggressiveStats: {
    attackBonus: 70,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 65,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Stab'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: true,
    maxHit: 30,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 155,
  defences: {
    magic: { bonus: -10, elementalWeakness: 'None' },
    melee: { crush: 25, slash: 15, stab: 20 },
    ranged: { heavy: 10, light: 10, standard: 10 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A guardian of the great scorpion.',
  id: 6618,
  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: true,
    canBeVenom: false,
    isPoisonous: true,
  },
  locations: ['Wilderness'],
  members: true,
  name: "Scorpia's guardian",
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Scorpia's_guardian",
  stats: {
    attack: 120,
    defence: 100,
    hitpoints: 150,
    magic: 50,
    ranged: 50,
    strength: 115,
  },
  trivia: [
    "Scorpia's Guardian is one of the guardians protecting Scorpia in the Wilderness.",
    'They are much stronger than regular scorpions and require higher combat stats.',
    'Defeating them may drop unique items related to Scorpia.',
  ],
});

export default scorpiasGuardian;
