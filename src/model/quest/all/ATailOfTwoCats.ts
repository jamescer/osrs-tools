import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const ATailOfTwoCats: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'A Tail of Two Cats',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
  requirements: [], // Only quest requirement: Icthlarin's Little Helper
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aTailOfTwoCats',
  url: 'https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats',
  series: 'Dragonkin',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ATailOfTwoCats;
