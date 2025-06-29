import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ElementalWorkshopI: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Elemental Workshop I',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [], // Skills: Mining 20, Smithing 20, Crafting 20
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'elementalWorkshopI',
  url: 'https://oldschool.runescape.wiki/w/Elemental_Workshop_I',
  series: 'Elemental Workshop',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Crafting, amount: 5000 },
      { skill: Skill.Smithing, amount: 5000 },
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

export default ElementalWorkshopI;
