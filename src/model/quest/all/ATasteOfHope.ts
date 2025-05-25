import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const ATasteOfHope: Quest = {
  id: 0, // Assign a unique ID if available
  name: "A Taste of Hope",
  members: true,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [], // Quests: Darkness of Hallowvale, Skills: Crafting 48, Agility 45, Attack 40, Herblore 40, Slayer 38
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "aTasteOfHope",
  url: 'https://oldschool.runescape.wiki/w/A_Taste_of_Hope',
  series: 'Myreque',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: {},
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default ATasteOfHope;
