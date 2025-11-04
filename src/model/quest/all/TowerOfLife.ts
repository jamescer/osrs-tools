import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TowerOfLife: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Tower of Life',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement('Construction', 10, false)],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'towerOfLife',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tower_of_Life',
};

export default TowerOfLife;
