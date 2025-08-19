import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const BetweenARock: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Between a Rock...',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'betweenARock',
  url: 'https://oldschool.runescape.wiki/w/Between_a_Rock...',
  series: 'Rise of the Red Axe',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Defence', amount: 5000 },
      { skill: 'Mining', amount: 5000 },
      { skill: 'Smithing', amount: 5000 },
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

export default BetweenARock;
