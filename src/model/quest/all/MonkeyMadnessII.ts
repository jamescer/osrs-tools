import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MonkeyMadnessII: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Grandmaster,
  id: 0,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'Monkey Madness II',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Monkey Madness'),
    new QuestRequirement('Recipe for Disaster'),
    new QuestRequirement('Enlightened Journey'),
    new QuestRequirement('The Eyes of Glouphrie'),
    new QuestRequirement('Tree Gnome Village'),
    new QuestRequirement('The Grand Tree'),
    new LevelRequirement('Agility', 69, false),
    new LevelRequirement('Crafting', 70, false),
    new LevelRequirement('Hunter', 60, false),
    new LevelRequirement('Slayer', 60, false),
    new LevelRequirement('Thieving', 55, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 15000, skill: Skill.Agility },
      { amount: 15000, skill: Skill.Hunter },
      { amount: 15000, skill: Skill.Thieving },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: 'Gnome',
  shortName: 'monkeyMadnessII',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Monkey_Madness_II',
};

export default MonkeyMadnessII;
