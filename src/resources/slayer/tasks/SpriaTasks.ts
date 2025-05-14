import {
  CombatLevelRequirement,
  QuestRequirement,
  SlayerLevelRequirement,
} from '../../../model/Requirement';
import { Task } from '../../../model/slayer/Task';

export const SpriaTasks: Task[] = [
  new Task(
    'Banshees',
    15,
    30,
    [
      new CombatLevelRequirement(15),
      new CombatLevelRequirement(20),
      new QuestRequirement('Priest in Peril'),
    ],
    null,
    null,
    ['Twisted Banshee'],
    8
  ),
  new Task(
    'Bats',
    15,
    30,
    [new CombatLevelRequirement(5)],
    null,
    null,
    ['Giant bat', 'Albino bat', 'Death wing'],
    7
  ),
  new Task(
    'Bears',
    10,
    20,
    [new CombatLevelRequirement(13)],
    null,
    null,
    [
      'Grizzly bear cub',
      'Bear cub',
      'Grizzly bear',
      'Reanimated bear',
      'Callisto',
      'Artio',
    ],
    7
  ),
  new Task(
    'Birds',
    15,
    30,
    [],
    null,
    null,
    [
      'Chicken',
      'Mounted terrorbird',
      'Terrorbird',
      'Rooster',
      'Chompy bird',
      'Seagull',
      'Penguin',
      'Duck',
      'Duckling',
    ],
    6
  ),
  new Task(
    'Cave bugs',
    10,
    30,
    [new SlayerLevelRequirement(7)],
    null,
    null,
    [],
    8
  ),
  new Task(
    'Cave crawlers',
    15,
    30,
    [new SlayerLevelRequirement(10), new CombatLevelRequirement(10)],
    null,
    null,
    [],
    8
  ),
  new Task(
    'Cave slime',
    10,
    20,
    [new SlayerLevelRequirement(17), new CombatLevelRequirement(15)],
    null,
    null,
    [],
    8
  ),
  new Task(
    'Cows',
    15,
    30,
    [new CombatLevelRequirement(5)],
    null,
    null,
    ['Buffalo', 'Cow calf', 'Undead cow'],
    8
  ),
  new Task(
    'Crawling Hands',
    15,
    30,
    [new SlayerLevelRequirement(5), new QuestRequirement('Priest in Peril')],
    null,
    null,
    [],
    8
  ),
  new Task(
    'Dogs',
    15,
    30,
    [new CombatLevelRequirement(15)],
    null,
    null,
    ['Jackal', 'Guard dog', 'Wild dog', 'Reanimated dog'],
    7
  ),
  new Task(
    'Dwarves',
    10,
    25,
    [new CombatLevelRequirement(6)],
    null,
    null,
    ['Black Guard', 'Chaos Dwarf', 'Dwarf gang member'],
    7
  ),
  new Task(
    'Ghosts',
    15,
    30,
    [new CombatLevelRequirement(13)],
    null,
    null,
    ['Tortured soul', 'Forgotten Soul', 'Revenants', 'Death wing'],
    7
  ),
  new Task(
    'Goblins',
    15,
    30,
    [],
    null,
    null,
    [
      'Cave goblin guards',
      'Sergeant Strongstack',
      'Sergeant Steelwill',
      'Sergeant Grimspike',
    ],
    7
  ),
  new Task(
    'Icefiends',
    15,
    20,
    [new CombatLevelRequirement(20)],
    null,
    null,
    [],
    8
  ),
  new Task(
    'Kalphites',
    15,
    30,
    [new CombatLevelRequirement(15)],
    null,
    null,
    [
      'Kalphite worker',
      'Kalphite soldier',
      'Kalphite guardian',
      'Kalphite Queen',
    ],
    6
  ),
  new Task(
    'Lizards',
    15,
    30,
    [new SlayerLevelRequirement(22)],
    null,
    null,
    [
      'Small Lizard',
      'Desert Lizard',
      'Sulphur Lizard (Slayer 44)',
      'Grimy Lizard (Slayer 44)',
    ],
    8
  ),
  new Task(
    'Minotaurs',
    10,
    20,
    [new CombatLevelRequirement(7)],
    null,
    null,
    [],
    7
  ),
  new Task(
    'Monkeys',
    15,
    30,
    [],
    null,
    null,
    [
      'Karamjan Monkey',
      'Monkey Guard',
      'Monkey Archer',
      'Monkey Zombie',
      'Demonic Gorilla',
      'Tortured Gorilla',
    ],
    6
  ),
  new Task(
    'Rats',
    15,
    30,
    [],
    null,
    null,
    [
      'Giant rat',
      'Dungeon rat',
      'Crypt rat',
      'Brine rat',
      'Hell-Rat Behemoth',
      'Giant crypt rat',
      'Scurrius',
    ],
    7
  ),
  new Task(
    'Scorpions',
    15,
    30,
    [new CombatLevelRequirement(7)],
    null,
    null,
    [
      'King Scorpion',
      'Poison Scorpion',
      'Pit Scorpion',
      'Scorpia',
      'Lobstrosity',
      'Reanimated scorpion',
      "Scorpia's offspring",
      "Scorpia's guardian",
    ],
    7
  ),
  new Task(
    'Skeletons',
    15,
    30,
    [new CombatLevelRequirement(15)],
    null,
    null,
    [
      'Skeleton mage',
      'Skeletons in the Stronghold of Security and Ancient Cavern',
      "Vet'ion",
      'Skogre',
      'Shayzien Crypts Skeletons',
      'Skeleton fremennik',
      "Calvar'ion",
    ],
    7
  ),
  new Task(
    'Sourhogs',
    15,
    25,
    [new QuestRequirement('A Porcine of Interest')],
    null,
    null,
    [],
    6
  ),
  new Task(
    'Spiders',
    15,
    30,
    [],
    null,
    null,
    [
      'Giant spider',
      'Shadow spider',
      'Giant crypt spider',
      'Sarachnis',
      'Temple Spider',
      'Venenatis',
      'Spindel',
    ],
    6
  ),
  new Task(
    'Wolves',
    15,
    30,
    [new CombatLevelRequirement(20)],
    null,
    null,
    ['Big Wolf', 'Desert Wolf', 'Ice wolf', 'Jungle wolf', 'White wolf'],
    7
  ),
  new Task(
    'Zombies',
    15,
    30,
    [new CombatLevelRequirement(10)],
    null,
    null,
    [
      'Monkey Zombie',
      'Undead chicken',
      'Undead cow',
      'Undead Druid',
      'Undead one',
      'Zombie rat',
      'Zogre',
      'Vorkath',
    ],
    7
  ),
];
