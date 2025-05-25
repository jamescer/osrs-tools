import { Quest, QuestStatus } from '../Quest';
import {
  LevelRequirement,
  QuestRequirement,
  Requirement,
} from '../../Requirement';

const InSearchOfTheMyreque: Quest = {
  id: 0,
  name: 'In Search of the Myreque',
  members: true,
  difficulty: 'Intermediate',
  length: 'Short',
  requirements: [
    new QuestRequirement('Nature Spirit'),
    new LevelRequirement('Agility', 25, false),
  ],
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
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: {
      Attack: 600,
      Crafting: 600,
      Defence: 600,
      Hitpoints: 600,
      Strength: 600,
    },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default InSearchOfTheMyreque;
