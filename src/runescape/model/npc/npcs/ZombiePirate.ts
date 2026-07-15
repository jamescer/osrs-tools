import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Zombie Pirate
 * A zombie from the sea, an undead sailor from the Catacombs.
 * Wiki: https://oldschool.runescape.wiki/w/Zombie_pirate
 */
export const zombiePirate = new Npc({
  aggressiveStats: {
    attackBonus: 20,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 25,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Melee'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 10,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 40,
  defences: {
    magic: { bonus: -10, elementalWeakness: 'None' },
    melee: { crush: 3, slash: 8, stab: 5 },
    ranged: { heavy: 3, light: 3, standard: 3 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A zombie from the sea.',
  id: 1629,
  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: true,
    canBeVenom: false,
    isPoisonous: false,
  },
  locations: ['Catacombs'],
  members: true,
  name: 'Zombie pirate',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Zombie_pirate',
  stats: {
    attack: 30,
    defence: 28,
    hitpoints: 30,
    magic: 10,
    ranged: 10,
    strength: 32,
  },
  trivia: [
    'Zombie Pirates are undead sailors of the deep.',
    'They haunt the Catacombs searching for prey.',
    'These creatures are immune to poison attacks.',
  ],
});

export default zombiePirate;
