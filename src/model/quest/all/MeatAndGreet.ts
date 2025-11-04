// URL: https://oldschool.runescape.wiki/w/Meat_and_Greet

import { Skill } from '../../account/Skill';
import { Quest, QuestStatus } from '../../quest/Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const MeatAndGreet: Quest = {
  description:
    'Help the Varrock Cook prepare a feast by gathering special meats from around Gielinor.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  age: '',
  name: 'Meat and Greet',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: ['Varrock'],
    experience: [{ amount: 200, skill: Skill.Cooking }],
    items: [{ name: 'Feast Token', quantity: 1 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to the Varrock Feast event' }],
  },
  startLocation: 'Varrock Square, speak to the Cook',

  shortName: 'meatAndGreet',
  status: QuestStatus.NotStarted,
  steps: [
    'Speak to the Cook in Varrock Square.',
    'Collect special meats from various locations.',
    'Return the meats to the Cook.',
    'Assist in preparing the feast.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Meat_and_Greet',
};

export default MeatAndGreet;
