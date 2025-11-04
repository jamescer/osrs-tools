import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeviousMinds: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Devious Minds',
  // Quests: Wanted!, Troll Stronghold, Doric's Quest, Enter the Abyss. Skills: Smithing 65, Runecraft 50, Fletching 50
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'The Return of Zaros',
  rewards: {
    areas: [],
    experience: [
      { amount: 5000, skill: Skill.Fletching },
      { amount: 5000, skill: Skill.Runecraft },
      { amount: 6500, skill: Skill.Smithing },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'deviousMinds',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Devious_Minds',
};

export default DeviousMinds;
