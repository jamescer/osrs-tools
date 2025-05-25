import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const CreatureOfFenkenstrain: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Creature of Fenkenstrain',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [], // Quests: Priest in Peril, The Restless Ghost. Skills: Crafting 20, Thieving 25
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'creatureOfFenkenstrain',
  url: 'https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Thieving: 1000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default CreatureOfFenkenstrain;
