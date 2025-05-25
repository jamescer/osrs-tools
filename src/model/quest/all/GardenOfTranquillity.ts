import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const GardenOfTranquillity: Quest = {
  id: 0,
  name: 'Garden of Tranquillity',
  members: true,
  difficulty: 'Intermediate',
  length: 'Very long',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'gardenOfTranquillity',
  url: 'https://oldschool.runescape.wiki/w/Garden_of_Tranquillity',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Very long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Farming: 5000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default GardenOfTranquillity;
