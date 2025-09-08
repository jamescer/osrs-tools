import { Quest } from '../types';
import { QuestDifficulty, QuestLength, QuestStatus } from '../enums';

const TribalTotem: Quest = {
  id: 0,
  name: 'Tribal Totem',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'tribalTotem',
  url: 'https://oldschool.runescape.wiki/w/Tribal_Totem',
  series: null,
  age: '',

  recommendations: [],
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

export default TribalTotem;
