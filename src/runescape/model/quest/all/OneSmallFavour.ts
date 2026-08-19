import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const OneSmallFavour: Quest = {
  age: 'Fifth Age',
  description: 'Help Aggie the witch with one small favour — which spirals into a chain of increasingly complicated tasks across Gielinor.',
  difficulty: QuestDifficulty.Intermediate,
  id: 78,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'One Small Favour',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Rune Mysteries'),
    new QuestRequirement('Shilo Village'),
    new LevelRequirement(Skill.Agility, 18, false),
    new LevelRequirement(Skill.Crafting, 25, false),
    new LevelRequirement(Skill.Herblore, 30, false),
    new LevelRequirement(Skill.Smithing, 30, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: null,
  shortName: 'oneSmallFavour',

  startLocation: 'Yanni Salika, Shilo Village',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/One_Small_Favour',
};

export default OneSmallFavour;
