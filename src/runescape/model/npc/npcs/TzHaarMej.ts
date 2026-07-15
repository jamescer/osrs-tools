import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * TzHaar-Mej
 * Wiki reference: https://oldschool.runescape.wiki/w/TzHaar-Mej
 *
 * A magic-focused TzHaar mage. Uses fire spells.
 */
export const tzHaarMej = new Npc({
  aggressiveStats: {
    attackBonus: 0,
    magicStrengthBonus: 15,
    rangedStrengthBonus: 0,
    strengthBonus: 0,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Magic'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 33,
    respawnTime: 30,
    weaknesses: ['Fire spells'],
  },
  combatLevel: 159,
  defences: {
    magic: { bonus: 40, elementalWeakness: undefined },
    melee: { crush: 45, slash: 45, stab: 45 },
    ranged: { heavy: 25, light: 25, standard: 25 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always'), new NpcDrop('TzHaar-Mej Hide', 1, 'Rare')],
  examine: 'A TzHaar creature.',

  id: 1630,

  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },

  locations: ['TzHaar City'],

  members: true,

  name: 'TzHaar-Mej',

  officialWikiUrl: 'https://oldschool.runescape.wiki/w/TzHaar-Mej',
  stats: {
    attack: 80,
    defence: 90,
    hitpoints: 130,
    magic: 120,
    ranged: 60,
    strength: 70,
  },

  trivia: ['A magic-focused TzHaar mage', 'Uses fire spells in combat', 'Strongest TzHaar variant'],
});

export default tzHaarMej;
