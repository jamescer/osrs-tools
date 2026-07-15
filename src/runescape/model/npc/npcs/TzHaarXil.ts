import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * TzHaar-Xil
 * Wiki reference: https://oldschool.runescape.wiki/w/TzHaar-Xil
 *
 * A ranged-focused TzHaar creature. Uses projectile attacks.
 */
export const tzHaarXil = new Npc({
  aggressiveStats: {
    attackBonus: 0,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 10,
    strengthBonus: 0,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Ranged'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 30,
    respawnTime: 30,
    weaknesses: ['Fire spells'],
  },
  combatLevel: 145,
  defences: {
    magic: { bonus: 25, elementalWeakness: undefined },
    melee: { crush: 45, slash: 45, stab: 45 },
    ranged: { heavy: 35, light: 35, standard: 35 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always'), new NpcDrop('TzHaar-Xil Hide', 1, 'Rare')],
  examine: 'A TzHaar creature.',

  id: 1629,

  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },

  locations: ['TzHaar City'],

  members: true,

  name: 'TzHaar-Xil',

  officialWikiUrl: 'https://oldschool.runescape.wiki/w/TzHaar-Xil',
  stats: {
    attack: 90,
    defence: 90,
    hitpoints: 125,
    magic: 65,
    ranged: 110,
    strength: 80,
  },

  trivia: ['A ranged-focused TzHaar creature', 'Uses projectile attacks', 'Found in TzHaar City'],
});

export default tzHaarXil;
