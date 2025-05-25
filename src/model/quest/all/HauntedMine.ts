import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const HauntedMine: Quest = {
  id: 0,
  name: 'Haunted Mine',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium - Long',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'hauntedMine',
  url: 'https://oldschool.runescape.wiki/w/Haunted_Mine',
  series: null,
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Strength: 22000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default HauntedMine;
