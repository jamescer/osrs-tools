import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RuneMysteries: Quest = {
  age: 'Fifth Age',
  description: 'Discover the secrets of the rune essence mine and unlock the ability to craft your own runes at the altars.',
  difficulty: QuestDifficulty.Novice,
  id: 1007,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Rune Mysteries',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: 'Order of Wizards',
  shortName: 'runeMysteries',
  startLocation: 'Lumbridge',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Rune_Mysteries',
};
export default RuneMysteries;
