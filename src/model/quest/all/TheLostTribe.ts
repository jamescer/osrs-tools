import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheLostTribe: Quest = {
  id: 0,
  name: 'The Lost Tribe',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [
    new QuestRequirement('Rune Mysteries'),
    new QuestRequirement('Goblin Diplomacy'),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theLostTribe',
  url: 'https://oldschool.runescape.wiki/w/The_Lost_Tribe',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheLostTribe;
