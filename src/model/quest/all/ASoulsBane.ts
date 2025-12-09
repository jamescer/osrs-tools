import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ASoulsBane: Quest = {
  age: '',

  // Not specified in JSON
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: "A Soul's Bane",
  // No skill or quest requirements
  questPoints: 1,

  recommendations: [
    {
      name: 'Food',
      note: 'Useful for low-level players.',
      type: 'item',
    },
    {
      name: 'Energy potions',
      note: 'Useful for running between locations.',
      type: 'tip',
    },
  ],

  recommendedPrayers: [],

  recommendedSkills: {},

  requirements: [],

  rewards: {
    areas: ['The Rift'],
    experience: [
      { amount: 500, skill: 'Defence' },
      { amount: 500, skill: 'Hitpoints' },
    ],
    items: [{ name: 'Ability to enter the Rift' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Ability to enter the Rift freely' }],
  },

  series: null,

  shortName: 'aSoulsBane',

  startLocation: '',

  // Not specified in JSON
  status: QuestStatus.NotStarted,
  // Not specified in JSON
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Soul%27s_Bane',
};

export default ASoulsBane;
