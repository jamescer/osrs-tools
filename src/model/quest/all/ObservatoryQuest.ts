import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const ObservatoryQuest: Quest = {
  id: 0,
  name: 'Observatory Quest',
  members: true,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'observatoryQuest',
  url: 'https://oldschool.runescape.wiki/w/Observatory_Quest',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium',
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

export default ObservatoryQuest;
