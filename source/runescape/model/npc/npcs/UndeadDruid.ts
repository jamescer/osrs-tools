import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Undead Druid
 * A corrupted druid found in the Catacombs, a fallen practitioner of nature magic.
 * Wiki: https://oldschool.runescape.wiki/w/Undead_Druid
 */
export const undeadDruid = new Npc({
  id: 1626,
  name: 'Undead Druid',
  examine: 'A corrupted druid.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Undead_Druid',
  combatLevel: 60,
  stats: {
    hitpoints: 50,
    attack: 40,
    strength: 38,
    defence: 45,
    magic: 55,
    ranged: 35,
  },
  aggressiveStats: {
    attackBonus: 30,
    strengthBonus: 28,
    magicStrengthBonus: 45,
    rangedStrengthBonus: 25,
  },
  defences: {
    melee: { stab: 8, slash: 10, crush: 6 },
    magic: { bonus: 20, elementalWeakness: 'Fire' },
    ranged: { light: 8, standard: 8, heavy: 8 },
  },
  combat: {
    maxHit: 18,
    attackSpeed: 5,
    respawnTime: 30,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Magic', 'Ranged'],
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
    'Undead Druids are corrupted practitioners of nature magic.',
    'They haunt the Catacombs spreading undead blight.',
    'These creatures are weak to fire-based attacks.',
  ],
});

export default undeadDruid;
