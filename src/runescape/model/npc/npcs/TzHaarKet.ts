import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * TzHaar-Ket
 * Wiki reference: https://oldschool.runescape.wiki/w/TzHaar-Ket
 *
 * A melee-focused TzHaar creature. Lower level than Hur variant.
 */
export const tzHaarKet = new Npc({
  aggressiveStats: {
    attackBonus: 0,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 0,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Melee'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 28,
    respawnTime: 30,
    weaknesses: ['Stab attacks'],
  },
  combatLevel: 140,
  defences: {
    magic: { bonus: 25, elementalWeakness: undefined },
    melee: { crush: 45, slash: 45, stab: 45 },
    ranged: { heavy: 25, light: 25, standard: 25 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always'), new NpcDrop('TzHaar Hide', 1, 'Rare')],
  examine: 'A TzHaar creature.',

  id: 1628,

  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },

  locations: ['TzHaar City'],

  members: true,

  name: 'TzHaar-Ket',

  officialWikiUrl: 'https://oldschool.runescape.wiki/w/TzHaar-Ket',
  stats: {
    attack: 95,
    defence: 90,
    hitpoints: 120,
    magic: 60,
    ranged: 60,
    strength: 105,
  },

  trivia: ['A melee-focused TzHaar creature', 'Lower level than TzHaar-Hur', 'Found in TzHaar City'],
});

export default tzHaarKet;
