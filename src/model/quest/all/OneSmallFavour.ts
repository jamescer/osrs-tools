import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const OneSmallFavour: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'One Small Favour',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Rune Mysteries'),
    new QuestRequirement('Shilo Village'),
    new LevelRequirement('Agility', 18, false),
    new LevelRequirement('Crafting', 25, false),
    new LevelRequirement('Herblore', 30, false),
    new LevelRequirement('Smithing', 30, false),
  ],
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
  series: null,
  shortName: 'oneSmallFavour',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/One_Small_Favour',
};

export default OneSmallFavour;
