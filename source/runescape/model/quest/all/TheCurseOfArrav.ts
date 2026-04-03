import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus } from "../Quest";

const TheCurseOfArrav: Quest = {
  age: "Fifth Age",
  description: "Battle the curse that has affected Arrav through the ages.",
  difficulty: QuestDifficulty.Master,
  id: 170,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "The Curse of Arrav",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: "Mahjarrat #10",
  shortName: "The Curse of Arrav",
  startLocation: "Varrock Palace",
  status: QuestStatus.NotStarted,
  steps: ["Battle the curse of Arrav"],
  url: "https://oldschool.runescape.wiki/w/The_Curse_of_Arrav",
};

export default TheCurseOfArrav;
