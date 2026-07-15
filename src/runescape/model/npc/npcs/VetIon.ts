import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Vet'ion
 * A demonic skeleton boss of the Wilderness, one of the most powerful creatures.
 * Wiki: https://oldschool.runescape.wiki/w/Vet'ion
 */
export const vetIon = new Npc({
  aggressiveStats: {
    attackBonus: 160,
    magicStrengthBonus: 80,
    rangedStrengthBonus: 0,
    strengthBonus: 180,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Magic', 'Melee'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 50,
    respawnTime: 0,
    weaknesses: ['Crush'],
  },
  combatLevel: 454,
  defences: {
    magic: { bonus: 30, elementalWeakness: 'None' },
    melee: { crush: 55, slash: 60, stab: 50 },
    ranged: { heavy: 60, light: 60, standard: 60 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A demonic skeleton.',
  id: 6612,
  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: true,
    canBeVenom: false,
    isPoisonous: false,
  },
  locations: ['Wilderness'],
  members: true,
  name: "Vet'ion",
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Vet'ion",
  stats: {
    attack: 200,
    defence: 180,
    hitpoints: 300,
    magic: 120,
    ranged: 100,
    strength: 220,
  },
  trivia: [
    "Vet'ion is one of the most powerful bosses in the Wilderness.",
    'This demonic skeleton does not respawn once defeated.',
    "Fighting Vet'ion is an extreme test of combat skills.",
  ],
});

export default vetIon;
