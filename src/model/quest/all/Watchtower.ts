import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const Watchtower: Quest = {
  id: 0,
  name: 'Watchtower',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [
    new LevelRequirement('Magic', 15, false),
    new LevelRequirement('Herblore', 14, false),
    new LevelRequirement('Agility', 40, false),
    new LevelRequirement('Thieving', 15, false),
  ],
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'watchtower',
  url: 'https://oldschool.runescape.wiki/w/Watchtower',
  series: null,
  age: '',

  recommendations: [],
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

export default Watchtower;
