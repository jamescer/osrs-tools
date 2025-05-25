import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const BetweenARock: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Between a Rock...",
  members: true,
  difficulty: 'Experienced',
  length: 'Medium - Long',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "betweenARock",
  url: 'https://oldschool.runescape.wiki/w/Between_a_Rock...',
  series: 'Rise of the Red Axe',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Defence: 5000, Mining: 5000, Smithing: 5000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default BetweenARock;
