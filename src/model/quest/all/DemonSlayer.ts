import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DemonSlayer: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: false,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Demon Slayer',
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
  series: null,
  shortName: 'demonSlayer',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Demon_Slayer',
};

export default DemonSlayer;
