// URL: https://oldschool.runescape.wiki/w/Meat_and_Greet

import { Quest, QuestStatus } from '../../quest/Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const MeatAndGreet: Quest = {
  id: 0,
  name: 'Meat and Greet',
  members: false,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 1,
  startLocation: 'Varrock Square, speak to the Cook',
  description:
    'Help the Varrock Cook prepare a feast by gathering special meats from around Gielinor.',
  steps: [
    'Speak to the Cook in Varrock Square.',
    'Collect special meats from various locations.',
    'Return the meats to the Cook.',
    'Assist in preparing the feast.',
  ],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'meatAndGreet',
  url: 'https://oldschool.runescape.wiki/w/Meat_and_Greet',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: Skill.Cooking, amount: 200 }],
    questPoints: 1,
    items: [{ name: 'Feast Token', quantity: 1 }],
    areas: ['Varrock'],
    unlocks: [{ description: 'Access to the Varrock Feast event' }],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default MeatAndGreet;
