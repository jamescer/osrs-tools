import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const ASoulsBane: Quest = {
  id: 0, // Assign a unique ID if available
  name: "A Soul's Bane",
  members: true,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [], // No skill or quest requirements
  questPoints: 1,
  startLocation: '', // Not specified in JSON
  description: '', // Not specified in JSON
  steps: [], // Not specified in JSON
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "aSoulsBane",
  url: 'https://oldschool.runescape.wiki/w/A_Soul%27s_Bane',
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
    experience: { Defence: 500, Hitpoints: 500 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default ASoulsBane;
