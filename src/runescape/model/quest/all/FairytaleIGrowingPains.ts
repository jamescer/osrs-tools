import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const FairytaleIGrowingPains: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Fairytale I - Growing Pains',
  // Quests: Lost City, Nature Spirit. Skills: Attack 2000, Farming 3500, Magic 1000
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Fairy Tale (#2)',
  shortName: 'fairytaleIGrowingPains',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains',
};

export default FairytaleIGrowingPains;
