import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const FairytaleIGrowingPains: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Fairytale I - Growing Pains',
  // Quests: Lost City, Nature Spirit. Skills: Attack 2000, Farming 3500, Magic 1000
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Fairy Tale (#2)',
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
  startLocation: '',

  shortName: 'fairytaleIGrowingPains',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains',
};

export default FairytaleIGrowingPains;
