import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const BetweenARock: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: 'Between a Rock...',
  questPoints: 2,
  recommendations: [
    {
      name: 'Gold helmet',
      note: 'Required for quest completion.',
      type: 'item',
    },
    {
      name: 'Food and energy potions',
      note: 'Useful for travel and combat.',
      type: 'tip',
    },
  ],
  recommendedPrayers: ['Protect from Melee'],
  requirements: [],
  recommendedSkills: {
    Defence: 30,
    Mining: 40,
    Smithing: 50,
  },
  series: 'Rise of the Red Axe',
  rewards: {
    areas: [],
    experience: [
      { amount: 5000, skill: 'Defence' },
      { amount: 5000, skill: 'Mining' },
      { amount: 5000, skill: 'Smithing' },
    ],
    items: [{ name: 'Gold helmet' }],
    lamps: [],
    pets: [],
    questPoints: 2,
    points: [],
    unlocks: [{ description: 'Ability to mine gold ore in the Dwarven Mine' }],
  },
  startLocation: '',
  shortName: 'betweenARock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Between_a_Rock...',
};

export default BetweenARock;
