import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const EnakhrasLament: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Enakhra's Lament",
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [], // Skills: Crafting 50, Firemaking 45, Prayer 43, Magic 39, Mining 45
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'enakhrasLament',
  url: 'https://oldschool.runescape.wiki/w/Enakhra%27s_Lament',
  series: 'Mahjarrat',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Crafting: 7000, Firemaking: 7000, Magic: 7000, Mining: 7000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default EnakhrasLament;
