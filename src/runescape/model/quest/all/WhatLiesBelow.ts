import { Skill } from "../../account/Skill";
import { LevelRequirement } from "../../Requirement";
import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus, RecommendationType } from "../Quest";

/**
 * Start point	Map icon Talk to Rat Burgiss south of Varrock. Show on map
Official difficulty	Intermediate
Official length	Short
Description	A travelling trader has been stranded south of Varrock after his cart was attacked by local outlaws. He needs the help of a hero to recover his lost documents, but that's not all... The Varrock Palace Secret Guard (VPSG) are on the trail of treacherous dealings with the Monks of Zamorak. Will you be able to help the VPSG and uncover what lies below?
Completion of the following quests:
Rune Mysteries
Runecraft 35 Runecraft  [not boostable] [required to start]
Items required
Empty bowl
15 chaos runes
Access to the Chaos Altar (Chaos talisman or tiara, Catalytic tiara, or travelling through the Abyss or Temple of the Eye)
Recommended
Combat level 30 Combat level
Mining 42 Mining  [not boostable]
Weapon, armour, and some food if low leveled
Bronze pickaxe to avoid going into the Wilderness (a bronze pickaxe can be obtained during the quest)
Fast travel to several locations around Varrock;
Varrock square (Varrock teleport)
Outlaw camp (Ring of Wealth to the Grand Exchange, Skills Necklace to the Cooks' Guild or Varrock teleport if medium Varrock Diary completed)
South of Varrock (Chronicle, Combat bracelet to the Champions' Guild, or Senntisten teleport)
The canoe system (requires axe and level 27 woodcutting for the Dugout canoe)
[uncheck all]
Enemies to defeat
5 Outlaws (level 32)
King Roald (level 47)
 */
const WhatLiesBelow: Quest = {
  age: "",
  description:
    "A travelling trader has been stranded south of Varrock after his cart was attacked by local outlaws. He needs the help of a hero to recover his lost documents, but that's not all... The Varrock Palace Secret Guard (VPSG) are on the trail of treacherous dealings with the Monks of Zamorak. Will you be able to help the VPSG and uncover what lies below?",
  difficulty: QuestDifficulty.Intermediate,
  id: 135,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: "What Lies Below",
  questPoints: 2,
  recommendations: [
    { name: "30+ Combat level", type: RecommendationType.Tip },
    { name: "Weapon, armour, and some food", type: RecommendationType.Tip },
    { name: "Fast travel to several locations around Varrock", type: RecommendationType.Tip },
    { name: "Bronze pickaxe to avoid going into the Wilderness", type: RecommendationType.Item },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 30, Mining: 42 },
  requirements: [new LevelRequirement(Skill.Runecraft, 35, false)],
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
  series: null,
  releaseDate: "27 March 2007",
  shortName: "whatLiesBelow",
  leadDeveloper: "Danny J",
  startLocation: "South of Varrock",
  status: QuestStatus.NotStarted,
  steps: [],
  url: "https://oldschool.runescape.wiki/w/What_Lies_Below",
};

export default WhatLiesBelow;
