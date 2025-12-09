import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeathToTheDorgeshuun: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Death to the Dorgeshuun',
  // Quests: The Lost Tribe. Skills: Agility 23, Thieving 23
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [
      { amount: 2000, skill: 'Ranged' },
      { amount: 2000, skill: 'Thieving' },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Dorgeshuun',
  shortName: 'deathToTheDorgeshuun',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun',
};

export default DeathToTheDorgeshuun;
