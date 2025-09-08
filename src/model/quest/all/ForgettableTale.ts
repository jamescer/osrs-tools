import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const ForgettableTale: Quest = {
  id: 0,
  name: 'Forgettable Tale...',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'forgettableTale',
  url: 'https://oldschool.runescape.wiki/w/Forgettable_Tale...',
  series: 'Rise of the Red Axe',
  age: '',

  recommendations: [],
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

export default ForgettableTale;
