import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Hans
 * Wiki reference: https://oldschool.runescape.wiki/w/Hans
 *
 * The loyal servant of Duke Horacio. Hans is a non-attackable NPC.
 */
export const hans = new Npc({
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
    magic: { bonus: 0, elementalWeakness: undefined },
    melee: { crush: 0, slash: 0, stab: 0 },
    ranged: { heavy: 0, light: 0, standard: 0 },
  },
  drops: [],
  examine: 'The loyal servant of Duke Horacio, found walking around Lumbridge Castle.',

  id: 2,

  immunities: {
    canBeCannoned: false,
    canBePoison: false,
    canBeThralled: false,
    canBeVenom: false,
    isPoisonous: false,
  },

  locations: ['Lumbridge Castle'],

  members: false,

  name: 'Hans',

  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Hans',
  stats: {
    attack: 1,
    defence: 1,
    hitpoints: 1,
    magic: 1,
    ranged: 1,
    strength: 1,
  },

  trivia: ['The loyal servant of Duke Horacio', 'Non-attackable NPC', 'Found walking around Lumbridge Castle'],
});

export default hans;
