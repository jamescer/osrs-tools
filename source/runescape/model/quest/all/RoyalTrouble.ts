import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RoyalTrouble: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Royal Trouble',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Throne of Miscellania'),
    new LevelRequirement('Agility', 40, false),
    new LevelRequirement('Slayer', 40, true),
  ],
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
  series: null,
  shortName: 'royalTrouble',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Royal_Trouble',
};

export default RoyalTrouble;
