import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LegendsQuest: Quest = {
  description: '',
  difficulty: QuestDifficulty.Master,
  id: 0,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  age: '',
  name: "Legends' Quest",
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Family Crest'),
    new QuestRequirement("Heroes' Quest"),
    new QuestRequirement('Shilo Village'),
    new QuestRequirement('Underground Pass'),
    new QuestRequirement('Waterfall Quest'),
    new LevelRequirement('Agility', 50, false),
    new LevelRequirement('Crafting', 50, false),
    new LevelRequirement('Herblore', 45, false),
    new LevelRequirement('Magic', 56, false),
    new LevelRequirement('Mining', 52, false),
    new LevelRequirement('Prayer', 42, false),
    new LevelRequirement('Smithing', 50, false),
    new LevelRequirement('Strength', 50, false),
    new LevelRequirement('Thieving', 50, false),
    new LevelRequirement('Woodcutting', 50, false),
  ],
  recommendedSkills: {},
  series: 'Guild',
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'legendsQuest',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Legends%27_Quest',
};

export default LegendsQuest;
