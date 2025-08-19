import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const RoyalTrouble: Quest = {
  id: 0,
  name: 'Royal Trouble',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Medium,
  requirements: [
    new QuestRequirement('Throne of Miscellania'),
    new LevelRequirement('Agility', 40, false),
    new LevelRequirement('Slayer', 10, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'royalTrouble',
  url: 'https://oldschool.runescape.wiki/w/Royal_Trouble',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default RoyalTrouble;
