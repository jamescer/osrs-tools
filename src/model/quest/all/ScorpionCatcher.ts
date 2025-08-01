import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const ScorpionCatcher: Quest = {
  id: 0,
  name: 'Scorpion Catcher',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'scorpionCatcher',
  url: 'https://oldschool.runescape.wiki/w/Scorpion_Catcher',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
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

export default ScorpionCatcher;
