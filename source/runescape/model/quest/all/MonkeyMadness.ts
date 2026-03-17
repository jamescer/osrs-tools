import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MonkeyMadness: Quest = {
  age: 'Fifth Age',
  description: 'Escape a quest-time problem on Ape Atoll and find a way home while dealing with mysterious forces.',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Monkey Madness',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 60 },
  requirements: [
    new QuestRequirement('The Grand Tree'),
    new QuestRequirement('Tree Gnome Village'),
    new LevelRequirement('Attack', 40, false),
    new LevelRequirement('Defence', 40, false),
    new LevelRequirement('Strength', 40, false),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 10000, skill: 'Strength' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [
      {
        description: 'Access to Ape Atoll',
        url: 'https://oldschool.runescape.wiki/w/Ape_Atoll',
      },
      {
        description: 'Ability to equip the Monkey Madness staff',
      },
    ],
  },
  series: 'Gnome',
  shortName: 'monkeyMadness',

  startLocation: 'Gnome Stronghold, northeast of Ardougne',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the Gnome Stronghold and speak to the glider master.',
    'Board the glider to Ape Atoll.',
    'Discover that the jungle is inhabited by monkey people.',
    'Gather items and navigate through the island.',
    'Find a way to escape the curse affecting the monkeys.',
    'Return to the glider and complete the journey home.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Monkey_Madness',
};

export default MonkeyMadness;
