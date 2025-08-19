import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const InSearchOfTheMyreque: Quest = {
  id: 0,
  name: 'In Search of the Myreque',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Short,
  requirements: [new QuestRequirement('Nature Spirit'), new LevelRequirement('Agility', 25, false)],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'inSearchOfTheMyreque',
  url: 'https://oldschool.runescape.wiki/w/In_Search_of_the_Myreque',
  series: 'Myreque',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Attack, amount: 600 },
      { skill: Skill.Crafting, amount: 600 },
      { skill: Skill.Defence, amount: 600 },
      { skill: Skill.Hitpoints, amount: 600 },
      { skill: Skill.Strength, amount: 600 },
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

export default InSearchOfTheMyreque;
