import { Skill } from '../../account/Skill';
import { Quest, QuestStatus } from '../Quest';
import {
  QuestRequirement,
  Requirement,
  RequirementType,
} from '../../Requirement';
const cooking = Skill.Cooking;

const CookAssistant: Quest = {
  id: 1,
  name: "Cook's Assistant",
  members: false,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [
    /**todo fix this */
  ],
  questPoints: 1,
  startLocation: 'Lumbridge Castle kitchen',
  description:
    'Help the cook in Lumbridge Castle by gathering ingredients for his cake.',
  steps: [
    'Speak to the Cook in Lumbridge Castle kitchen.',
    'Collect a bucket of milk.',
    'Collect a pot of flour.',
    'Collect an egg.',
    'Return to the Cook with all the ingredients.',
  ],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "Cook's Assistant",
  url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
  series: 'None',
  age: 'Fifth Age',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Very Short',
  officialAge: 'Fifth Age',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Cooking: 300 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: ["Ability to use the Cook's range"],
  },
};

export default CookAssistant;
