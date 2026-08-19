import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ElementalWorkshopII: Quest = {
  age: 'Fifth Age',
  description: 'Return to the elemental workshop and unlock the secrets of the mind element to craft an elemental mind helmet.',

  difficulty: QuestDifficulty.Novice,

  id: 38,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Elemental Workshop II',
  // Skills: Magic 20, Smithing 30
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Elemental Workshop I"),
    new LevelRequirement(Skill.Magic, 20, false),
    new LevelRequirement(Skill.Mining, 20, false),
    new LevelRequirement(Skill.Smithing, 30, false),
  ],
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
  series: 'Elemental Workshop',
  shortName: 'elementalWorkshopII',

  startLocation: "Elemental Workshop, Seers' Village",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Elemental_Workshop_II',
};

export default ElementalWorkshopII;
