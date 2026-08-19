import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TheHeartOfDarkness: Quest = {
  age: 'Fifth Age',
  description: 'Venture into the corrupted heart of a dark power at sea and confront the evil lurking within its depths.',
  difficulty: QuestDifficulty.Experienced,
  id: 1030,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Heart of Darkness',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Twilight Emissaries',
  shortName: 'theHeartOfDarkness',
  startLocation: 'Darkness',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Heart_of_Darkness',
};
export default TheHeartOfDarkness;
