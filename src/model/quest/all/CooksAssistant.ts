import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CooksAssistant: Quest = {
  age: 'Fifth Age',
  description: 'Help the cook in Lumbridge Castle by gathering ingredients for his cake.',
  difficulty: QuestDifficulty.Novice,
  id: 1,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: "Cook's Assistant",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    /**todo fix this */
  ],
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
  series: 'None',
  shortName: "Cook's Assistant",

  startLocation: 'Lumbridge Castle kitchen',
  status: QuestStatus.NotStarted,
  steps: [
    'Speak to the Cook in Lumbridge Castle kitchen.',
    'Collect a bucket of milk.',
    'Collect a pot of flour.',
    'Collect an egg.',
    'Return to the Cook with all the ingredients.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
};

export default CooksAssistant;
