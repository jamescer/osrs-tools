import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ObservatoryQuest: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Observatory Quest',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
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
  shortName: 'observatoryQuest',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Observatory_Quest',
};

export default ObservatoryQuest;
