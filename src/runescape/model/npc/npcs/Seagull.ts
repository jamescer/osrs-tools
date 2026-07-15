import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Seagull
 * Wiki reference: https://oldschool.runescape.wiki/w/Seagull
 *
 * A large bird found near water. One of the weakest enemies in OSRS.
 */
export const seagull = new Npc({
  aggressiveStats: {
    attackBonus: -47,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: -42,
  },
  combat: {
    attackSpeed: 4,
    attackStyles: ['Stab'],
    hasWeaponVenom: false,
    isAggressive: false,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 0,
    respawnTime: 15,
    weaknesses: [],
  },
  combatLevel: 1,
  defences: {
    magic: { bonus: -42, elementalWeakness: undefined },
    melee: { crush: -42, slash: -42, stab: -42 },
    ranged: { heavy: -42, light: -42, standard: -42 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A large bird.',

  id: 1022,

  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: true,
    canBeVenom: false,
    isPoisonous: false,
  },

  locations: ['Coastal areas', 'Port Sarim', 'Brimhaven'],

  members: false,

  name: 'Seagull',

  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Seagull',
  stats: {
    attack: 1,
    defence: 1,
    hitpoints: 2,
    magic: 1,
    ranged: 1,
    strength: 1,
  },

  trivia: ['A large coastal bird', 'Found near water', 'One of the weakest enemies in OSRS'],
});

export default seagull;
