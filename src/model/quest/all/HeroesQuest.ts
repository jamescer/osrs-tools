import { Quest, QuestStatus } from '../Quest';
import {
  LevelRequirement,
  QuestPointRequirement,
  QuestRequirement,
  Requirement,
} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const HeroesQuest: Quest = {
  id: 0,
  name: "Heroes' Quest",
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [
    new QuestRequirement('Shield of Arrav'),
    new QuestRequirement('Lost City'),
    new QuestRequirement("Merlin's Crystal"),
    new QuestRequirement('Dragon Slayer'),
    new QuestRequirement('Druidic Ritual'),
    new QuestPointRequirement(55),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'heroesQuest',
  url: 'https://oldschool.runescape.wiki/w/Heroes%27_Quest',
  series: 'Guild',
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Attack, amount: 3075 },
      { skill: Skill.Cooking, amount: 2825 },
      { skill: Skill.Defence, amount: 3075 },
      { skill: Skill.Firemaking, amount: 1575 },
      { skill: Skill.Fishing, amount: 2725 },
      { skill: Skill.Herblore, amount: 1325 },
      { skill: Skill.Hitpoints, amount: 3075 },
      { skill: Skill.Mining, amount: 2575 },
      { skill: Skill.Ranged, amount: 2075 },
      { skill: Skill.Smithing, amount: 2257 },
      { skill: Skill.Strength, amount: 3075 },
      { skill: Skill.Woodcutting, amount: 1575 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default HeroesQuest;
