import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheQueenOfThieves: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: '',
  name: 'The Queen of Thieves',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new LevelRequirement('Thieving', 20, false),
  ],
  recommendedSkills: {},
  series: 'Great Kourend',
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'theQueenOfThieves',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Queen_of_Thieves',
};

export default TheQueenOfThieves;
