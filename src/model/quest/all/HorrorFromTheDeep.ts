import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, RequirementType } from '../../Requirement';

const agilityRequirement: LevelRequirement = {
  skillName: 'agility',
  level: 35,
  boostable: true,
  type: RequirementType.Level,
  description: '',
};

const HorrorFromTheDeep: Quest = {
  id: 0,
  name: 'Horror from the Deep',
  members: true,
  difficulty: 'Experienced',
  length: 'Short',
  requirements: [agilityRequirement],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'horrorFromTheDeep',
  url: 'https://oldschool.runescape.wiki/w/Horror_from_the_Deep',
  series: 'Fremennik',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Magic: 4662, Ranged: 4662.5, Strength: 4662.5 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default HorrorFromTheDeep;
