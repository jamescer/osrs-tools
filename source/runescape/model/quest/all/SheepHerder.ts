import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SheepHerder: Quest = {
  age: 'First Age',
  description: 'Help a farmer herd sheep and manage a farm in the countryside.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Sheep Herder',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 1200, skill: 'Herding' }],
    items: [{ name: 'Experience lamp' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: null,
  shortName: 'sheepHerder',

  startLocation: 'Catherby farm',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Catherby farm.',
    'Speak to the farmer.',
    'Learn about the sheep escaping.',
    'Gather and herd the sheep.',
    'Return them to the farm.',
    'Complete the herding task.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Sheep_Herder',
};

export default SheepHerder;
