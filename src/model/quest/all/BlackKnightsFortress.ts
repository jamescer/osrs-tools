import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const BlackKnightsFortress: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Black Knights' Fortress",
  members: false,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "blackKnightsFortress",
  url: "https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
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
    experience: {},
    questPoints: 3,
    items: [],
    areas: [],
    grants: [],
  },
};

export default BlackKnightsFortress;
