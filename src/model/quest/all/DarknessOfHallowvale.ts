import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DarknessOfHallowvale: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Darkness of Hallowvale',
  members: true,
  difficulty: 'Intermediate',
  length: 'Very long',
  requirements: [], // Quests: In Aid of the Myreque. Skills: Construction 5, Mining 20, Thieving 22, Agility 26, Crafting 32, Magic 33, Strength 40
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'darknessOfHallowvale',
  url: 'https://oldschool.runescape.wiki/w/Darkness_of_Hallowvale',
  series: 'Myreque',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Very long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Agility: 7000, Construction: 2000, Thieving: 6000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DarknessOfHallowvale;
