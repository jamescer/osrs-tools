import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EnlightenedJourney: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Enlightened Journey',
  // Skills: quest 20, Firemaking 20, Farming 30, Crafting 36
  questPoints: 1,
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
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'enlightenedJourney',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Enlightened_Journey',
};

export default EnlightenedJourney;
