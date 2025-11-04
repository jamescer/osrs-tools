import { Skill } from '../../account/Skill';
import { QuestRequirement, Requirement, RequirementType } from '../../Requirement';
import { Quest, QuestStatus } from '../Quest';
const cooking = Skill.Cooking;
import { QuestDifficulty, QuestLength } from '../enums';
const CookAssistant: Quest = {
  description: 'Help the cook in Lumbridge Castle by gathering ingredients for his cake.',
  difficulty: QuestDifficulty.Novice,
  id: 1,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  age: 'Fifth Age',
  name: "Cook's Assistant",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    /**todo fix this */
  ],
  recommendedSkills: {},
  series: 'None',
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
  startLocation: 'Lumbridge Castle kitchen',

  shortName: "Cook's Assistant",
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

export default CookAssistant;
