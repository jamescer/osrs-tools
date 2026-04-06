import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Tortured Soul
 * A soul in torment within the Catacombs, a magical undead entity.
 * Wiki: https://oldschool.runescape.wiki/w/Tortured_soul
 */
export const torturedSoul = new Npc({
  id: 1474,
  name: 'Tortured soul',
  examine: 'A soul in torment.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Tortured_soul',
  combatLevel: 35,
  stats: {
    hitpoints: 25,
    attack: 20,
    strength: 18,
    defence: 22,
    magic: 35,
    ranged: 12,
  },
  aggressiveStats: {
    attackBonus: 12,
    strengthBonus: 10,
    magicStrengthBonus: 30,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 3, slash: 5, crush: 2 },
    magic: { bonus: 15, elementalWeakness: 'Fire' },
    ranged: { light: 2, standard: 2, heavy: 2 },
  },
  combat: {
    maxHit: 12,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Magic'],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: ['Fire'],
  },
  immunities: {
    canBePoison: false,
    isPoisonous: false,
    canBeVenom: false,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Catacombs'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
  ],
  trivia: [
    'Tortured Souls are magical entities of great suffering.',
    'They haunt the depths of the Catacombs.',
    'These souls are weak to fire-based magic.',
  ],
});

export default torturedSoul;
