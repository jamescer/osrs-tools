import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Kalphite Guardian
 * A strong kalphite warrior defending the hive, an insectoid knight.
 * Wiki: https://oldschool.runescape.wiki/w/Kalphite_guardian
 */
export const kalphiteGuardian = new Npc({
  aggressiveStats: {
    attackBonus: 50,
    magicStrengthBonus: 0,
    rangedStrengthBonus: 0,
    strengthBonus: 55,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Stab'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 20,
    respawnTime: 30,
    weaknesses: [],
  },
  combatLevel: 88,
  defences: {
    magic: { bonus: -10, elementalWeakness: 'None' },
    melee: { crush: 5, slash: 12, stab: 8 },
    ranged: { heavy: 5, light: 5, standard: 5 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A strong kalphite.',
  id: 955,
  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: false,
    canBeVenom: false,
    isPoisonous: false,
  },
  locations: ['Kalphite Cave'],
  members: true,
  name: 'Kalphite guardian',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Kalphite_guardian',
  stats: {
    attack: 65,
    defence: 65,
    hitpoints: 75,
    magic: 20,
    ranged: 20,
    strength: 70,
  },
  trivia: [
    'Kalphite Guardians are strong warriors of the hive.',
    'They serve as protectors of the Kalphite Queen.',
    'These insectoid creatures are immune to cannon attacks.',
  ],
});

export default kalphiteGuardian;
