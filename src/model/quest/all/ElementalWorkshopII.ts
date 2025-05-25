import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

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
    experience: { Crafting: 7500, Smithing: 7500 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default ElementalWorkshopII;
