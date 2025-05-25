import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DemonSlayer: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Demon Slayer",
  members: false,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "demonSlayer",
  url: 'https://oldschool.runescape.wiki/w/Demon_Slayer',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: {},
    questPoints: 3,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DemonSlayer;
