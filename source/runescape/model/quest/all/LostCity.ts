import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LostCity: Quest = {
  age: 'Third Age',
  description: 'Discover a hidden city in the jungle and help a woodcutter reach it safely.',
  difficulty: QuestDifficulty.Intermediate,
  id: 65,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Lost City',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Woodcutting: 36 },
  requirements: [new LevelRequirement('Woodcutting', 36, false)],
  rewards: {
    areas: [
      'Lost City (access to Zanaris for members)',
      'Zanaris',
    ],
    experience: [{ amount: 3000, skill: 'Woodcutting' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [
      {
        description: 'Access to Zanaris, the Lost City',
        url: 'https://oldschool.runescape.wiki/w/Zanaris',
      },
      {
        description: 'Ability to cut Magic trees',
      },
    ],
  },
  series: null,
  shortName: 'lostCity',

  startLocation: 'Lumbridge forest, near the woodcutters',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Lumbridge forest.',
    'Speak to the lost woodcutter.',
    'Help him reach the Lost City.',
    'Search for a way through the forest using a magic axe.',
    'Chop down ancient trees to create a path.',
    'Enter the Lost City of Zanaris.',
    'Speak to the city residents to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Lost_City',
};

export default LostCity;
