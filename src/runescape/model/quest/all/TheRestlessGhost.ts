import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TheRestlessGhost: Quest = {
  age: 'Fifth Age',
  description: 'Help a restless ghost in Lumbridge\'s graveyard find peace by recovering its skull from a dark sorcerer\'s altar.',
  
  difficulty: QuestDifficulty.Novice,
  id: 1017,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'The Restless Ghost',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'theRestlessGhost',
  startLocation: 'Lumbridge Church',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Restless_Ghost',
};
export default TheRestlessGhost;
