import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TowerOfLife: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Tower of Life',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new LevelRequirement('Construction', 10, false)],
  recommendedSkills: {},
  series: null,
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
  startLocation: '',

  shortName: 'towerOfLife',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tower_of_Life',
};

export default TowerOfLife;
