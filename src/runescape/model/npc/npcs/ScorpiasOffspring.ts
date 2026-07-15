import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Scorpia's Offspring
 * A young scorpion child of Scorpia, found in the Wilderness.
 * Wiki: https://oldschool.runescape.wiki/w/Scorpia's_offspring
 */
export const scorpiasOffspring = new Npc({
  aggressiveStats: {
    attackBonus: 25,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 30,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Melee'],
    hasWeaponVenom: false,
    isAggressive: false,
    isAttackable: true,
    isPoisonous: true,
    maxHit: 8,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 40,
  defences: {
    magic: { bonus: -5, elementalWeakness: 'None' },
    melee: { crush: 3, slash: 8, stab: 5 },
    ranged: { heavy: 3, light: 3, standard: 3 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A young scorpion.',
  id: 6619,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: true,
  },
  locations: ['Wilderness'],
  members: true,
  name: "Scorpia's offspring",
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Scorpia's_offspring",
  stats: {
    attack: 38,
    defence: 35,
    hitpoints: 50,
    magic: 15,
    ranged: 15,
    strength: 40,
  },
  trivia: [
    "Scorpia's Offspring are young scorpions.",
    'They inherit poison from their mother.',
    'These creatures are weaker than adult scorpions.',
  ],
});

export default scorpiasOffspring;
