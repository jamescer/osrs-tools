import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const RumDeal: Quest = {
  id: 0,
  name: 'Rum Deal',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Medium,
  requirements: [
    new QuestRequirement('Zogre Flesh Eaters'),
    new LevelRequirement('Crafting', 42, false),
    new LevelRequirement('Fishing', 50, false),
    new LevelRequirement('Farming', 40, false),
    new LevelRequirement('Prayer', 47, false),
    new LevelRequirement('Slayer', 42, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'rumDeal',
  url: 'https://oldschool.runescape.wiki/w/Rum_Deal',
  series: 'Pirate',
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

export default RumDeal;
