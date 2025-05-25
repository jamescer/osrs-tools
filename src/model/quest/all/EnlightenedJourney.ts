import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const EnlightenedJourney: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Enlightened Journey',
  members: true,
  difficulty: 'Intermediate',
  length: 'Short - Long',
  requirements: [], // Skills: quest 20, Firemaking 20, Farming 30, Crafting 36
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'enlightenedJourney',
  url: 'https://oldschool.runescape.wiki/w/Enlightened_Journey',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Short - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Crafting: 2000, Farming: 3000, Firemaking: 4000, Woodcutting: 1500 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default EnlightenedJourney;
