import { Quest, QuestStatus } from '../Quest';
import {
  LevelRequirement,
  QuestRequirement,
  Requirement,
} from '../../Requirement';

const InAidOfTheMyreque: Quest = {
  id: 0,
  name: 'In Aid of the Myreque',
  members: true,
  difficulty: 'Intermediate',
  length: 'Long',
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
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Attack: 2000, Crafting: 2000, Defence: 2000, Strength: 2000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default InAidOfTheMyreque;
