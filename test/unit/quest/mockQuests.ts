import { Quest, QuestStatus } from '../../../src/model/quest/Quest';
import { RequirementType, LevelRequirement, QuestRequirement } from '../../../src/model/Requirement';

export const simpleQuest: Quest = {
  id: 1,
  name: 'Simple Quest',
  description: 'A quest with no requirements.',
  difficulty: 'Novice',
  steps: [],
  requirements: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'SimpleQuest',
  url: '',
  members: false,
  questPoints: 1,
  length: 'Short',
  age: 'Fifth',
  startLocation: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: 'Fifth',
  recommendedItems: [],
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
