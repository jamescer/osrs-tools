import { Skill } from '../../account/Skill';
import { LevelRequirement, RequirementType } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const agilityRequirement: LevelRequirement = {
  boostable: true,
  description: '',
  level: 35,
  skillName: 'agility',
  type: RequirementType.Level,
};

const HorrorFromTheDeep: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Horror from the Deep',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [agilityRequirement],
  rewards: {
    areas: [],
    experience: [
      { amount: 4662, skill: Skill.Magic },
      { amount: 4662.5, skill: Skill.Ranged },
      { amount: 4662.5, skill: Skill.Strength },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Fremennik',
  shortName: 'horrorFromTheDeep',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Horror_from_the_Deep',
};

export default HorrorFromTheDeep;
