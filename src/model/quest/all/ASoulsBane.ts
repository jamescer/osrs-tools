import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ASoulsBane: Quest = {
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
  age: '',

  requirements: [],

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

  series: null,

  recommendedPrayers: [],

  startLocation: '',

  recommendedSkills: {},

  
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

  // Not specified in JSON
status: QuestStatus.NotStarted,

  shortName: 'aSoulsBane',
  // Not specified in JSON
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Soul%27s_Bane',
};

export default ASoulsBane;
