import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TheCorsairCurse: Quest = {
  age: 'Fifth Age',
  description: 'Help the corsair captain Arsen and his crew lift a mysterious curse that has befallen their hidden cove.',
  difficulty: QuestDifficulty.Intermediate,
  id: 1013,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'The Corsair Curse',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: null,
  shortName: 'theCorsairCurse',
  startLocation: 'Port',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Corsair_Curse',
};
export default TheCorsairCurse;
