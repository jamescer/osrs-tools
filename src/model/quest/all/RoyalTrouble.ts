import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RoyalTrouble: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Royal Trouble',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Throne of Miscellania'),
    new LevelRequirement('Agility', 40, false),
    new LevelRequirement('Slayer', 10, false),
  ],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'royalTrouble',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Royal_Trouble',
};

export default RoyalTrouble;
