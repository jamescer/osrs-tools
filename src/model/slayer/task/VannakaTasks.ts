import {
  CombatLevelRequirement,
  QuestRequirement,
  SlayerLevelRequirement,
} from '../../Requirement';
import { Task } from '../Task';

const abby_spectres = new Task(
  'Aberrant spectres',
  40,
  90,
  [
    new SlayerLevelRequirement(60),
    new CombatLevelRequirement(65),
    new QuestRequirement('Priest in Peril'),
  ],
  200,
  250,
  ['Deviant spectres'],
  8
);
export const VannakaTasks: Task[] = [
  abby_spectres,
  new Task(
    'Abyssal demons',
    40,
    90,
    [
      new SlayerLevelRequirement(85),
      new CombatLevelRequirement(85),
      new QuestRequirement('Priest in Peril'),
      new QuestRequirement('Fairytale II - Cure a Queen'),
    ],
    200,
    250,
    ['Abyssal Sire'],
    5
  ),
  new Task(
    'Ankou',
    25,
    35,
    [new CombatLevelRequirement(40)],
    91,
    150,
    ['Dark Ankou'],
    7
  ),
  new Task(
    'Basilisks',
    40,
    90,
    [
      new SlayerLevelRequirement(40),
      new CombatLevelRequirement(40),
      new CombatLevelRequirement(20), // Defense requirement
    ],
    200,
    250,
    ['Basilisk Knight'],
    8
  ),
  new Task(
    'Bloodveld',
    40,
    90,
    [
      new SlayerLevelRequirement(50),
      new CombatLevelRequirement(50),
      new QuestRequirement('Priest in Peril'),
    ],
    200,
    250,
    ['Mutated Bloodveld'],
    8
  ),
  new Task(
    'Blue dragons',
    40,
    90,
    [
      new CombatLevelRequirement(65),
      new QuestRequirement('Dragon Slayer I (partial completion)'),
    ],
    null,
    null,
    ['Baby blue dragons', 'Brutal blue dragons', 'Vorkath'],
    7
  ),
  new Task(
    'Brine rats',
    40,
    90,
    [
      new SlayerLevelRequirement(47),
      new CombatLevelRequirement(45),
      new QuestRequirement("Olaf's Quest (partial completion)"),
    ],
    null,
    null,
    [],
    7
  ),
  new Task(
    'Cockatrice',
    40,
    90,
    [
      new SlayerLevelRequirement(25),
      new CombatLevelRequirement(25),
      new CombatLevelRequirement(20), // Defense requirement
    ],
    null,
    null,
    ['Moonlight Cockatrice'],
    8
  ),
  new Task(
    'Crabs',
    40,
    90,
    [new SlayerLevelRequirement(1)],
    null,
    null,
    [
      'Ammonite crabs',
      'Frost crabs',
      'Rock crabs',
      'Sand crabs',
      'Swamp crabs',
    ],
    8
  ),
  new Task(
    'Crocodiles',
    40,
    90,
    [new CombatLevelRequirement(50)],
    null,
    null,
    [],
    6
  ),
  new Task(
    'Dagannoth',
    40,
    90,
    [
      new CombatLevelRequirement(75),
      new QuestRequirement('Horror from the Deep'),
    ],
    null,
    null,
    ['Dagannoth spawn', 'Dagannoth fledgeling', 'Dagannoth Kings'],
    7
  ),
  new Task(
    'Dust devils',
    40,
    90,
    [
      new SlayerLevelRequirement(65),
      new CombatLevelRequirement(70),
      new QuestRequirement('Desert Treasure I (partial completion)'),
    ],
    200,
    250,
    [],
    8
  ),
  new Task(
    'Elves',
    30,
    70,
    [
      new CombatLevelRequirement(70),
      new QuestRequirement('Regicide (partial completion)'),
    ],
    null,
    null,
    ['Elf warrior', 'Mourner (Mourner Headquarters)'],
    7
  ),
  new Task(
    'Fever spiders',
    30,
    90,
    [
      new SlayerLevelRequirement(42),
      new CombatLevelRequirement(40),
      new QuestRequirement('Rum Deal (partial completion)'),
    ],
    null,
    null,
    [],
    7
  ),
  new Task(
    'Fire giants',
    40,
    90,
    [new CombatLevelRequirement(65)],
    null,
    null,
    [],
    7
  ),
  new Task(
    'Gargoyles',
    40,
    90,
    [
      new SlayerLevelRequirement(75),
      new CombatLevelRequirement(80),
      new QuestRequirement('Priest in Peril'),
    ],
    200,
    250,
    ['Grotesque Guardians'],
    5
  ),
  new Task(
    'Ghouls',
    10,
    40,
    [new CombatLevelRequirement(25), new QuestRequirement('Priest in Peril')],
    null,
    null,
    [],
    7
  ),
  // Add more tasks here following the same structure...
];
