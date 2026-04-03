import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ForgettableTale: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 46,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Forgettable Tale...',
  questPoints: 1,
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
    questPoints: 1,
    unlocks: [],
  },
  series: 'Rise of the Red Axe',
  shortName: 'forgettableTale',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Forgettable_Tale...',
};

export default ForgettableTale;
