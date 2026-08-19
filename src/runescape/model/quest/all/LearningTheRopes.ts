import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LearningTheRopes: Quest = {
  age: 'Fifth Age',
  description: 'Tutorial quest teaching the basics of Old School RuneScape.',
  difficulty: QuestDifficulty.Novice,
  id: 1000,
  length: QuestLength.VeryShort,
  members: false,
  miniquest: false,
  name: 'Learning the Ropes',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'learningTheRopes',
  startLocation: 'Tutorial Island',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Learning_the_Ropes',
};

export default LearningTheRopes;
