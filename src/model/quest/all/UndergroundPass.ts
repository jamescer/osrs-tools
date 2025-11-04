import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const UndergroundPass: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'Underground Pass',
  questPoints: 5,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new QuestRequirement('Biohazard'), new LevelRequirement('Ranged', 25, false)],
  recommendedSkills: {},
  series: 'Elf',
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

  shortName: 'undergroundPass',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Underground_Pass',
};

export default UndergroundPass;
