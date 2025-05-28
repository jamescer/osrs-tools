import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const PlagueCity: Quest = {
  id: 0,
  name: 'Plague City',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'plagueCity',
  url: 'https://oldschool.runescape.wiki/w/Plague_City',
  series: 'Elf',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
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

export default PlagueCity;
