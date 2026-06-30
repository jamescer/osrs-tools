import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const WaterfallQuest: Quest = {
  age: 'Third Age',
  description: 'Help a tribesperson recover a sacred totem from a mysterious waterfall.',
  difficulty: QuestDifficulty.Novice,
  id: 134,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Waterfall Quest',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Agility: 10 },
  requirements: [],
  rewards: {
    areas: ['Waterfall dungeon access'],
    experience: [{ amount: 1000, skill: 'Attack' }, { amount: 1000, skill: 'Strength' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      {
        description: 'Access to Waterfall dungeon for training',
        url: 'https://oldschool.runescape.wiki/w/Waterfall_Dungeon',
      },
    ],
  },
  series: null,
  shortName: 'waterfallQuest',

  startLocation: 'Arandar, east of Ardougne',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the waterfall east of Arandar.',
    'Speak to the guardian of the water.',
    'Navigate through the water cave.',
    'Complete the waterfall gauntlet.',
    'Retrieve the sacred totem.',
    'Return to receive your reward.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Waterfall_Quest',
};

export default WaterfallQuest;
