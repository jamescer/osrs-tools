import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DoricsQuest: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Doric's Quest",
  members: false,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [], // Skill: Mining 15
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "doricsQuest",
  url: 'https://oldschool.runescape.wiki/w/Doric%27s_Quest',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Mining: 1300 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DoricsQuest;
