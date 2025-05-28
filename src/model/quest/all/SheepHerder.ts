import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const SheepHerder: Quest = {
  id: 0,
  name: 'Sheep Herder',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'sheepHerder',
  url: 'https://oldschool.runescape.wiki/w/Sheep_Herder',
  series: null,
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
    questPoints: 4,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default SheepHerder;
