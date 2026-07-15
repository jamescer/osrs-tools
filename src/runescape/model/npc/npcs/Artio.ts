import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Artio
 * A rare boss bear found in the Wilderness, one of the rarest creatures in the world.
 * Wiki: https://oldschool.runescape.wiki/w/Artio
 */
export const artio = new Npc({
  aggressiveStats: {
    attackBonus: 110,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 120,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Crush'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 40,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 225,
  defences: {
    magic: { bonus: 15, elementalWeakness: 'None' },
    melee: { crush: 30, slash: 45, stab: 35 },
    ranged: { heavy: 40, light: 40, standard: 40 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A rare boss bear.',
  id: 23185,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ['Wilderness'],
  members: true,
  name: 'Artio',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Artio',
  stats: {
    attack: 160,
    defence: 150,
    hitpoints: 350,
    magic: 60,
    ranged: 70,
    strength: 170,
  },
  trivia: [
    'Artio is one of the rarest creatures in the entire world.',
    'This bear is a powerful wilderness encounter.',
    'It is found hunting in the deepest parts of the Wilderness.',
  ],
});

export default artio;
