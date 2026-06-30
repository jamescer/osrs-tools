import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus } from "../Quest";
const TheCorsairCurse: Quest = {
  age: "Fifth Age",
  description: "Deal with a corsair curse.",
  difficulty: QuestDifficulty.Intermediate,
  id: 1013,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: "The Corsair Curse",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: "None",
  shortName: "The Corsair Curse",
  startLocation: "Port",
  status: QuestStatus.NotStarted,
  steps: ["Deal with curse"],
  url: "https://oldschool.runescape.wiki/w/The_Corsair_Curse",
};
export default TheCorsairCurse;
