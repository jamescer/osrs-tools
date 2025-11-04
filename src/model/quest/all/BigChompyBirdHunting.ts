import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const BigChompyBirdHunting: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: 'Big Chompy Bird Hunting',
  questPoints: 2,
  recommendations: [
    {
      name: 'Chompy bird hunting gear',
      note: 'Ogre bow, ogre arrows, and food.',
      type: 'item',
    },
    {
      name: 'Energy potions',
      note: 'Useful for travel.',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {
    Cooking: 30,
    Fletching: 5,
    Ranged: 30,
  },
  series: 'Ogre',
  rewards: {
    areas: [],
    experience: [
      { amount: 1470, skill: 'Cooking' },
      { amount: 262, skill: 'Fletching' },
      { amount: 735, skill: 'Ranged' },
    ],
    items: [{ name: 'Ogre bow' }, { name: 'Ogre arrows', quantity: 30 }],
    lamps: [],
    pets: [],
    questPoints: 2,
    points: [],
    unlocks: [{ description: 'Ability to hunt chompy birds' }],
  },
  startLocation: '',
  shortName: 'bigChompyBirdHunting',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting',
};

export default BigChompyBirdHunting;
