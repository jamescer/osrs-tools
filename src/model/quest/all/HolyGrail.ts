import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, RequirementType } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const attackRequirement: LevelRequirement = {
  skillName: 'attack',
  level: 20,
  boostable: false,
  type: RequirementType.Level,
  description: '',
};
const HolyGrail: Quest = {
  id: 0,
  name: 'Holy Grail',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Medium,
  requirements: [attackRequirement],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'holyGrail',
  url: 'https://oldschool.runescape.wiki/w/Holy_Grail',
  series: 'Camelot (#2)',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Defence', amount: 15300 },
      { skill: 'Prayer', amount: 11000 },
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

export default HolyGrail;
