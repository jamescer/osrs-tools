import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const FairytaleIICureAQueen: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Fairytale II - Cure a Queen',
  members: true,
  difficulty: 'Experienced',
  length: 'Short - Medium',
  requirements: [], // Quests: Fairytale I - Growing Pains. Skills: Thieving 40, Farming 49, Herblore 57
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'fairytaleIICureAQueen',
  url: 'https://oldschool.runescape.wiki/w/Fairytale_II_-_Cure_a_Queen',
  series: 'Fairy Tale (#2)',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Short - Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Herblore: 3500, Thieving: 2500 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default FairytaleIICureAQueen;
