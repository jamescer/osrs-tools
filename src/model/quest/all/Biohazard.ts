import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const Biohazard: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Biohazard',
  questPoints: 3,
  recommendations: [
    {
      name: 'Food',
      note: 'Useful for travel and minor combat.',
      type: 'item',
    },
    {
      name: 'Energy potions',
      note: 'Useful for running between locations.',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['East Ardougne'],
    experience: [{ amount: 1250, skill: 'Thieving' }],
    items: [{ name: 'Access to East Ardougne' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [{ description: 'Ability to enter East Ardougne freely' }],
  },
  series: 'Elf',
  shortName: 'biohazard',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Biohazard',
};

export default Biohazard;
