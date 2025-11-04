import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const Watchtower: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'Watchtower',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new LevelRequirement('Magic', 15, false),
    new LevelRequirement('Herblore', 14, false),
    new LevelRequirement('Agility', 40, false),
    new LevelRequirement('Thieving', 15, false),
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

  shortName: 'watchtower',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Watchtower',
};

export default Watchtower;
