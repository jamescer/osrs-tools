import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const FamilyCrest: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Family Crest',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [], // Skills: Mining 40, Smithing 40, Magic 59, Crafting 40
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'familyCrest',
  url: 'https://oldschool.runescape.wiki/w/Family_Crest',
  series: null,
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium',
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

export default FamilyCrest;
