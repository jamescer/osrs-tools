import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DragonSlayer: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Dragon Slayer",
  members: false,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [], // Skill: quest 32, Crafting 8
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "dragonSlayer",
  url: 'https://oldschool.runescape.wiki/w/Dragon_Slayer',
  series: 'Guild',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Defence: 18650, Strength: 18650 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DragonSlayer;
