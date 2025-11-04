import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const Biohazard: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,
  
  age: '',
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
  requirements: [],
  recommendedSkills: {},
  series: 'Elf',
  rewards: {
    areas: ['East Ardougne'],
    experience: [{ amount: 1250, skill: 'Thieving' }],
    items: [{ name: 'Access to East Ardougne' }],
    lamps: [],
    pets: [],
    questPoints: 3,
    points: [],
    unlocks: [{ description: 'Ability to enter East Ardougne freely' }],
  },
  startLocation: '',
  shortName: 'biohazard',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Biohazard',
};

export default Biohazard;
