import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ForgettableTale: Quest = {
  id: 0,
  name: 'Forgettable Tale...',
  members: true,
  difficulty: 'Intermediate',
  length: 'Long',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'forgettableTale',
  url: 'https://oldschool.runescape.wiki/w/Forgettable_Tale...',
  series: 'Rise of the Red Axe',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
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

export default ForgettableTale;
