import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RumDeal: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Rum Deal',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Zogre Flesh Eaters'),
    new LevelRequirement('Crafting', 42, false),
    new LevelRequirement('Fishing', 50, false),
    new LevelRequirement('Farming', 40, false),
    new LevelRequirement('Prayer', 47, false),
    new LevelRequirement('Slayer', 42, false),
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

  shortName: 'rumDeal',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Rum_Deal',
};

export default RumDeal;
