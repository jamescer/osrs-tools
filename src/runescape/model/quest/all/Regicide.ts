import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const Regicide: Quest = {
  age: 'Fifth Age',
  description:
    'Assassinate a tyrant king threatening the elf kingdom. A dangerous mission requiring cunning and combat prowess.',
  difficulty: QuestDifficulty.Experienced,
  id: 87,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Regicide',
  questPoints: 3,
  recommendations: [
    { name: 'Combat equipment', note: 'Melee focused', type: 'item' },
    { name: 'Food', note: 'High healing for boss fight', type: 'item' },
    { name: 'Anti-poison', note: 'Required for segments', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Agility: 56, Combat: 60 },
  requirements: [
    new QuestRequirement('Underground Pass'),
    new LevelRequirement(Skill.Crafting, 10, false),
    new LevelRequirement(Skill.Agility, 56, true),
  ],
  rewards: {
    areas: ['Zanaris crown room access'],
    experience: [{ amount: 13750, skill: Skill.Agility }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
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
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Regicide',
};

export default Regicide;
