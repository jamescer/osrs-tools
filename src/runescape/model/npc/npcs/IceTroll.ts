import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Ice Troll
 * A troll adapted to icy environments, found in Fremennik Isles.
 * Wiki: https://oldschool.runescape.wiki/w/Ice_troll
 */
export const iceTroll = new Npc({
  aggressiveStats: {
    attackBonus: 65,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 70,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Crush'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 30,
    respawnTime: 30,
    weaknesses: ['Fire'],
  },
  combatLevel: 122,
  defences: {
    magic: { bonus: -25, elementalWeakness: 'Fire' },
    melee: { crush: 15, slash: 10, stab: 10 },
    ranged: { heavy: 5, light: 5, standard: 5 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A troll from the ice.',
  id: 4677,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ['Fremennik Isles'],
  members: true,
  name: 'Ice Troll',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ice_troll',
  stats: {
    attack: 80,
    defence: 80,
    hitpoints: 100,
    magic: 40,
    ranged: 40,
    strength: 85,
  },
  trivia: [
    'Ice Trolls are found in the frozen Fremennik Isles.',
    'They are weak to fire-based attacks due to their icy nature.',
    'Ice Trolls are significantly stronger than Mountain Trolls.',
  ],
});

export default iceTroll;
