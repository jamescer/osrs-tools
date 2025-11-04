import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGreatBrainRobbery: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'The Great Brain Robbery',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Cabin Fever'),
    new LevelRequirement('Crafting', 16, false),
    new LevelRequirement('Construction', 30, false),
    new LevelRequirement('Prayer', 50, false),
    new LevelRequirement('Slayer', 30, false),
  ],
  recommendedSkills: {},
  series: 'Pirate',
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'theGreatBrainRobbery',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Great_Brain_Robbery',
};

export default TheGreatBrainRobbery;
