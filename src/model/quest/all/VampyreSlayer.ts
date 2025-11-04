import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const VampyreSlayer: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Medium,
  members: false,
  miniquest: false,
  name: 'Vampyre Slayer',
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
  shortName: 'vampyreSlayer',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Vampyre_Slayer',
};

export default VampyreSlayer;
