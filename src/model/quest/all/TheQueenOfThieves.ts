import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const TheQueenOfThieves: Quest = {
  id: 0,
  name: 'The Queen of Thieves',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new LevelRequirement('Thieving', 20, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theQueenOfThieves',
  url: 'https://oldschool.runescape.wiki/w/The_Queen_of_Thieves',
  series: 'Great Kourend',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheQueenOfThieves;
