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
    recommendations: [
      {
        type: 'item',
        name: 'Food',
        note: 'Useful for low-level players.'
      },
      {
        type: 'tip',
        name: 'Energy potions',
        note: 'Useful for running between locations.'
      }
    ],
    recommendedSkills: {},
    recommendedPrayers: [],
    rewards: {
      experience: [
        { skill: 'Defence', amount: 500 },
        { skill: 'Hitpoints', amount: 500 }
      ],
      questPoints: 1,
      items: [
        { name: 'Ability to enter the Rift' }
      ],
      areas: ['The Rift'],
      unlocks: [
        { description: 'Ability to enter the Rift freely' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default ASoulsBane;
