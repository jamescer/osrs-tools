import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SwanSong: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Swan Song',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('One Small Favour'),
    new LevelRequirement('Magic', 66, false),
    new LevelRequirement('Cooking', 62, false),
    new LevelRequirement('Fishing', 62, false),
    new LevelRequirement('Smithing', 45, false),
    new LevelRequirement('Firemaking', 42, false),
  ],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'swanSong',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Swan_Song',
};

export default SwanSong;
