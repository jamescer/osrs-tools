import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Zombie Rat
 * A zombie rat found in the Catacombs, an undead rodent of small size.
 * Wiki: https://oldschool.runescape.wiki/w/Zombie_rat
 */
export const zombieRat = new Npc({
  aggressiveStats: {
    attackBonus: 12,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 15,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Melee'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 6,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 25,
  defences: {
    magic: { bonus: -15, elementalWeakness: 'None' },
    melee: { crush: 1, slash: 4, stab: 2 },
    ranged: { heavy: 1, light: 1, standard: 1 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A zombie rat.',
  id: 1630,
  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: true,
    canBeVenom: false,
    isPoisonous: false,
  },
  locations: ['Catacombs'],
  members: true,
  name: 'Zombie rat',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Zombie_rat',
  stats: {
    attack: 18,
    defence: 16,
    hitpoints: 20,
    magic: 5,
    ranged: 5,
    strength: 20,
  },
  trivia: [
    'Zombie Rats are undead rodents of small size.',
    'They scurry through the depths of the Catacombs.',
    'These creatures are immune to poison attacks.',
  ],
});

export default zombieRat;
