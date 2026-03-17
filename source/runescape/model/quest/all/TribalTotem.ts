import { QuestDifficulty, QuestLength, QuestStatus } from '../enums';
import { Quest } from '../types';

const TribalTotem: Quest = {
  age: 'Third Age',
  description: 'Help a tribe recover their sacred totem that has been stolen.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Tribal Totem',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Crafting: 5 },
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 500, skill: 'Crafting' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'tribalTotem',

  startLocation: 'Ape Atoll',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Ape Atoll.',
    'Speak to the tribal leader.',
    'Learn about the missing totem.',
    'Search the island for clues.',
    'Craft or retrieve the totem components.',
    'Reassemble the totem and return it.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Tribal_Totem',
};

export default TribalTotem;
