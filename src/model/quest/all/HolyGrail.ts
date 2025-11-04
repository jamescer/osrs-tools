import { LevelRequirement, RequirementType } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const attackRequirement: LevelRequirement = {
  boostable: false,
  description: '',
  level: 20,
  skillName: 'attack',
  type: RequirementType.Level,
};
const HolyGrail: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Holy Grail',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [attackRequirement],
  recommendedSkills: {},
  series: 'Camelot (#2)',
  rewards: {
    areas: [],
    experience: [
      { amount: 15300, skill: 'Defence' },
      { amount: 11000, skill: 'Prayer' },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'holyGrail',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Holy_Grail',
};

export default HolyGrail;
