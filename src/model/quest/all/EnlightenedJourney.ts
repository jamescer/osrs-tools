import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EnlightenedJourney: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Enlightened Journey',
  // Skills: quest 20, Firemaking 20, Farming 30, Crafting 36
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
  series: null,
  shortName: 'enlightenedJourney',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Enlightened_Journey',
};

export default EnlightenedJourney;
