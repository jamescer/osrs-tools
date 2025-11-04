import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LunarDiplomacy: Quest = {
  description: '',
  difficulty: QuestDifficulty.Master,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'Lunar Diplomacy',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
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
  recommendedSkills: {},
  series: 'Fremennik',
  rewards: {
    areas: [],
    experience: [
      { amount: 5000, skill: Skill.Magic },
      { amount: 5000, skill: Skill.Runecraft },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'lunarDiplomacy',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Lunar_Diplomacy',
};

export default LunarDiplomacy;
