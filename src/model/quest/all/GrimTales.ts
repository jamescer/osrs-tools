import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const GrimTales: Quest = {
  description: '',
  difficulty: QuestDifficulty.Master,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Grim Tales',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [
      { amount: 6000, skill: Skill.Agility },
      { amount: 4000, skill: Skill.Farming },
      { amount: 5000, skill: Skill.Herblore },
      { amount: 5000, skill: Skill.Hitpoints },
      { amount: 6000, skill: Skill.Thieving },
      { amount: 14000, skill: Skill.Woodcutting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'grimTales',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Grim_Tales',
};

export default GrimTales;
