import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const OneSmallFavour: Quest = {
  id: 0,
  name: 'One Small Favour',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.VeryLong,
  requirements: [
    new QuestRequirement('Rune Mysteries'),
    new QuestRequirement('Shilo Village'),
    new LevelRequirement('Agility', 18, false),
    new LevelRequirement('Crafting', 25, false),
    new LevelRequirement('Herblore', 30, false),
    new LevelRequirement('Smithing', 30, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'oneSmallFavour',
  url: 'https://oldschool.runescape.wiki/w/One_Small_Favour',
  series: null,
  age: '',

  recommendedItems: [],
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

export default OneSmallFavour;
