import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Undead Druid
 * A corrupted druid found in the Catacombs, a fallen practitioner of nature magic.
 * Wiki: https://oldschool.runescape.wiki/w/Undead_Druid
 */
export const undeadDruid = new Npc({
  aggressiveStats: {
    attackBonus: 30,
    magicStrengthBonus: 45,
    rangedStrengthBonus: 25,
    strengthBonus: 28,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Magic', 'Ranged'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 18,
    respawnTime: 30,
    weaknesses: ['Fire'],
  },
  combatLevel: 60,
  defences: {
    magic: { bonus: 20, elementalWeakness: 'Fire' },
    melee: { crush: 6, slash: 10, stab: 8 },
    ranged: { heavy: 8, light: 8, standard: 8 },
  },
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: 'A corrupted druid.',
  id: 1626,
  immunities: {
    canBeCannoned: true,
    canBePoison: false,
    canBeThralled: true,
    canBeVenom: false,
    isPoisonous: false,
  },
  locations: ['Catacombs'],
  members: true,
  name: 'Undead Druid',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Undead_Druid',
  stats: {
    attack: 40,
    defence: 45,
    hitpoints: 50,
    magic: 55,
    ranged: 35,
    strength: 38,
  },
  trivia: [
    'Undead Druids are corrupted practitioners of nature magic.',
    'They haunt the Catacombs spreading undead blight.',
    'These creatures are weak to fire-based attacks.',
  ],
});

export default undeadDruid;
