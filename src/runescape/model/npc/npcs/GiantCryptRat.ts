import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Giant Crypt Rat
 * A large rat from the Catacombs, one of the larger vermin found in dark places.
 * Wiki: https://oldschool.runescape.wiki/w/Giant_crypt_rat
 */
export const giantCryptRat = new Npc({
  aggressiveStats: {
    attackBonus: 75,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 85,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Crush'],
    hasWeaponVenom: false,
    isAggressive: false,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 35,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 149,
  defences: {
    magic: { bonus: -5, elementalWeakness: 'None' },
    melee: { crush: 10, slash: 20, stab: 15 },
    ranged: { heavy: 10, light: 10, standard: 10 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A large rat from the crypt.',
  id: 1315,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ['Catacombs'],
  members: true,
  name: 'Giant crypt rat',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Giant_crypt_rat',
  stats: {
    attack: 100,
    defence: 100,
    hitpoints: 150,
    magic: 40,
    ranged: 40,
    strength: 110,
  },
  trivia: [
    'Giant Crypt Rats are found in the Catacombs of Kourend.',
    'They are much larger than common rats.',
    'These creatures dwell in the deepest crypt regions.',
  ],
});

export default giantCryptRat;
