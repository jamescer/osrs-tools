import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const InAidOfTheMyreque: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'In Aid of the Myreque',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('In Search of the Myreque'),
    new LevelRequirement('Crafting', 25, false),
    new LevelRequirement('Mining', 15, false),
    new LevelRequirement('Magic', 7, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 2000, skill: Skill.Attack },
      { amount: 2000, skill: Skill.Crafting },
      { amount: 2000, skill: Skill.Defence },
      { amount: 2000, skill: Skill.Strength },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Myreque',
  shortName: 'inAidOfTheMyreque',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque',
};

export default InAidOfTheMyreque;
