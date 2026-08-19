import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const SheepShearer: Quest = {
  age: 'Fifth Age',
  description: 'Shear 20 sheep for Fred the Farmer near Lumbridge and return the wool to earn a small reward.',
  difficulty: QuestDifficulty.Novice,
  id: 1003,
  length: QuestLength.VeryShort,
  members: false,
  miniquest: false,
  name: 'Sheep Shearer',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'sheepShearer',
  startLocation: 'Lumbridge Farm',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Sheep_Shearer',
};
export default SheepShearer;
