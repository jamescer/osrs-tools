import { Skill } from '../../account/Skill';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RagAndBoneManII: Quest = {
  age: 'Fifth Age',
  description: 'Collect a second set of unusual bones from more exotic creatures across Gielinor for the strange collector near the Wilderness.',
  difficulty: QuestDifficulty.Experienced,
  id: 1024,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Rag and Bone Man II',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Rag and Bone Man I'),
    new LevelRequirement(Skill.Slayer, 40, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: 'Rag and Bone Man',
  shortName: 'ragAndBoneManII',
  startLocation: 'Odd Old Man, north of Varrock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Rag_and_Bone_Man_II',
};
export default RagAndBoneManII;
