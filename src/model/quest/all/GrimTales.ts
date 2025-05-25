import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const GrimTales: Quest = {
  id: 0,
  name: 'Grim Tales',
  members: true,
  difficulty: 'Master',
  length: 'Medium',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'grimTales',
  url: 'https://oldschool.runescape.wiki/w/Grim_Tales',
  series: null,
  age: '',
  difficultyLevel: 'Master',
  officialDifficulty: 'Master',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Agility: 6000, Farming: 4000, Herblore: 5000, Hitpoints: 5000, Thieving: 6000, Woodcutting: 14000 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default GrimTales;
