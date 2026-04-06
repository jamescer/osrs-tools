import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus } from "../Quest";
const MountainDaughter: Quest = {
  age: "Fifth Age",
  description: "Help a troll find his daughter.",
  difficulty: QuestDifficulty.Intermediate,
  id: 139,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Mountain Daughter",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: "None",
  shortName: "Mountain Daughter",
  startLocation: "Mountain",
  status: QuestStatus.NotStarted,
  steps: ["Help troll"],
  url: "https://oldschool.runescape.wiki/w/Mountain_Daughter"
};
export default MountainDaughter;
