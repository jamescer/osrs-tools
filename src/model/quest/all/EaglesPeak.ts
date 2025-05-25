import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const EaglesPeak: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Eagles' Peak",
  members: true,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [], // Skill: Hunter 27
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "eaglesPeak",
  url: 'https://oldschool.runescape.wiki/w/Eagles%27_Peak',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Hunter: 2500 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default EaglesPeak;
