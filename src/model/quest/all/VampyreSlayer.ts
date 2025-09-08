import { Quest, QuestStatus } from '../Quest';
import { QuestDifficulty, QuestLength } from '../enums';

const VampyreSlayer: Quest = {
  id: 0,
  name: 'Vampyre Slayer',
  members: false,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Medium,
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'vampyreSlayer',
  url: 'https://oldschool.runescape.wiki/w/Vampyre_Slayer',
  series: null,
  age: '',

  recommendations: [],
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

export default VampyreSlayer;
