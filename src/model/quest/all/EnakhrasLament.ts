import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EnakhrasLament: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: "Enakhra's Lament",
  // Skills: Crafting 50, Firemaking 45, Prayer 43, Magic 39, Mining 45
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Mahjarrat',
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'enakhrasLament',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Enakhra%27s_Lament',
};

export default EnakhrasLament;
