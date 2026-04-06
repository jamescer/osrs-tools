import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Giant Crypt Rat
 * A large rat from the Catacombs, one of the larger vermin found in dark places.
 * Wiki: https://oldschool.runescape.wiki/w/Giant_crypt_rat
 */
export const giantCryptRat = new Npc({
  id: 1315,
  name: 'Giant crypt rat',
  examine: 'A large rat from the crypt.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Giant_crypt_rat',
  combatLevel: 149,
  stats: {
    hitpoints: 150,
    attack: 100,
    strength: 110,
    defence: 100,
    magic: 40,
    ranged: 40,
  },
  aggressiveStats: {
    attackBonus: 75,
    strengthBonus: 85,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 15, slash: 20, crush: 10 },
    magic: { bonus: -5, elementalWeakness: 'None' },
    ranged: { light: 10, standard: 10, heavy: 10 },
  },
  combat: {
    maxHit: 35,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: false,
    isAttackable: true,
    attackStyles: ['Crush'],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: false,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Catacombs'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
  ],
  trivia: [
    'Giant Crypt Rats are found in the Catacombs of Kourend.',
    'They are much larger than common rats.',
    'These creatures dwell in the deepest crypt regions.',
  ],
});

export default giantCryptRat;
