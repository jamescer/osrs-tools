import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Terrorbird
 * A large flightless bird found on Mos Le'Harmless, a native creature of the island.
 * Wiki: https://oldschool.runescape.wiki/w/Terrorbird
 */
export const terrorbird = new Npc({
  id: 6832,
  name: 'Terrorbird',
  examine: 'A large flightless bird.',
  members: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Terrorbird',
  combatLevel: 1,
  stats: {
    hitpoints: 3,
    attack: 2,
    strength: 2,
    defence: 2,
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
    magic: { bonus: -20, elementalWeakness: 'None' },
    ranged: { light: 0, standard: 0, heavy: 0 },
  },
  combat: {
    maxHit: 1,
    attackSpeed: 5,
    respawnTime: 10,
    isAggressive: false,
    isAttackable: true,
    attackStyles: ['Stab'],
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
  locations: ['Mos Le\'Harmless'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
  ],
  trivia: [
    'Terrorbirds are large flightless birds.',
    'They are native to Mos Le\'Harmless.',
    'These birds are harmless to most adventurers.',
  ],
});

export default terrorbird;
