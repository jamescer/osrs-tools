import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestPointRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LegendsQuest: Quest = {
  age: 'Fifth Age',
  description: 'Embark on the most legendary adventure in RuneScape — exploring the Kharazi Jungle to restore an ancient tablet.',
  difficulty: QuestDifficulty.Master,
  id: 64,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: "Legends' Quest",
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestPointRequirement(107),
    new QuestRequirement('Family Crest'),
    new QuestRequirement("Heroes' Quest"),
    new QuestRequirement('Shilo Village'),
    new QuestRequirement('Underground Pass'),
    new QuestRequirement('Waterfall Quest'),
    new LevelRequirement(Skill.Agility, 50, false),
    new LevelRequirement(Skill.Crafting, 50, false),
    new LevelRequirement(Skill.Herblore, 45, false),
    new LevelRequirement(Skill.Magic, 56, false),
    new LevelRequirement(Skill.Mining, 52, false),
    new LevelRequirement(Skill.Prayer, 42, false),
    new LevelRequirement(Skill.Smithing, 50, false),
    new LevelRequirement(Skill.Strength, 50, false),
    new LevelRequirement(Skill.Thieving, 50, false),
    new LevelRequirement(Skill.Woodcutting, 50, false),
  ],
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
  series: null,
  shortName: 'legendsQuest',

  startLocation: "Legend's Guild gates",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Legends%27_Quest',
};

export default LegendsQuest;
