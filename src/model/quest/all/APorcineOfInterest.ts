import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const APorcineOfInterest: Quest = {
  description:
    "Ah, the Falador Farm - filled with cabbages, cows, and even a sleepy sheepdog. A peaceful place, where you can learn to churn butter, give a dog a bone, or purchase various Farming supplies. What was once a place of happiness, joy and wholesome dairy goods has of late become dominated by a vile presence. Each morning Sarah wakes to find her crops destroyed, her cows cowering, and her loyal sheepdog looking... sheepish. She's had enough, but she thinks she's got the culprit on the trot. Can you help her track down... A Porcine of Interest?",
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: 'A Porcine of Interest',
  questPoints: 1,
  recommendations: [
    { name: 'Charged amulet of glory', type: 'tip' },
    { name: "Explorer's ring 2 or above", type: 'tip' },
    { name: 'Stamina potion', type: 'tip' },
    { name: 'Combat equipment', type: 'tip' },
    { name: 'Some food for lower levels', type: 'tip' },
  ],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [{ amount: 1000, skill: 'Slayer' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: "Read the town notice board in Draynor Village, behind Fortunato's Wine Shop.",

  shortName: 'aPorcineOfInterest',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Porcine_of_Interest',
};

export default APorcineOfInterest;
