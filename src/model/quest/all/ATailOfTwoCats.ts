import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const ATailOfTwoCats: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'A Tail of Two Cats',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
  requirements: [], // Only quest requirement: Icthlarin's Little Helper
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aTailOfTwoCats',
  url: 'https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats',
  series: 'Dragonkin',
  age: '',
    recommendations: [
      {
        type: 'item',
        name: 'Cat',
        note: 'Required to complete the quest.'
      },
      {
        type: 'tip',
        name: 'Food and energy potions',
        note: 'Useful for travel and combat.'
      }
    ],
    recommendedSkills: {},
    recommendedPrayers: [],
    rewards: {
      experience: [
        { skill: 'Agility', amount: 2000 },
        { skill: 'Thieving', amount: 2500 }
      ],
      questPoints: 2,
      unlocks: [
        { description: 'Ability to turn your cat into a hellcat' },
        { description: 'Ability to obtain Bob the Cat’s collar' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default ATailOfTwoCats;
