import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const GrimTales: Quest = {
  id: 0,
  name: 'Grim Tales',
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.Medium,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'grimTales',
  url: 'https://oldschool.runescape.wiki/w/Grim_Tales',
  series: null,
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Agility, amount: 6000 },
      { skill: Skill.Farming, amount: 4000 },
      { skill: Skill.Herblore, amount: 5000 },
      { skill: Skill.Hitpoints, amount: 5000 },
      { skill: Skill.Thieving, amount: 6000 },
      { skill: Skill.Woodcutting, amount: 14000 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default GrimTales;
