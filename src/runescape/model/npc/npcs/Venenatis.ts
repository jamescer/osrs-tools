import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Venenatis
 * A massive spider boss of the Wilderness, the ultimate arachnid predator.
 * Wiki: https://oldschool.runescape.wiki/w/Venenatis
 */
export const venenatis = new Npc({
  aggressiveStats: {
    attackBonus: 100,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 110,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Melee'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: true,
    maxHit: 40,
    respawnTime: 0,
    weaknesses: [],
  },
  combatLevel: 225,
  defences: {
    magic: { bonus: 15, elementalWeakness: 'None' },
    melee: { crush: 25, slash: 40, stab: 30 },
    ranged: { heavy: 35, light: 35, standard: 35 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A massive spider.',
  id: 6611,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: true,
  },
  locations: ['Wilderness'],
  members: true,
  name: 'Venenatis',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Venenatis',
  stats: {
    attack: 140,
    defence: 130,
    hitpoints: 225,
    magic: 60,
    ranged: 60,
    strength: 150,
  },
  trivia: [
    'Venenatis is a massive poisonous spider of the Wilderness.',
    'She is the ultimate arachnid predator.',
    'This creature does not respawn once defeated.',
  ],
});

export default venenatis;
