import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SheepHerder: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Sheep Herder',
  questPoints: 4,
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
    questPoints: 4,
    unlocks: [],
  },
  series: null,
  shortName: 'sheepHerder',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Sheep_Herder',
};

export default SheepHerder;
