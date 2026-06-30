import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const Regicide: Quest = {
  age: 'Fifth Age',
  description: 'Assassinate a tyrant king threatening the elf kingdom. A dangerous mission requiring cunning and combat prowess.',
  difficulty: QuestDifficulty.Master,
  id: 87,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Regicide',
  questPoints: 1,
  recommendations: [
    { name: 'Combat equipment', note: 'Melee focused', type: 'item' },
    { name: 'Food', note: 'High healing for boss fight', type: 'item' },
    { name: 'Anti-poison', note: 'Required for segments', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 60, Agility: 56 },
  requirements: [
    new QuestRequirement('Underground Pass'),
    new LevelRequirement('Agility', 56, false),
  ],
  rewards: {
    areas: ['Zanaris crown room access'],
    experience: [{ amount: 10000, skill: Skill.Strength }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      {
        description: 'Access to the Throne Room',
      },
      {
        description: 'Completion of Elf quest line requirements',
      },
    ],
  },
  series: 'Elf',
  shortName: 'regicide',

  startLocation: 'Zanaris palace, elf kingdom',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Zanaris.',
    'Meet with elf conspirators planning to overthrow the king.',
    'Gather intelligence about the king defenses.',
    'Collect items needed for the assassination plan.',
    'Navigate through palace guards and traps.',
    'Confront the king.',
    'Complete the mission and return.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Regicide',
};

export default Regicide;
