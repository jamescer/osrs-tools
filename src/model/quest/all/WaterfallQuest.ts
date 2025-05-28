import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const WaterfallQuest: Quest = {
  id: 0,
  name: 'Waterfall Quest',
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
  shortName: 'waterfallQuest',
  url: 'https://oldschool.runescape.wiki/w/Waterfall_Quest',
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

export default WaterfallQuest;
