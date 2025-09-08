import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const EaglesPeak: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Eagles' Peak",
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Medium,
  requirements: [], // Skill: Hunter 27
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'eaglesPeak',
  url: 'https://oldschool.runescape.wiki/w/Eagles%27_Peak',
  series: null,
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: Skill.Hunter, amount: 2500 }],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default EaglesPeak;
