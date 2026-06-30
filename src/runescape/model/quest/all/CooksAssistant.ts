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
  series: 'None',
  shortName: "Cook's Assistant",

  startLocation: 'Lumbridge Castle kitchen',
  status: QuestStatus.NotStarted,
  steps: [
    'Speak to the Cook in Lumbridge Castle kitchen.',
    'Collect a bucket of milk from a dairy cow north of Lumbridge.',
    'Collect a pot of flour from the mill north of Lumbridge.',
    'Collect an egg from the chicken pen at Lumbridge Farms.',
    'Return all three ingredients to the Cook in Lumbridge Castle kitchen.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
};

export default CooksAssistant;
