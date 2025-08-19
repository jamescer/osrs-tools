import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const TheDepthsOfDespair: Quest = {
  id: 0,
  name: 'The Depths of Despair',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Short,
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new LevelRequirement('Agility', 18, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theDepthsOfDespair',
  url: 'https://oldschool.runescape.wiki/w/The_Depths_of_Despair',
  series: 'Great Kourend',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheDepthsOfDespair;
