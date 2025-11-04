import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFremennikExiles: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'The Fremennik Exiles',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('The Fremennik Isles'),
    new LevelRequirement('Crafting', 25, false),
    new LevelRequirement('Runecraft', 40, false),
    new LevelRequirement('Slayer', 40, false),
    new LevelRequirement('Smithing', 30, false),
    new LevelRequirement('Defence', 60, false),
  ],
  recommendedSkills: {},
  series: 'Fremennik',
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

  shortName: 'theFremennikExiles',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Exiles',
};

export default TheFremennikExiles;
