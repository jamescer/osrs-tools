import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const GhostsAhoy: Quest = {
  id: 0,
  name: 'Ghosts Ahoy',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium - Long',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'ghostsAhoy',
  url: 'https://oldschool.runescape.wiki/w/Ghosts_Ahoy',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Prayer: 2400 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default GhostsAhoy;
