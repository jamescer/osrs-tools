import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TowerOfLife: Quest = {
  id: 0,
  name: 'Tower of Life',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Construction', 10, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'towerOfLife',
  url: 'https://oldschool.runescape.wiki/w/Tower_of_Life',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
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

export default TowerOfLife;
