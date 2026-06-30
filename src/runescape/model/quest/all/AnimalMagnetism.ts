import { LevelRequirement, QuestRequirement } from "../../Requirement";
import { Skill } from "../../account/Skill";
import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus } from "../Quest";

/**
 * Animal Magnetism quest data
 * @author James Cerniglia
 * @see https://oldschool.runescape.wiki/w/Animal_Magnetism for quest details and requirements
 */
const AnimalMagnetism: Quest = {
  age: "Fifth Age",
  description: "Help bury the restless dead by collecting a variety of bones and skulls scattered across Gielinor. Investigate a sinister force manipulating these undead creatures.",
  difficulty: QuestDifficulty.Intermediate,
  id: 1,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,

  // Assign a unique ID if available
  name: "Animal Magnetism",
  // Quests: The Restless Ghost, Ernest the Chicken, Priest in Peril. Skills: Slayer 18, Crafting 19, Ranged 30, Woodcutting 35, Prayer 31
  questPoints: 3,
  recommendations: [
    { name: "Teleportation runes", type: "item" },
    { name: "Teleport to House", type: "item" },
    { name: "Dusty key", note: "Optional for Dusty Basins route", type: "item" },
    { name: "Basic combat equipment", type: "item" },
    { name: "A player-owned house with fairy ring", note: "Helpful for transportation", type: "item" },
  ],
  recommendedPrayers: [],
  recommendedSkills: {
    Ranged: 30,
  },
  requirements: [
    new QuestRequirement("The Restless Ghost"),
    new QuestRequirement("Ernest the Chicken"),
    new QuestRequirement("Priest in Peril"),
    new LevelRequirement("Slayer", 18, false),
    new LevelRequirement("Crafting", 19, false),
    new LevelRequirement("Ranged", 30, false),
    new LevelRequirement("Woodcutting", 35, false),
    new LevelRequirement("Prayer", 31, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 1000, skill: Skill.Crafting },
      { amount: 1000, skill: Skill.Fletching },
      { amount: 1000, skill: Skill.Slayer },
      { amount: 2500, skill: Skill.Woodcutting },
    ],
    items: [{ name: "Ava's Attractor" }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [{ description: "Access to Ava's shop and Attractor device" }],
  },
  series: null,
  shortName: "animalMagnetism",

  startLocation: "Port Phasmatys, Barrows area, Ava's workshop",
  status: QuestStatus.NotStarted,
  steps: [
    "Talk to Ava in her workshop near Port Phasmatys, who is experimenting with magnetism",
    "Collect various bones and skulls from undead creatures across Gielinor (Ghosts, Skeletons, Zombies)",
    "Return collected bones to Ava to enchant them with magical magnetism",
    "Travel to multiple locations to retrieve specific bones and skulls Ava specifies",
    "Investigate a portal or magical force controlling the undead",
    "Complete a ritual to release the undead from the sinister magnetism",
    "Return to Ava to complete the quest and receive your reward",
  ],
  url: "https://oldschool.runescape.wiki/w/Animal_Magnetism",
};

export default AnimalMagnetism;
