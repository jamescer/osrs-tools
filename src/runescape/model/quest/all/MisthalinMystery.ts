import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const MisthalinMystery: Quest = {
  age: 'Fifth Age',
  description: 'Investigate a series of murders occurring in an eerie mansion on the outskirts of Varrock.',
  difficulty: QuestDifficulty.Novice,
  id: 1012,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Misthalin Mystery',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'misthalinMystery',
  startLocation: 'Misthalin',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Misthalin_Mystery',
};
export default MisthalinMystery;
