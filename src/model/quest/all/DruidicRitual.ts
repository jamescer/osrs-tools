import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DruidicRitual: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Druidic Ritual",
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "druidicRitual",
  url: 'https://oldschool.runescape.wiki/w/Druidic_Ritual',
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
    experience: { Herblore: 250 },
    questPoints: 4,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DruidicRitual;
