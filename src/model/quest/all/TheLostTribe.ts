import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheLostTribe: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: '',
  name: 'The Lost Tribe',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new QuestRequirement('Rune Mysteries'), new QuestRequirement('Goblin Diplomacy')],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'theLostTribe',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Lost_Tribe',
};

export default TheLostTribe;
