import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Terrorbird
 * A large flightless bird found on Mos Le'Harmless, a native creature of the island.
 * Wiki: https://oldschool.runescape.wiki/w/Terrorbird
 */
export const terrorbird = new Npc({
  aggressiveStats: {
    attackBonus: 0,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 0,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Stab'],
    hasWeaponVenom: false,
    isAggressive: false,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 1,
    respawnTime: 10,
    weaknesses: [],
  },
  combatLevel: 1,
  defences: {
    magic: { bonus: -20, elementalWeakness: 'None' },
    melee: { crush: 0, slash: 0, stab: 0 },
    ranged: { heavy: 0, light: 0, standard: 0 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A large flightless bird.',
  id: 6832,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ["Mos Le'Harmless"],
  members: false,
  name: 'Terrorbird',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Terrorbird',
  stats: {
    attack: 2,
    defence: 2,
    hitpoints: 3,
    magic: 1,
    ranged: 1,
    strength: 2,
  },
  trivia: [
    'Terrorbirds are large flightless birds.',
    "They are native to Mos Le'Harmless.",
    'These birds are harmless to most adventurers.',
  ],
});

export default terrorbird;
