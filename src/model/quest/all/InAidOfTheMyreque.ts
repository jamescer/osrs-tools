import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const InAidOfTheMyreque: Quest = {
  id: 0,
  name: 'In Aid of the Myreque',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
  requirements: [
    new QuestRequirement('In Search of the Myreque'),
    new LevelRequirement('Crafting', 25, false),
    new LevelRequirement('Mining', 15, false),
    new LevelRequirement('Magic', 7, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'inAidOfTheMyreque',
  url: 'https://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque',
  series: 'Myreque',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Attack, amount: 2000 },
      { skill: Skill.Crafting, amount: 2000 },
      { skill: Skill.Defence, amount: 2000 },
      { skill: Skill.Strength, amount: 2000 },
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

export default InAidOfTheMyreque;
