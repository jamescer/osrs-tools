import { Coins } from '../../Item/Items';
import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Peer the Seer
 * A wise Fremennik who helps with the Fremennik Trials and can reset house location.
 * Wiki: https://oldschool.runescape.wiki/w/Peer_the_Seer
 */
export const peerTheSeer = new Npc({
  id: 3,
  name: 'Peer the Seer',
  examine: 'A wise Fremennik who helps with the Fremennik Trials and can reset your house location.',
  members: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Peer_the_Seer',
  combatLevel: 1,
  stats: {
    hitpoints: 1,
    attack: 1,
    strength: 1,
    defence: 1,
    magic: 1,
    ranged: 1,
  },
  aggressiveStats: {
    attackBonus: 0,
    strengthBonus: 0,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 0, slash: 0, crush: 0 },
    magic: { bonus: 0, elementalWeakness: 'None' },
    ranged: { light: 0, standard: 0, heavy: 0 },
  },
  combat: {
    maxHit: 0,
    attackSpeed: 0,
    respawnTime: 0,
    isAggressive: false,
    isAttackable: false,
    attackStyles: [],
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
  locations: ["Rellekka (Seers' Village area, inside his house north-east of the market)"],
  drops: [],
  trivia: [
    'Peer the Seer is a non-combat NPC.',
    'He provides services related to Fremennik Trials.',
    'He can reset your player-owned house location.',
  ],
});
