import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const MonkeyMadnessII: Quest = {
  id: 0,
  name: 'Monkey Madness II',
  members: true,
  difficulty: 'Grandmaster',
  length: 'Very long',
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
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'monkeyMadnessII',
  url: 'https://oldschool.runescape.wiki/w/Monkey_Madness_II',
  series: 'Gnome',
  age: '',
  difficultyLevel: 'Grandmaster',
  officialDifficulty: 'Grandmaster',
  officialLength: 'Very long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Agility, amount: 15000 },
      { skill: Skill.Hunter, amount: 15000 },
      { skill: Skill.Thieving, amount: 15000 }
    ],
    questPoints: 4,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default MonkeyMadnessII;
