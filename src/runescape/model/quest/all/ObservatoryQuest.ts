import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ObservatoryQuest: Quest = {
  age: 'Fifth Age',
  description: 'Help the Professor at the Observatory repair the telescope so he can resume his astronomical research.',
  difficulty: QuestDifficulty.Novice,
  id: 76,
  length: QuestLength.ShortMedium,
  members: false,
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

  startLocation: 'Observatory Professor, Observatory',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Observatory_Quest',
};

export default ObservatoryQuest;
