import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TheIdesOfMilk: Quest = {
  age: 'Fifth Age',
  description: 'Embark on a peculiar Sailing voyage to resolve a strange dispute involving a missing cargo of milk.',
  difficulty: QuestDifficulty.Novice,
  id: 1011,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'The Ides of Milk',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'theIdesOfMilk',
  startLocation: 'Port Aldarin, Varlamore',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Ides_of_Milk',
};
export default TheIdesOfMilk;
