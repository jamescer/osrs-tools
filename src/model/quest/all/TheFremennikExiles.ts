import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheFremennikExiles: Quest = {
  id: 0,
  name: 'The Fremennik Exiles',
  members: true,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [
    new QuestRequirement('The Fremennik Isles'),
    new LevelRequirement('Crafting', 25, false),
    new LevelRequirement('Runecraft', 40, false),
    new LevelRequirement('Slayer', 40, false),
    new LevelRequirement('Smithing', 30, false),
    new LevelRequirement('Defence', 60, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theFremennikExiles',
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Exiles',
  series: 'Fremennik',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Long',
  officialAge: '',
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

export default TheFremennikExiles;
