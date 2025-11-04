import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const BigChompyBirdHunting: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,
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
  recommendedSkills: {
    Cooking: 30,
    Fletching: 5,
    Ranged: 30,
  },
  requirements: [],
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
    points: [],
    questPoints: 2,
    unlocks: [{ description: 'Ability to hunt chompy birds' }],
  },
  series: 'Ogre',
  shortName: 'bigChompyBirdHunting',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting',
};

export default BigChompyBirdHunting;
