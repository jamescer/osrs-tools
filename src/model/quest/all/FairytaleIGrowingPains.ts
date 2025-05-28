import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const FairytaleIGrowingPains: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Fairytale I - Growing Pains',
  members: true,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [], // Quests: Lost City, Nature Spirit. Skills: Attack 2000, Farming 3500, Magic 1000
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'fairytaleIGrowingPains',
  url: 'https://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains',
  series: 'Fairy Tale (#2)',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default FairytaleIGrowingPains;
