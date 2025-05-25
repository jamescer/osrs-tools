import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DeviousMinds: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Devious Minds',
  members: true,
  difficulty: 'Experienced',
  length: 'Short',
  requirements: [], // Quests: Wanted!, Troll Stronghold, Doric's Quest, Enter the Abyss. Skills: Smithing 65, Runecraft 50, Fletching 50
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'deviousMinds',
  url: 'https://oldschool.runescape.wiki/w/Devious_Minds',
  series: 'The Return of Zaros',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Fletching: 5000, Runecraft: 5000, Smithing: 6500 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DeviousMinds;
