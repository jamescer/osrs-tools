import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const PrinceAliRescue: Quest = {
  age: 'Fifth Age',
  description: 'Rescue Prince Ali of Al Kharid from Lady Keli\'s bandit camp in Draynor Village using a clever disguise and escape plan.',
  
  difficulty: QuestDifficulty.Novice,
  id: 1006,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Prince Ali Rescue',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 3, unlocks: [] },
  series: 'Kharidian',
  shortName: 'princeAliRescue',
  startLocation: 'Al Kharid',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Prince_Ali_Rescue',
};
export default PrinceAliRescue;
