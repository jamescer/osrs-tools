import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ShieldOfArrav: Quest = {
  age: 'Fifth Age',
  description: 'Reunite the two halves of the legendary Shield of Arrav by infiltrating one of Varrock\'s rival criminal gangs.',
  
  difficulty: QuestDifficulty.Novice,
  id: 1004,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Shield of Arrav',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'shieldOfArrav',
  startLocation: 'Varrock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Shield_of_Arrav',
};
export default ShieldOfArrav;
