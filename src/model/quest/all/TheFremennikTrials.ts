import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFremennikTrials: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'The Fremennik Trials',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Fremennik',
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
  startLocation: '',

  shortName: 'theFremennikTrials',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Trials',
};

export default TheFremennikTrials;
