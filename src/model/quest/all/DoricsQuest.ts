import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DoricsQuest: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: false,

  miniquest: false,

  // Assign a unique ID if available
  name: "Doric's Quest",
  // Skill: Mining 15
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 1300, skill: 'Mining' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'doricsQuest',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Doric%27s_Quest',
};

export default DoricsQuest;
