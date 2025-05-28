import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const BoneVoyage: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Bone Voyage",
  members: true,
  difficulty: 'Intermediate',
  length: 'Short - Medium',
  requirements: [], // Quests: The Dig Site
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "boneVoyage",
  url: 'https://oldschool.runescape.wiki/w/Bone_Voyage',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Short - Medium',
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

export default BoneVoyage;
