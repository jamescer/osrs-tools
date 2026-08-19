import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeathOnTheIsle: Quest = {
  age: 'Fifth Age',
  description: 'Investigate a mysterious string of deaths occurring on a remote island and uncover the killer\'s identity.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 1038,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Death on the Isle',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: null,
  shortName: 'deathOnTheIsle',
  startLocation: 'Isle',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Death_on_the_Isle',
};
export default DeathOnTheIsle;
