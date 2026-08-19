import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const BarbarianTraining: Quest = {
  age: 'Fifth Age',
  description:
    'Learn ancient barbarian skills from Otto Godblessed, including barbarian fishing, firemaking, and herblore.',
  difficulty: QuestDifficulty.Intermediate,
  id: 201,
  length: QuestLength.Medium,
  members: true,
  miniquest: true,
  name: 'Barbarian Training',
  questPoints: 0,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Agility, 15, false),
    new LevelRequirement(Skill.Strength, 15, false),
    new LevelRequirement(Skill.Fishing, 55, false),
    new LevelRequirement(Skill.Firemaking, 35, false),
    new LevelRequirement(Skill.Herblore, 4, false),
    new LevelRequirement(Skill.Crafting, 11, false),
    new LevelRequirement(Skill.Smithing, 5, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Barbarian fishing (Leaping trout, salmon, sturgeon)' },
      { description: 'Barbarian firemaking (log burning on fire)' },
      { description: 'Barbarian herblore (Barbarian potions)' },
      { description: 'Ability to use the Ancient Cavern and fight Mithril dragons' },
    ],
  },
  series: 'Barbarian',
  shortName: 'barbarianTraining',
  startLocation: 'Otto\'s Grotto, near Baxtorian Falls',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Barbarian_Training',
};

export default BarbarianTraining;
