import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const TheAscentOfArceuus: Quest = {
  id: 0,
  name: 'The Ascent of Arceuus',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theAscentOfArceuus',
  url: 'https://oldschool.runescape.wiki/w/The_Ascent_of_Arceuus',
  series: 'Great Kourend',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
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

export default TheAscentOfArceuus;
