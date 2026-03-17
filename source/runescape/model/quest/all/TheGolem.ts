import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGolem: Quest = {
  age: 'Third Age',
  description: 'Investigate a mysterious golem in the desert and help the surrounding community.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Golem',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 1000, skill: 'Magic' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'theGolem',

  startLocation: 'Desert town',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the desert town.',
    'Speak to the locals.',
    'Discover the legend of the golem.',
    'Find clues about the golem\'s location.',
    'Face the golem in the desert.',
    'Resolve the conflict and return.',
  ],
  url: 'https://oldschool.runescape.wiki/w/The_Golem',
};

export default TheGolem;
