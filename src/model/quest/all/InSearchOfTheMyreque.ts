import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const InSearchOfTheMyreque: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: '',
  name: 'In Search of the Myreque',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new QuestRequirement('Nature Spirit'), new LevelRequirement('Agility', 25, false)],
  recommendedSkills: {},
  series: 'Myreque',
  rewards: {
    areas: [],
    experience: [
      { amount: 600, skill: Skill.Attack },
      { amount: 600, skill: Skill.Crafting },
      { amount: 600, skill: Skill.Defence },
      { amount: 600, skill: Skill.Hitpoints },
      { amount: 600, skill: Skill.Strength },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'inSearchOfTheMyreque',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/In_Search_of_the_Myreque',
};

export default InSearchOfTheMyreque;
