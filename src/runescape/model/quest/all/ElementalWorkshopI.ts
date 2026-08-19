import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ElementalWorkshopI: Quest = {
  age: 'Fifth Age',
  description: 'Discover an ancient workshop beneath Seers\' Village and learn to smelt elemental metal to craft an elemental shield.',

  difficulty: QuestDifficulty.Novice,

  id: 37,

  length: QuestLength.VeryShort,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Elemental Workshop I',
  // Skills: Mining 20, Smithing 20, Crafting 20
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Mining, 20, true),
    new LevelRequirement(Skill.Smithing, 20, true),
    new LevelRequirement(Skill.Crafting, 20, true),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 5000, skill: Skill.Crafting },
      { amount: 5000, skill: Skill.Smithing },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Elemental Workshop',
  shortName: 'elementalWorkshopI',

  startLocation: "Bookcase, house south-west of Seers' Village bank",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Elemental_Workshop_I',
};

export default ElementalWorkshopI;
