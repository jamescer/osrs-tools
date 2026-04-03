import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from "../../Requirement";
import { QuestDifficulty, QuestLength } from "../enums";
import { Quest, QuestStatus, QuestRecommendation } from "../Quest";

/**
 * https://oldschool.runescape.wiki/w/Wanted!
 *
 * Start point	Map icon Speak to Sir Tiffy Cashien in Falador Park. Show on map
Official difficulty	Intermediate
Official length	Medium
Description	A wanted man is on the loose. Can you track him down?
Requirements
a_squeezer

Quest points 32 Quest points
Completion of the following quests:
Recruitment Drive
Black Knights' Fortress
Druidic Ritual
The Lost Tribe
Rune Mysteries
Goblin Diplomacy
Priest in Peril
Enter the Abyss
The ability to defeat a level 32 Black Knight.
Items required
10,000 coins, or:
Law rune
Enchanted gem (bought from a Slayer Master)
Molten glass
20 un-noted Rune essence or pure essence (you'll get them back)
 The player must deliver all 20 rune essence at once
Light source (Note: Candles, torches and oil lamps can cause swamp gas explosions if going off-route, and need a tinderbox to stay lit)
[uncheck all]
Recommended
Combat level 15 Combat level
Armour and some food.
Stamina or energy potions.
Fast travel to several locations that are always visited during the quest
Falador (Falador teleport)
Canifis (Kharyrll Teleport, Ectophial, Salve Graveyard Teleport, Fenkenstrain's Castle Teleport, Fairy Rings to CKS or Slayer Ring to the Slayer Tower)
Champions' Guild and Varrock (Combat Bracelet, Chronicle or Varrock teleport)
Lumbridge (Lumbridge teleport)
Fast travel to several randomly chosen locations
Ardougne (Ardougne teleport)
Brimhaven (travel from Ardougne)
Rellekka (Enchanted lyre or Fremennik sea boots, or House teleport if your house is in Rellekka)
Castle Wars (Ring of Dueling)
Al Kharid (Ring of Dueling)
Musa Point (Amulet of Glory to Karamja)
Draynor Village (Amulet of Glory)
Tree Gnome Stronghold (Gnome Glider, Balloon Transport System, Spirit trees or Slayer Ring to Stronghold Slayer Cave)
Goblin Village (walk from Falador)
Yanille (Watchtower teleport)
McGrubor's Wood (Combat Bracelet to Ranging Guild or Fairy Rings to ALS)
Grave of Scorpius (Ourania Teleport, Spirit Tree to Battle of Khazard, or Ring of Dueling to Castle Wars)
[uncheck all]
Enemies to defeat
Black Knight (level 32)
Solus Dellagar
Ironman concerns
 The player must have 20 inventory spots to deliver all 20 rune essence at once. If the miniquest Enter the Abyss has been completed, the table in the rune shop may be used to hold rune essence from multiple trips to bring to the nearby chaos altar while inventory items are dropped without the worry of them despawning.

 Rewards

1 Quest points Quest point
Slayer 5,000 Slayer experience
Access to the armoury of the White Knights (White equipment)
Required for completing
 */
const Wanted: Quest = {
  age: "",
  description: "A wanted man is on the loose. Can you track him down?",
  difficulty: QuestDifficulty.Intermediate,
  id: 132,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Wanted!",
  questPoints: 1,
  recommendations: [
    { name: "Combat", quantity: 15, type: "level" },
    { name: "Armour and some food", type: "item" },
    { name: "Stamina or energy potions", type: "item" },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 15 },
  requirements: [
    new QuestRequirement("Recruitment Drive"),
    new QuestRequirement("Black Knights Fortress"),
    new QuestRequirement("Druidic Ritual"),
    new QuestRequirement("The Lost Tribe"),
    new QuestRequirement("Rune Mysteries"),
    new QuestRequirement("Goblin Diplomacy"),
    new QuestRequirement("Priest in Peril"),
    new QuestRequirement("Enter the Abyss"),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 5000, skill: Skill.Slayer }],

    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: "Access to the armoury of the White Knights (White equipment)" }],
  },
  series: "Temple Knight, #2",
  shortName: "wanted",
  startLocation: "Falador Park",
  status: QuestStatus.NotStarted,
  steps: [],
  url: "https://oldschool.runescape.wiki/w/Wanted!",
};

export default Wanted;
