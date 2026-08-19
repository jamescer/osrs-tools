import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const XMarksTheSpot: Quest = {
  age: 'Fifth Age',
  description: 'Follow the clues of a hand-drawn treasure map to dig up a buried chest somewhere near Draynor Manor.',
  difficulty: QuestDifficulty.Novice,
  id: 1009,
  length: QuestLength.VeryShort,
  members: false,
  miniquest: false,
  name: 'X Marks the Spot',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: 'Great Kourend',
  shortName: 'xMarksTheSpot',
  startLocation: 'Great Kourend',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/X_Marks_the_Spot',
};
export default XMarksTheSpot;
