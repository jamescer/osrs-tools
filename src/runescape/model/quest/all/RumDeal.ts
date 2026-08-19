import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RumDeal: Quest = {
  age: 'Fifth Age',
  description: 'Help the monks of Braindeath Island deal with a zombie plague threatening their famous rum operation.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 90,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Rum Deal',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Zogre Flesh Eaters'),
    new LevelRequirement(Skill.Crafting, 42, false),
    new LevelRequirement(Skill.Fishing, 50, false),
    new LevelRequirement(Skill.Farming, 40, false),
    new LevelRequirement(Skill.Prayer, 47, false),
    new LevelRequirement(Skill.Slayer, 42, false),
  ],
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
  series: 'Pirate',
  shortName: 'rumDeal',

  startLocation: 'Captain Braindeath, Braindeath Island',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Rum_Deal',
};

export default RumDeal;
