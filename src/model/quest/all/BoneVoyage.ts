import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const BoneVoyage: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Bone Voyage',
  // Quests: The Dig Site
  questPoints: 1,
  recommendations: [
    {
      name: 'Digsite pendant',
      note: 'Useful for fast travel to Fossil Island.',
      type: 'item',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['Fossil Island'],
    experience: [],
    items: [{ name: 'Access to Fossil Island' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Ability to travel to Fossil Island' }],
  },
  series: null,
  shortName: 'boneVoyage',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Bone_Voyage',
};

export default BoneVoyage;
