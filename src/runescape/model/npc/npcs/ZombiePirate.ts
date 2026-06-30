import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Zombie Pirate
 * A zombie from the sea, an undead sailor from the Catacombs.
 * Wiki: https://oldschool.runescape.wiki/w/Zombie_pirate
 */
export const zombiePirate = new Npc({
  id: 1629,
  name: 'Zombie pirate',
  examine: 'A zombie from the sea.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Zombie_pirate',
  combatLevel: 40,
  stats: {
    hitpoints: 30,
    attack: 30,
    strength: 32,
    defence: 28,
    magic: 10,
    ranged: 10,
  },
  aggressiveStats: {
    attackBonus: 20,
    strengthBonus: 25,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 5, slash: 8, crush: 3 },
    magic: { bonus: -10, elementalWeakness: 'None' },
    ranged: { light: 3, standard: 3, heavy: 3 },
  },
  combat: {
    maxHit: 10,
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
    'Zombie Pirates are undead sailors of the deep.',
    'They haunt the Catacombs searching for prey.',
    'These creatures are immune to poison attacks.',
  ],
});

export default zombiePirate;
