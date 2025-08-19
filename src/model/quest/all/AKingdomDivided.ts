import { Quest } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength, QuestStatus } from '../enums';
const AKingdomDivided: Quest = {
  id: 0,
  name: 'A Kingdom Divided',
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.Long,
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new QuestRequirement('The Depths of Despair'),
    new QuestRequirement('The Queen of Thieves'),
    new QuestRequirement('The Ascent of Arceuus'),
    new QuestRequirement('The Forsaken Tower'),
    new LevelRequirement('Thieving', 54, false),
    new LevelRequirement('Agility', 52, false),
    new LevelRequirement('Woodcutting', 52, false),
    new LevelRequirement('Magic', 50, false),
    new LevelRequirement('Mining', 42, false),
    new LevelRequirement('Smithing', 42, false),
    new LevelRequirement('Farming', 35, false),
    new LevelRequirement('Crafting', 38, false),
    new LevelRequirement('Hunter', 42, false),
    new LevelRequirement('Herblore', 45, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aKingdomDivided',
  url: 'https://oldschool.runescape.wiki/w/A_Kingdom_Divided',
  series: 'Great Kourend',
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

export default AKingdomDivided;
