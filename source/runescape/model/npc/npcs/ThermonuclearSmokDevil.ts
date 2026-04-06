import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

/**
 * Thermonuclear Smoke Devil
 * A massive demonic smoke beast from the Smoke Dungeon, the ultimate boss of the smoke realm.
 * Wiki: https://oldschool.runescape.wiki/w/Thermonuclear_Smoke_Devil
 */
export const thermonuclearSmokDevil = new Npc({
  id: 7299,
  name: 'Thermonuclear smoke devil',
  examine: 'A massive demonic smoke beast.',
  members: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Thermonuclear_Smoke_Devil',
  combatLevel: 301,
  stats: {
    hitpoints: 500,
    attack: 220,
    strength: 240,
    defence: 200,
    magic: 150,
    ranged: 100,
  },
  aggressiveStats: {
    attackBonus: 150,
    strengthBonus: 170,
    magicStrengthBonus: 100,
    rangedStrengthBonus: 0,
  },
  defences: {
    melee: { stab: 50, slash: 60, crush: 45 },
    magic: { bonus: 40, elementalWeakness: 'Fire' },
    ranged: { light: 55, standard: 55, heavy: 55 },
  },
  combat: {
    maxHit: 60,
    attackSpeed: 5,
    respawnTime: 0,
    isAggressive: true,
    isAttackable: true,
    attackStyles: ['Magic', 'Melee'],
    isPoisonous: false,
    hasWeaponVenom: false,
    weaknesses: ['Fire'],
  },
  immunities: {
    canBePoison: true,
    isPoisonous: false,
    canBeVenom: true,
    canBeCannoned: true,
    canBeThralled: true,
  },
  locations: ['Smoke Dungeon'],
  drops: [
    new NpcDrop('Smoke Runes', [10, 20], 'Always'),
    new NpcDrop('Bones', 1, 'Always'),
    new NpcDrop('Coins', [1000, 2000], 'Always'),
    new NpcDrop('Staff Of The Eternal', 1, '1/512'),
    new NpcDrop('Eternal Flame', 1, '1/512'),
  ],
  trivia: [
    'The Thermonuclear Smoke Devil is one of the most dangerous creatures.',
    'It is the ultimate boss of the smoke realm.',
    'This creature does not respawn once defeated.',
  ],
});

export default thermonuclearSmokDevil;
