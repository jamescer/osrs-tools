import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const RomeoAndJuliet: Quest = {
  age: 'Fifth Age',
  description: 'A tale of star-crossed lovers in Varrock.',
  difficulty: QuestDifficulty.Novice,
  id: 1002,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Romeo & Juliet',
  questPoints: 5,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 5, unlocks: [] },
  series: 'None',
  shortName: 'Romeo & Juliet',
  startLocation: 'Varrock',
  status: QuestStatus.NotStarted,
  steps: ['Help Romeo win over Juliet'],
  url: 'https://oldschool.runescape.wiki/w/Romeo_%26_Juliet',
};
export default RomeoAndJuliet;
