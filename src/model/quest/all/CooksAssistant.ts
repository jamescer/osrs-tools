import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CooksAssistant: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: false,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: "Cook's Assistant",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [{ amount: 300, skill: Skill.Cooking }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'cooksAssistant',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
};

export default CooksAssistant;
