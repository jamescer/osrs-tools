import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ThroneOfMiscellania: Quest = {
  id: 0,
  name: 'Throne of Miscellania',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Heroes\' Quest'),
    new QuestRequirement('The Fremennik Trials'),
    new LevelRequirement('Woodcutting', 45, false),
    new LevelRequirement('Mining', 30, false),
    new LevelRequirement('Fishing', 30, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'throneOfMiscellania',
  url: 'https://oldschool.runescape.wiki/w/Throne_of_Miscellania',
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
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ThroneOfMiscellania;
