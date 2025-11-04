import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CooksAssistant: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: false,

  miniquest: false,
  // Assign a unique ID if available
  name: "Cook's Assistant",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 300, skill: 'Cooking' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'cooksAssistant',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
};

export default CooksAssistant;
