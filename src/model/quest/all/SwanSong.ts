import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const SwanSong: Quest = {
  id: 0,
  name: 'Swan Song',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [
    new QuestRequirement('One Small Favour'),
    new LevelRequirement('Magic', 66, false),
    new LevelRequirement('Cooking', 62, false),
    new LevelRequirement('Fishing', 62, false),
    new LevelRequirement('Smithing', 45, false),
    new LevelRequirement('Firemaking', 42, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'swanSong',
  url: 'https://oldschool.runescape.wiki/w/Swan_Song',
  series: null,
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default SwanSong;
