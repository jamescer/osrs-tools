import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeathToTheDorgeshuun: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Death to the Dorgeshuun',
  // Quests: The Lost Tribe. Skills: Agility 23, Thieving 23
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Dorgeshuun',
  rewards: {
    areas: [],
    experience: [
      { amount: 2000, skill: Skill.Ranged },
      { amount: 2000, skill: Skill.Thieving },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'deathToTheDorgeshuun',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun',
};

export default DeathToTheDorgeshuun;
