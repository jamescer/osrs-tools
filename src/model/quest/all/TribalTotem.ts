import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const TribalTotem: Quest = {
  id: 0,
  name: 'Tribal Totem',
  members: true,
  difficulty: 'Intermediate',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'tribalTotem',
  url: 'https://oldschool.runescape.wiki/w/Tribal_Totem',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TribalTotem;
