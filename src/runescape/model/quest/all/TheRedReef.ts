import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheRedReef: Quest = {
  age: 'Fifth Age',
  description: 'Help Floopa overcome her injury while investigating the dealings of the Red Reef Trading Company, a potential new threat to the Tortugan way of life.',
  difficulty: QuestDifficulty.Experienced,
  id: 1050,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Red Reef',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Troubled Tortugans'),
    new LevelRequirement(Skill.Sailing, 52, false),
    new LevelRequirement(Skill.Smithing, 48, false),
  ],
  rewards: {
    areas: ['Red Rock', 'The Sacred Grove'],
    experience: [
      { amount: 15000, skill: Skill.Sailing },
      { amount: 5000, skill: Skill.Smithing },
    ],
    items: [{ name: "Bosun's workbench schematic" }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Tortugan',
  shortName: 'theRedReef',
  startLocation: 'Elder Raley, the Great Conch',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Red_Reef',
};

export default TheRedReef;
