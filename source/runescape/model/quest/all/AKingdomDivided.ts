import { LevelRequirement, QuestRequirement } from "../../Requirement";
import { QuestDifficulty, QuestLength, QuestStatus } from "../enums";
import { Quest } from "../Quest";

/**
 * A Kingdom Divided quest object.
 * @author James Cerniglia
 * @reference https://oldschool.runescape.wiki/w/A_Kingdom_Divided
 */
const AKingdomDivided: Quest = {
  age: "Modern",
  description:
    "Great Kourend: a land of wealth, comfort and security. Across its five cities, the people of this Kingdom work to bring peace and prosperity. However, all is not as it seems. Beneath this delicate façade lies an uncomfortable truth: the kingdom of Great Kourend is A Kingdom Divided. Since the death of the last king, Great Kourend has been ruled by the Kourend Council. Under the watchful gaze of the Council, Kourend has enjoyed a golden age of progression. But not all of its citizens are happy, and, spurred by the recent arrest of Councillor Sophia Hughes, allegations of corruption are growing. However, the political games of the Council may be the least of Kourend's concerns. A darker power is gathering in the Kingdom - one that could change the face of Gielinor forever...",
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: "A Kingdom Divided",
  questPoints: 2,
  recommendations: [
    { name: "Combat level 70+", note: "Recommended for boss fights", type: "tip" },
    { name: "43+ Prayer", note: "Protect from Magic, Missiles, Melee", type: "tip" },
    { name: "Stamina or energy potions", type: "item" },
    { name: "Antipoison", type: "item" },
    { name: "Kharedst's memoirs", type: "item" },
    { name: "Xeric's talisman", type: "item" },
    { name: "Games necklace", type: "item" },
    { name: "Skills necklace", type: "item" },
    { name: "Rada's blessing", note: "1+ recommended", type: "item" },
    { name: "Access to fairy rings", type: "travel" },
    { name: "Food and combat equipment", note: "For high-level fights", type: "item" },
    { name: "Axe", type: "item" },
    { name: "Runes", note: "To cast Fire Bolt or better", type: "item" },
    { name: "Defence potion", note: "3+ doses", quantity: 3, type: "item" },
    { name: "Volcanic sulphur", type: "item" },
    { name: "Molten glass", type: "item" },
    { alternatives: ["Pickaxe", "Chisel"], name: "Dark essence block", type: "item" },
  ],
  recommendedPrayers: ["Protect from Magic", "Protect from Missiles", "Protect from Melee"],
  recommendedSkills: {
    Combat: 70,
    Hitpoints: 70,
    Prayer: 43,
  },
  requirements: [
    new QuestRequirement("Client of Kourend"),
    new QuestRequirement("The Depths of Despair"),
    new QuestRequirement("The Queen of Thieves"),
    new QuestRequirement("The Ascent of Arceuus"),
    new QuestRequirement("The Forsaken Tower"),
    new LevelRequirement("Thieving", 54, false),
    new LevelRequirement("Agility", 52, false),
    new LevelRequirement("Woodcutting", 52, false),
    new LevelRequirement("Magic", 50, false),
    new LevelRequirement("Mining", 42, false),
    new LevelRequirement("Smithing", 42, false),
    new LevelRequirement("Farming", 35, false),
    new LevelRequirement("Crafting", 38, false),
    new LevelRequirement("Hunter", 42, false),
    new LevelRequirement("Herblore", 45, false),
  ],
  rewards: {
    areas: ["Ability to set respawn point to Kourend Castle"],
    experience: [],
    items: [{ name: "Book of the dead", quantity: 1 }],
    lamps: [
      {
        amount: 10000,
        note: "Two lamps are awarded",
        skillRestriction: "Any skill level 40 or above",
      },
    ],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      {
        description: "24 new spells in the Arceuus spellbook",
        url: "https://oldschool.runescape.wiki/w/Arceuus_spellbook",
      },
      { description: "Ability to fight Yama", url: "https://oldschool.runescape.wiki/w/Yama" },
    ],
  },
  series: "Great Kourend",
  shortName: "aKingdomDivided",
  startLocation: "Speak to Martin Holt at the entrance to Kourend Castle in Kingstown.",
  status: QuestStatus.NotStarted,
  steps: [],
  url: "https://oldschool.runescape.wiki/w/A_Kingdom_Divided",
};

export default AKingdomDivided;
