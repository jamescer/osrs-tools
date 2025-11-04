import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DemonSlayer: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: false,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: 'Demon Slayer',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'demonSlayer',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Demon_Slayer',
};

export default DemonSlayer;
