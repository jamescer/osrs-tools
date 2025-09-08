import { Quest, QuestStatus } from '../Quest';
import { QuestDifficulty, QuestLength } from '../enums';
const BoneVoyage: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Bone Voyage',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Short,
  requirements: [], // Quests: The Dig Site
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'boneVoyage',
  url: 'https://oldschool.runescape.wiki/w/Bone_Voyage',
  series: null,
  age: '',
    recommendations: [
      {
        type: 'item',
        name: 'Digsite pendant',
        note: 'Useful for fast travel to Fossil Island.'
      }
    ],
    recommendedSkills: {},
    recommendedPrayers: [],
    rewards: {
      experience: [],
      questPoints: 1,
      items: [
        { name: 'Access to Fossil Island' }
      ],
      areas: ['Fossil Island'],
      unlocks: [
        { description: 'Ability to travel to Fossil Island' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default BoneVoyage;
