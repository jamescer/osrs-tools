import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const TheGrandTree: Quest = {
  id: 0,
  name: 'The Grand Tree',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 5,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theGrandTree',
  url: 'https://oldschool.runescape.wiki/w/The_Grand_Tree',
  series: 'Gnome',
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 5,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheGrandTree;
