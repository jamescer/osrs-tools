import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const CooksAssistant: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Cook's Assistant",
  members: false,
  difficulty: 'Novice',
  length: 'Short (<5 minutes)',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "cooksAssistant",
  url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short (<5 minutes)',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Cooking: 300 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default CooksAssistant;
