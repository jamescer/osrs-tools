import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const CabinFever: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Cabin Fever",
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [], // Quests: Pirate's Treasure, Rum Deal, Priest in Peril. Skills: Agility 42, Crafting 45, Smithing 50, Ranged 40
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "cabinFever",
  url: 'https://oldschool.runescape.wiki/w/Cabin_Fever',
  series: 'Pirate',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Agility', amount: 7000 },
      { skill: 'Crafting', amount: 7000 },
      { skill: 'Smithing', amount: 7000 },
    ],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default CabinFever;
