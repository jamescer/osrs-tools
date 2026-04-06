import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Venenatis
 * A massive spider boss of the Wilderness, the ultimate arachnid predator.
 * Wiki: https://oldschool.runescape.wiki/w/Venenatis
 */
export const venenatis = new Npc({
  id: 6611,
  name: 'Venenatis',
  examine: 'A massive spider.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Venenatis',
  combatLevel: 225,
  stats: {
    hitpoints: 225,
    attack: 140,
    strength: 150,
    defence: 130,
    magic: 60,
    ranged: 60,
  },
  aggressiveStats: {
    attackBonus: 100,
    strengthBonus: 110,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 30, slash: 40, crush: 25 },
    magic: { bonus: 15, elementalWeakness: 'None' },
    ranged: { light: 35, standard: 35, heavy: 35 },
  },
  combat: {
    maxHit: 40,
    attackSpeed: 5,
    respawnTime: 0,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Melee'],
    isPoisonous: true,
    hasWeaponVenom: false,
    weaknesses: [],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: true,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Wilderness'],
  drops: [
    new NpcDrop('Bones', 1, 'Always'),
  ],
  trivia: [
    'Venenatis is a massive poisonous spider of the Wilderness.',
    'She is the ultimate arachnid predator.',
    'This creature does not respawn once defeated.',
  ],
});

export default venenatis;
