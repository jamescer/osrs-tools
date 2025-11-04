import { Skill } from '../../account/Skill';
import {
  LevelRequirement,
  QuestPointRequirement,
  QuestRequirement,
  Requirement,
} from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const HeroesQuest: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: "Heroes' Quest",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Shield of Arrav'),
    new QuestRequirement('Lost City'),
    new QuestRequirement("Merlin's Crystal"),
    new QuestRequirement('Dragon Slayer'),
    new QuestRequirement('Druidic Ritual'),
    new QuestPointRequirement(55),
  ],
  recommendedSkills: {},
  series: 'Guild',
  rewards: {
    areas: [],
    experience: [
      { amount: 3075, skill: Skill.Attack },
      { amount: 2825, skill: Skill.Cooking },
      { amount: 3075, skill: Skill.Defence },
      { amount: 1575, skill: Skill.Firemaking },
      { amount: 2725, skill: Skill.Fishing },
      { amount: 1325, skill: Skill.Herblore },
      { amount: 3075, skill: Skill.Hitpoints },
      { amount: 2575, skill: Skill.Mining },
      { amount: 2075, skill: Skill.Ranged },
      { amount: 2257, skill: Skill.Smithing },
      { amount: 3075, skill: Skill.Strength },
      { amount: 1575, skill: Skill.Woodcutting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'heroesQuest',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Heroes%27_Quest',
};

export default HeroesQuest;
