import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const Biohazard: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Biohazard',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Medium,
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'biohazard',
  url: 'https://oldschool.runescape.wiki/w/Biohazard',
  series: 'Elf',
  age: '',
    recommendations: [
      {
        type: 'item',
        name: 'Food',
        note: 'Useful for travel and minor combat.'
      },
      {
        type: 'tip',
        name: 'Energy potions',
        note: 'Useful for running between locations.'
      }
    ],
    recommendedSkills: {},
    recommendedPrayers: [],
    rewards: {
      experience: [
        { skill: 'Thieving', amount: 1250 }
      ],
      questPoints: 3,
      items: [
        { name: 'Access to East Ardougne' }
      ],
      areas: ['East Ardougne'],
      unlocks: [
        { description: 'Ability to enter East Ardougne freely' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default Biohazard;
