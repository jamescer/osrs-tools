import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ATailOfTwoCats: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'A Tail of Two Cats',
  // Only quest requirement: Icthlarin's Little Helper
  questPoints: 2,
  recommendations: [
    {
      name: 'Cat',
      note: 'Required to complete the quest.',
      type: 'item',
    },
    {
      name: 'Food and energy potions',
      note: 'Useful for travel and combat.',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Dragonkin',
  rewards: {
    experience: [
      { amount: 2000, skill: 'Agility' },
      { amount: 2500, skill: 'Thieving' },
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Ability to turn your cat into a hellcat' },
      { description: 'Ability to obtain Bob the Cat’s collar' },
    ],
  },
  startLocation: '',
  shortName: 'aTailOfTwoCats',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats',
};

export default ATailOfTwoCats;
