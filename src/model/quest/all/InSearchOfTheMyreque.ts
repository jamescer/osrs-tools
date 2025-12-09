import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const InSearchOfTheMyreque: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'In Search of the Myreque',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Nature Spirit'), new LevelRequirement('Agility', 25, false)],
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
  series: 'Myreque',
  shortName: 'inSearchOfTheMyreque',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/In_Search_of_the_Myreque',
};

export default InSearchOfTheMyreque;
