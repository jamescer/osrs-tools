import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ElementalWorkshopII: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Elemental Workshop II',
  // Skills: Magic 20, Smithing 30
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Elemental Workshop (#2)',
  rewards: {
    areas: [],
    experience: [
      { amount: 7500, skill: Skill.Crafting },
      { amount: 7500, skill: Skill.Smithing },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'elementalWorkshopII',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Elemental_Workshop_II',
};

export default ElementalWorkshopII;
