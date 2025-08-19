import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const LunarDiplomacy: Quest = {
  id: 0,
  name: 'Lunar Diplomacy',
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.Long,
  requirements: [
    new QuestRequirement('The Fremennik Trials'),
    new QuestRequirement('Lost City'),
    new QuestRequirement('Shilo Village'),
    new LevelRequirement('Crafting', 61, false),
    new LevelRequirement('Defence', 40, false),
    new LevelRequirement('Firemaking', 49, false),
    new LevelRequirement('Herblore', 5, false),
    new LevelRequirement('Magic', 65, false),
    new LevelRequirement('Mining', 60, false),
    new LevelRequirement('Woodcutting', 55, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'lunarDiplomacy',
  url: 'https://oldschool.runescape.wiki/w/Lunar_Diplomacy',
  series: 'Fremennik',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Magic, amount: 5000 },
      { skill: Skill.Runecraft, amount: 5000 },
    ],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default LunarDiplomacy;
