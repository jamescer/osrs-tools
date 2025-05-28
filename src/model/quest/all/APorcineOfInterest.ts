import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const APorcineOfInterest: Quest = {
  id: 0, // Assign a unique ID if available
  name: "A Porcine of Interest",
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: "Read the town notice board in Draynor Village, behind Fortunato's Wine Shop.",
  description: "Ah, the Falador Farm - filled with cabbages, cows, and even a sleepy sheepdog. A peaceful place, where you can learn to churn butter, give a dog a bone, or purchase various Farming supplies. What was once a place of happiness, joy and wholesome dairy goods has of late become dominated by a vile presence. Each morning Sarah wakes to find her crops destroyed, her cows cowering, and her loyal sheepdog looking... sheepish. She's had enough, but she thinks she's got the culprit on the trot. Can you help her track down... A Porcine of Interest?",
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "aPorcineOfInterest",
  url: 'https://oldschool.runescape.wiki/w/A_Porcine_of_Interest',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [
    "Charged amulet of glory",
    "Explorer's ring 2 or above",
    "Stamina potion",
    "Combat equipment",
    "Some food for lower levels"
  ],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Slayer', amount: 1000 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default APorcineOfInterest;
