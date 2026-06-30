import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Zombie Rat
 * A zombie rat found in the Catacombs, an undead rodent of small size.
 * Wiki: https://oldschool.runescape.wiki/w/Zombie_rat
 */
export const zombieRat = new Npc({
  id: 1630,
  name: 'Zombie rat',
  examine: 'A zombie rat.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Zombie_rat',
  combatLevel: 25,
  stats: {
    hitpoints: 20,
    attack: 18,
    strength: 20,
    defence: 16,
    magic: 5,
    ranged: 5,
  },
  aggressiveStats: {
    attackBonus: 12,
    strengthBonus: 15,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 2, slash: 4, crush: 1 },
    magic: { bonus: -15, elementalWeakness: 'None' },
    ranged: { light: 1, standard: 1, heavy: 1 },
  },
  combat: {
    maxHit: 6,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Melee'],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: false,
    isPoisonous: false,
    canBeVenom: false,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Catacombs'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
  ],
  trivia: [
    'Zombie Rats are undead rodents of small size.',
    'They scurry through the depths of the Catacombs.',
    'These creatures are immune to poison attacks.',
  ],
});

export default zombieRat;
