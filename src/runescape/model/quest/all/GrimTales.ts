import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const GrimTales: Quest = {
  age: 'Fifth Age',
  description: 'Help Sylas the collector obtain three rare fairy tale items — a giant\'s hand, a magic mirror, and a golden apple.',
  difficulty: QuestDifficulty.Master,
  id: 52,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Grim Tales',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Witch's House"),
    new LevelRequirement(Skill.Farming, 45, true),
    new LevelRequirement(Skill.Herblore, 52, true),
    new LevelRequirement(Skill.Thieving, 58, true),
    new LevelRequirement(Skill.Agility, 59, true),
    new LevelRequirement(Skill.Woodcutting, 71, true),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 25000, skill: Skill.Agility },
      { amount: 10000, skill: Skill.Farming },
      { amount: 15000, skill: Skill.Herblore },
      { amount: 5000, skill: Skill.Hitpoints },
      { amount: 25000, skill: Skill.Thieving },
      { amount: 60000, skill: Skill.Woodcutting },
    ],
    items: [{ name: 'Dwarven helmet' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Glod accessible in the Nightmare Zone', url: 'https://oldschool.runescape.wiki/w/Nightmare_Zone' },
    ],
  },
  series: null,
  shortName: 'grimTales',

  startLocation: 'Sylas, Taverley, just south of the house portal',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Grim_Tales',
};

export default GrimTales;
