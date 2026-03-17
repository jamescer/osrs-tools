import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGrandTree: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'The Grand Tree',
  questPoints: 3,
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
    questPoints: 3,
    unlocks: [],
  },
  series: 'Gnome',
  shortName: 'theGrandTree',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Grand_Tree',
};

export default TheGrandTree;
