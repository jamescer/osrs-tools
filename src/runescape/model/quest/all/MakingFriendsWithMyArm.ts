import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus } from "../Quest";
const MakingFriendsWithMyArm: Quest = {
  age: "Fifth Age",
  description: "Make friends with an arm.",
  difficulty: QuestDifficulty.Master,
  id: 1042,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Making Friends with My Arm",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: "Troll, #5",
  shortName: "Making Friends with My Arm",
  startLocation: "Troll Land",
  status: QuestStatus.NotStarted,
  steps: ["Make friends"],
  url: "https://oldschool.runescape.wiki/w/Making_Friends_with_My_Arm",
};
export default MakingFriendsWithMyArm;
