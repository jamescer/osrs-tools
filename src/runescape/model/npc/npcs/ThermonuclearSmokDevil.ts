import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Thermonuclear Smoke Devil
 * A massive demonic smoke beast from the Smoke Dungeon, the ultimate boss of the smoke realm.
 * Wiki: https://oldschool.runescape.wiki/w/Thermonuclear_Smoke_Devil
 */
export const thermonuclearSmokDevil = new Npc({
  aggressiveStats: {
    attackBonus: 150,
    magicStrengthBonus: 100,
    rangedStrengthBonus: 0,
    strengthBonus: 170,
  },
  combat: {
    attackSpeed: 5,
    attackStyles: ['Magic', 'Melee'],
    hasWeaponVenom: false,
    isAggressive: true,
    isAttackable: true,
    isPoisonous: false,
    maxHit: 60,
    respawnTime: 0,
    weaknesses: ['Fire'],
  },
  combatLevel: 301,
  defences: {
    magic: { bonus: 40, elementalWeakness: 'Fire' },
    melee: { crush: 45, slash: 60, stab: 50 },
    ranged: { heavy: 55, light: 55, standard: 55 },
  },
  drops: [
    new NpcDrop('Smoke Runes', [10, 20], 'Always'),
    new NpcDrop('Bones', 1, 'Always'),
    new NpcDrop('Coins', [1000, 2000], 'Always'),
    new NpcDrop('Staff Of The Eternal', 1, '1/512'),
    new NpcDrop('Eternal Flame', 1, '1/512'),
  ],
  examine: 'A massive demonic smoke beast.',
  id: 7299,
  immunities: {
    canBeCannoned: true,
    canBePoison: true,
    canBeThralled: true,
    canBeVenom: true,
    isPoisonous: false,
  },
  locations: ['Smoke Dungeon'],
  members: true,
  name: 'Thermonuclear smoke devil',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Thermonuclear_Smoke_Devil',
  stats: {
    attack: 220,
    defence: 200,
    hitpoints: 500,
    magic: 150,
    ranged: 100,
    strength: 240,
  },
  trivia: [
    'The Thermonuclear Smoke Devil is one of the most dangerous creatures.',
    'It is the ultimate boss of the smoke realm.',
    'This creature does not respawn once defeated.',
  ],
});

export default thermonuclearSmokDevil;
