import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CooksAssistant: Quest = {
  age: 'Fifth Age',
  description: 'Help the cook in Lumbridge Castle by gathering ingredients for his cake.',
  difficulty: QuestDifficulty.Novice,
  id: 19,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: "Cook's Assistant",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
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
  series: null,
  shortName: 'cooksAssistant',

  startLocation: 'Lumbridge Castle kitchen',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
};

export default CooksAssistant;
