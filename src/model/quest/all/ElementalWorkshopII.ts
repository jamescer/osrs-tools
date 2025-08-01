import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ElementalWorkshopII: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Elemental Workshop II',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [], // Skills: Magic 20, Smithing 30
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'elementalWorkshopII',
  url: 'https://oldschool.runescape.wiki/w/Elemental_Workshop_II',
  series: 'Elemental Workshop (#2)',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Crafting, amount: 7500 },
      { skill: Skill.Smithing, amount: 7500 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ElementalWorkshopII;
