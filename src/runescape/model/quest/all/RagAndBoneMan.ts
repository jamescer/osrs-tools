import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const RagAndBoneMan: Quest = {
  age: 'Fifth Age',
  description: 'Collect the bones of various creatures across Gielinor for the Odd Old Man, who is assembling a strange collection.',
  difficulty: QuestDifficulty.Novice,
  id: 83,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Rag and Bone Man I',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Rag and Bone Man',
  shortName: 'ragAndBoneManI',

  startLocation: 'Odd Old Man, north of Varrock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Rag_and_Bone_Man_I',
};

export default RagAndBoneMan;
