import { Quest, QuestStatus } from '../../../src/model/quest/Quest';
import { LevelRequirement, QuestRequirement } from '../../../src/model/Requirement';
import { QuestDifficulty, QuestLength } from '../../../src/model/quest/types';

export const simpleQuest: Quest = {
  id: 1,
  name: 'Simple Quest',
  description: 'A quest with no requirements.',
  difficulty: QuestDifficulty.Novice,
  steps: [],
  requirements: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'SimpleQuest',
  url: '',
  members: false,
  questPoints: 1,
  length: QuestLength.Short,
  age: 'Fifth',
  startLocation: '',
  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: { questPoints: 1 },
};

export const skillQuest: Quest = {
  ...simpleQuest,
  id: 2,
  name: 'Skill Quest',
  requirements: [new LevelRequirement('attack', 50, false)],
};

export const boostableSkillQuest: Quest = {
  ...simpleQuest,
  id: 3,
  name: 'Boostable Skill Quest',
  requirements: [new LevelRequirement('herblore', 90, true)],
};

export const questReqQuest: Quest = {
  ...simpleQuest,
  id: 4,
  name: 'Quest Req Quest',
  requirements: [new QuestRequirement('Simple Quest')],
};

export const recursiveQuest: Quest = {
  ...simpleQuest,
  id: 5,
  name: 'Recursive Quest',
  requirements: [new QuestRequirement('Quest Req Quest')],
};

export const multiRequirementQuest: Quest = {
  ...simpleQuest,
  id: 6,
  name: 'Multi Requirement Quest',
  difficulty: QuestDifficulty.Master,
  requirements: [
    new LevelRequirement('attack', 70, false),
    new LevelRequirement('defence', 70, false),
    new LevelRequirement('strength', 70, false),
    new LevelRequirement('ranged', 70, true),
    new QuestRequirement('Simple Quest'),
    new QuestRequirement('Skill Quest'),
  ],
  series: 'Combat',
};

export const circularQuest1: Quest = {
  ...simpleQuest,
  id: 7,
  name: 'Circular Quest 1',
  requirements: [new QuestRequirement('Circular Quest 2')],
};

export const circularQuest2: Quest = {
  ...simpleQuest,
  id: 8,
  name: 'Circular Quest 2',
  requirements: [new QuestRequirement('Circular Quest 1')],
};
