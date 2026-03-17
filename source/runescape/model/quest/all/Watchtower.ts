import { Skill } from "../../account/Skill";
import { LevelRequirement } from "../../Requirement";
import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus } from "../Quest";
const Watchtower: Quest = {
  age: "",
  description: "",
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: "Watchtower",
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Magic, 20, false),
    new LevelRequirement(Skill.Herblore, 14, false),
    new LevelRequirement(Skill.Defence, 40, false),
    new LevelRequirement(Skill.Thieving, 15, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 6000, skill: Skill.Magic },
      { amount: 6000, skill: Skill.Ranged },
      { amount: 6000, skill: Skill.Strength },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: null,
  shortName: "watchtower",

  startLocation: "",
  status: QuestStatus.NotStarted,
  steps: [],
  url: "https://oldschool.runescape.wiki/w/Watchtower",
};

export default Watchtower;
