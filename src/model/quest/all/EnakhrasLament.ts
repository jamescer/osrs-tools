import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EnakhrasLament: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: "Enakhra's Lament",
  // Skills: Crafting 50, Firemaking 45, Prayer 43, Magic 39, Mining 45
  questPoints: 2,
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
    questPoints: 2,
    unlocks: [],
  },
  series: 'Mahjarrat',
  shortName: 'enakhrasLament',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Enakhra%27s_Lament',
};

export default EnakhrasLament;
