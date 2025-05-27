import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const MurderMystery: Quest = {
  id: 0,
  name: 'Murder Mystery',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'murderMystery',
  url: 'https://oldschool.runescape.wiki/w/Murder_Mystery',
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

export default MurderMystery;
