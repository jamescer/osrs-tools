import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

export const manDrops: NpcDrop[] = [
  new NpcDrop('Bones', 1, 'Always'),
  new NpcDrop('Coins', 3, '1/3.368'),
  new NpcDrop('Coins', 10, '23/128'),
  new NpcDrop('Coins', 5, '9/128'),
  new NpcDrop('Coins', 15, '4/128'),
  new NpcDrop('Coins', 25, '1/128'),
  new NpcDrop('Bronze med helm', 1, '1/64'),
  new NpcDrop('Iron dagger', 1, '1/128'),
  new NpcDrop('Bronze bolts', [2, 12], '22/128'),
  new NpcDrop('Bronze arrow', 7, '3/128'),
  new NpcDrop('Earth rune', 4, '2/128'),
  new NpcDrop('Fire rune', 6, '2/128'),
  new NpcDrop('Mind rune', 9, '2/128'),
  new NpcDrop('Chaos rune', 2, '1/128'),
  new NpcDrop('Fishing bait', 1, '5/128'),
  new NpcDrop('Copper ore', 1, '2/128'),
  new NpcDrop('Earth talisman', 1, '2/128'),
  new NpcDrop('Cabbage', 1, '1/128'),
  new NpcDrop('Clue scroll (beginner)', 1, '1/90'),
  new NpcDrop('Clue scroll (easy)', 1, '1/128'),
  // Herbs drop table is rolled separately, not included here for brevity
];

export const manLocations: string[] = [
  'Lumbridge',
  'Varrock',
  'Falador',
  'Edgeville',
  'Draynor Village',
  'Al Kharid',
  'Ardougne',
  'Rimmington',
  'Catherby',

  "Seers' Village",
  'Yanille',
  'Etceteria',
  'Miscellania',
  'Port Sarim',
  'Ice Mountain',
  'Kingstown',
  'Hosidius',
  'Port Piscarilius',
  'Musa Point',
  'Fishing Guild',
  'Blue Moon Inn',
  'Jolly Boar Inn',
  'Forgotten Cemetery',
  "West of Watson's house",
  'Shayzien Styles',
];

export const Man = new Npc(
  1,
  'Man',
  "One of Gielinor's many citizens.",
  false, // members
  2, // combat level
  'https://oldschool.runescape.wiki/w/Man',
  7, // hitpoints
  false, // aggressive
  true, // attackable
  false, // canPoison
  false, // poisonous
  false, // canCannon
  false, // canThrall
  false, // canVenom
  ['melee'], // attackStyle
  1, // maxHit
  4, // attackSpeed (4 ticks = 2.4s)
  15, // respawnTime (15s)
  manLocations,
  manDrops,
  ['Crush'] // weaknesses
);
