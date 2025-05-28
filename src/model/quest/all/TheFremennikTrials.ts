import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const TheFremennikTrials: Quest = {
  id: 0,
  name: 'The Fremennik Trials',
  members: true,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theFremennikTrials',
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Trials',
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
    questPoints: 3,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheFremennikTrials;
