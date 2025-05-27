import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const RagAndBoneMan: Quest = {
  id: 0,
  name: 'Rag and Bone Man',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
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
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
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
