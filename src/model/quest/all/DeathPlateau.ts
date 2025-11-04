import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeathPlateau: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Death Plateau',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 3000, skill: 'Attack' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Troll',
  shortName: 'deathPlateau',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Death_Plateau',
};

export default DeathPlateau;
