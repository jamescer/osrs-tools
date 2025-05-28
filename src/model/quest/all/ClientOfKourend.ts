import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const ClientOfKourend: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Client of Kourend",
  members: true,
  difficulty: 'Novice',
  length: 'Medium (15-20 minutes)',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "clientOfKourend",
  url: 'https://oldschool.runescape.wiki/w/Client_of_Kourend',
  series: 'Great Kourend',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium (15-20 minutes)',
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

export default ClientOfKourend;
