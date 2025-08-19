import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const ASoulsBane: Quest = {
  id: 0, // Assign a unique ID if available
  name: "A Soul's Bane",
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Medium,
  requirements: [], // No skill or quest requirements
  questPoints: 1,
  startLocation: '', // Not specified in JSON
  description: '', // Not specified in JSON
  steps: [], // Not specified in JSON
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aSoulsBane',
  url: 'https://oldschool.runescape.wiki/w/A_Soul%27s_Bane',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Defence', amount: 500 },
      { skill: 'Hitpoints', amount: 500 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ASoulsBane;
