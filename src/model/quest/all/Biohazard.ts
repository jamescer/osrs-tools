import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const Biohazard: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Biohazard",
  members: true,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "biohazard",
  url: 'https://oldschool.runescape.wiki/w/Biohazard',
  series: 'Elf',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Thieving: 1250 },
    questPoints: 3,
    items: [],
    areas: [],
    grants: [],
  },
};

export default Biohazard;
