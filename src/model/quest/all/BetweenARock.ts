import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const BetweenARock: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Between a Rock...',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'betweenARock',
  url: 'https://oldschool.runescape.wiki/w/Between_a_Rock...',
  series: 'Rise of the Red Axe',
  age: '',
    recommendations: [
      {
        type: 'item',
        name: 'Gold helmet',
        note: 'Required for quest completion.'
      },
      {
        type: 'tip',
        name: 'Food and energy potions',
        note: 'Useful for travel and combat.'
      }
    ],
    recommendedSkills: {
      Defence: 30,
      Mining: 40,
      Smithing: 50
    },
    recommendedPrayers: ['Protect from Melee'],
    rewards: {
      experience: [
        { skill: 'Defence', amount: 5000 },
        { skill: 'Mining', amount: 5000 },
        { skill: 'Smithing', amount: 5000 }
      ],
      questPoints: 2,
      items: [
        { name: 'Gold helmet' }
      ],
      areas: [],
      unlocks: [
        { description: 'Ability to mine gold ore in the Dwarven Mine' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default BetweenARock;
