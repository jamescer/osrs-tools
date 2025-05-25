import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DeathPlateau: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Death Plateau',
  members: true,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'deathPlateau',
  url: 'https://oldschool.runescape.wiki/w/Death_Plateau',
  series: 'Troll',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Attack: 3000 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DeathPlateau;
