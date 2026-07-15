import { Coins } from '../../items/QuestItems';
import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Peer the Seer
 * A wise Fremennik who helps with the Fremennik Trials and can reset house location.
 * Wiki: https://oldschool.runescape.wiki/w/Peer_the_Seer
 */
export const peerTheSeer = new Npc({
  aggressiveStats: {
    attackBonus: 0,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 0,
  },
  combat: {
    attackSpeed: 0,
    attackStyles: [],
    hasWeaponVenom: false,
    isAggressive: false,
    isAttackable: false,
    isPoisonous: false,
    maxHit: 0,
    respawnTime: 0,
    weaknesses: [],
  },
  combatLevel: 1,
  defences: {
    magic: { bonus: 0, elementalWeakness: 'None' },
    melee: { crush: 0, slash: 0, stab: 0 },
    ranged: { heavy: 0, light: 0, standard: 0 },
  },
  drops: [],
  examine: 'A wise Fremennik who helps with the Fremennik Trials and can reset your house location.',
  id: 3,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ["Rellekka (Seers' Village area, inside his house north-east of the market)"],
  members: false,
  name: 'Peer the Seer',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Peer_the_Seer',
  stats: {
    attack: 1,
    defence: 1,
    hitpoints: 1,
    magic: 1,
    ranged: 1,
    strength: 1,
  },
  trivia: [
    'Peer the Seer is a non-combat NPC.',
    'He provides services related to Fremennik Trials.',
    'He can reset your player-owned house location.',
  ],
});
