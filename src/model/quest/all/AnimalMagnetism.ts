import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const AnimalMagnetism: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Animal Magnetism",
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium - Long',
  requirements: [], // Quests: The Restless Ghost, Ernest the Chicken, Priest in Peril. Skills: Slayer 18, Crafting 19, Ranged 30, Woodcutting 35, Prayer 31
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "animalMagnetism",
  url: 'https://oldschool.runescape.wiki/w/Animal_Magnetism',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Crafting: 1000, Fletching: 1000, Slayer: 1000, Woodcutting: 2500 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default AnimalMagnetism;
