import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const ATailOfTwoCats: Quest = {
  id: 0, // Assign a unique ID if available
  name: "A Tail of Two Cats",
  members: true,
  difficulty: 'Intermediate',
  length: 'Long',
  requirements: [], // Only quest requirement: Icthlarin's Little Helper
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "aTailOfTwoCats",
  url: 'https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats',
  series: 'Dragonkin',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: {},
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default ATailOfTwoCats;
