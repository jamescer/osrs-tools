import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const LegendsQuest: Quest = {
  id: 0,
  name: "Legends' Quest",
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.VeryLong,
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
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'legendsQuest',
  url: 'https://oldschool.runescape.wiki/w/Legends%27_Quest',
  series: 'Guild',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 4,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default LegendsQuest;
