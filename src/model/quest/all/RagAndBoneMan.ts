import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const RagAndBoneMan: Quest = {
  id: 0,
  name: 'Rag and Bone Man',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'ragAndBoneMan',
  url: 'https://oldschool.runescape.wiki/w/Rag_and_Bone_Man',
  series: null,
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default RagAndBoneMan;
