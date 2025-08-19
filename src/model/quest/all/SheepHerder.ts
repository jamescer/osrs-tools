import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const SheepHerder: Quest = {
  id: 0,
  name: 'Sheep Herder',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
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
