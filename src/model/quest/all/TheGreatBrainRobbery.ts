import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const TheGreatBrainRobbery: Quest = {
  id: 0,
  name: 'The Great Brain Robbery',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Medium,
  requirements: [
    new QuestRequirement('Cabin Fever'),
    new LevelRequirement('Crafting', 16, false),
    new LevelRequirement('Construction', 30, false),
    new LevelRequirement('Prayer', 50, false),
    new LevelRequirement('Slayer', 30, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theGreatBrainRobbery',
  url: 'https://oldschool.runescape.wiki/w/The_Great_Brain_Robbery',
  series: 'Pirate',
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheGreatBrainRobbery;
