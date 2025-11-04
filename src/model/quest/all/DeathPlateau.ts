import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeathPlateau: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: 'Death Plateau',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Troll',
  rewards: {
    areas: [],
    experience: [{ amount: 3000, skill: Skill.Attack }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'deathPlateau',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Death_Plateau',
};

export default DeathPlateau;
