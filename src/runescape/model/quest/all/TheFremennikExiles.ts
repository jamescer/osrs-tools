import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFremennikExiles: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Master,
  id: 108,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'The Fremennik Exiles',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('The Fremennik Isles'),
    new LevelRequirement('Crafting', 25, false),
    new LevelRequirement('Runecraft', 40, false),
    new LevelRequirement('Slayer', 40, false),
    new LevelRequirement('Smithing', 30, false),
    new LevelRequirement('Defence', 60, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: 'Fremennik',
  shortName: 'theFremennikExiles',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Exiles',
};

export default TheFremennikExiles;
