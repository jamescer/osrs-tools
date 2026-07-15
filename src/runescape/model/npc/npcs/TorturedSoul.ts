import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Tortured Soul
 * A soul in torment within the Catacombs, a magical undead entity.
 * Wiki: https://oldschool.runescape.wiki/w/Tortured_soul
 */
export const torturedSoul = new Npc({
  aggressiveStats: {
    attackBonus: 12,
    magicStrengthBonus: 30,
    rangedStrengthBonus: 0,
    strengthBonus: 10,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Magic'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 12,
    respawnTime: 30,
    weaknesses: ['Fire'],
  },
  combatLevel: 35,
  defences: {
    magic: { bonus: 15, elementalWeakness: 'Fire' },
    melee: { crush: 2, slash: 5, stab: 3 },
    ranged: { heavy: 2, light: 2, standard: 2 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A soul in torment.',
  id: 1474,
  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: true,
    canBeVenom: false,
    isPoisonous: false,
  },
  locations: ['Catacombs'],
  members: true,
  name: 'Tortured soul',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tortured_soul',
  stats: {
    attack: 20,
    defence: 22,
    hitpoints: 25,
    magic: 35,
    ranged: 12,
    strength: 18,
  },
  trivia: [
    'Tortured Souls are magical entities of great suffering.',
    'They haunt the depths of the Catacombs.',
    'These souls are weak to fire-based magic.',
  ],
});

export default torturedSoul;
