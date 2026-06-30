import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Varrock Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Varrock_Diary
 */
export const VarrockDiary: Diary = {
  name: "Varrock Diary",
  itemReward: "Varrock Armour",
  easy: {
    itemReward: "Varrock Armour 1",
    rewards: {
      description: [
        {
          main: "Varrock Armour 1",
          other: ["10% chance to save a bar when smelting ore in the Varrock smithy"],
        },
        {
          main: "1 Antique lamp worth 2,500 experience in any skill of at least level 30",
          other: [],
        },
        {
          main: "Unlimited free teleports to the Grand Exchange through the diary interface",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Have Thessalia change your appearance for free.",
        requirements: [],
      },
      {
        description: "Pray at the altar in Varrock Castle.",
        requirements: [],
      },
      {
        description: "Chop wood in the Varrock Palace garden.",
        requirements: [skill("woodcutting", 1)],
      },
      {
        description: "Travel to Varrock via the spirit tree in Gnome Stronghold.",
        requirements: [quest("The Grand Tree")],
      },
      {
        description: "Enter the Slums.",
        requirements: [quest("Rune Memories")],
      },
      {
        description: "Buy a newspaper from the newspaper stand in Varrock.",
        requirements: [],
      },
      {
        description: "Mine copper ore in the Varrock Mining Camp, south of the city.",
        requirements: [skill("mining", 1)],
      },
      {
        description: "Sell 5 items to the Armor shop in Varrock.",
        requirements: [],
      },
      {
        description: "Use the furnace to smelt bars.",
        requirements: [skill("smithing", 1)],
      },
      {
        description: "Cast a combat spell on a dummy in the training arena.",
        requirements: [skill("magic", 1)],
      },
    ],
    itemsRequired: ["5 items to sell", "Copper ore", "Logs"],
    questsRequired: ["The Grand Tree", "Rune Memories"],
    skillsRequired: [
      { skill: "woodcutting", level: 1, boostable: true },
      { skill: "mining", level: 1, boostable: true },
      { skill: "smithing", level: 1, boostable: true },
      { skill: "magic", level: 1, boostable: true },
    ],
  },
  medium: {
    itemReward: "Varrock Armour 2",
    rewards: {
      description: [
        {
          main: "Varrock Armour 2",
          other: ["10% chance to save a bar when smelting, and 10% chance when smithing mithril items"],
        },
        {
          main: "1 Antique lamp worth 7,500 experience in any skill of at least level 40",
          other: [],
        },
        {
          main: "5 daily teleports to the Varrock anvil",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Defeat a dragon in Crandor.",
        requirements: [quest("Dragon Slayer I")],
      },
      {
        description: "Teleport to Varrock using a varrock teleport.",
        requirements: [skill("magic", 25), quest("Rune Memories")],
      },
      {
        description: "Claim a treasure trail reward from the Treasure Trail chest.",
        requirements: [],
      },
      {
        description: "Enter the Grand Exchange.",
        requirements: [],
      },
      {
        description: "Use the anvil in eastern Varrock.",
        requirements: [skill("smithing", 1)],
      },
      {
        description: "Defeat a monster for the Varrock Museum.",
        requirements: [],
      },
      {
        description: "Craft a fire staff.",
        requirements: [skill("runecraft", 9), skill("crafting", 9)],
      },
      {
        description: "Reach the base of the Varrock Obstacle Course.",
        requirements: [skill("agility", 40)],
      },
      {
        description: "Smith mithril plate bodies in Varrock.",
        requirements: [skill("smithing", 60)],
      },
      {
        description: "Complete a lap of the Varrock Obstacle Course.",
        requirements: [skill("agility", 50)],
      },
    ],
    itemsRequired: ["Rune essences", "Mithril bars", "Crafting supplies"],
    questsRequired: ["Dragon Slayer I", "Rune Memories"],
    skillsRequired: [
      { skill: "magic", level: 25, boostable: true },
      { skill: "smithing", level: 60, boostable: true },
      { skill: "runecraft", level: 9, boostable: true },
      { skill: "crafting", level: 9, boostable: true },
      { skill: "agility", level: 50, boostable: true },
    ],
  },
  hard: {
    itemReward: "Varrock Armour 3",
    rewards: {
      description: [
        {
          main: "Varrock Armour 3",
          other: ["10% chance to save bars when smelting and smithing mithril items, and chance for adamant items"],
        },
        {
          main: "1 Antique lamp worth 15,000 experience in any skill of at least level 50",
          other: [],
        },
        {
          main: "10 daily teleports to the Varrock anvil",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: "Complete the Medium Varrock Diary.",
        requirements: [],
      },
      {
        description: "Defeat Elvarg.",
        requirements: [quest("Dragon Slayer I")],
      },
      {
        description: "Smith an adamant plate body.",
        requirements: [skill("smithing", 92)],
      },
      {
        description: "Complete a collection log for the Varrock Museum.",
        requirements: [skill("thieving", 54)],
      },
      {
        description: "Perform all emotes in the Varrock library.",
        requirements: [],
      },
      {
        description: "Unlock the Western Bank shortcut.",
        requirements: [skill("agility", 61)],
      },
      {
        description: "Smith a runite platebody.",
        requirements: [skill("smithing", 99)],
      },
      {
        description: "Reach the end of the Varrock Obstacle Course.",
        requirements: [skill("agility", 70)],
      },
      {
        description: "Complete a hard clue scroll in Varrock.",
        requirements: [],
      },
      {
        description: "Kill 50 players in the Wilderness within one week.",
        requirements: [skill("combat", 50)],
      },
    ],
    itemsRequired: ["Smithing supplies", "Adamant and Runite bars", "Climbing gear"],
    questsRequired: ["Dragon Slayer I"],
    skillsRequired: [
      { skill: "smithing", level: 92, boostable: true },
      { skill: "thieving", level: 54, boostable: true },
      { skill: "agility", level: 70, boostable: true },
      { skill: "combat", level: 50, boostable: true },
    ],
  },
  elite: {
    itemReward: "Varrock Armour 4",
    rewards: {
      description: [
        {
          main: "Varrock Armour 4",
          other: ["10% chance to save bars for all smithing, and chance to preserve gems"],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
        {
          main: "Unlimited teleports to the Varrock anvil",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Teleport directly to the Grand Exchange.",
        requirements: [skill("magic", 85)],
      },
      {
        description: "Smith a rune full helm.",
        requirements: [skill("smithing", 99)],
      },
      {
        description: "Complete the elite Varrock Obstacle Course.",
        requirements: [skill("agility", 90)],
      },
      {
        description: "Kill the Varrock boss.",
        requirements: [skill("combat", 100)],
      },
      {
        description: "Craft 500 experience worth of rune items.",
        requirements: [skill("crafting", 85), skill("runecraft", 85)],
      },
    ],
    itemsRequired: ["High-level smithing supplies", "Magic runes", "Agility gear"],
    questsRequired: [],
    skillsRequired: [
      { skill: "magic", level: 85, boostable: true },
      { skill: "smithing", level: 99, boostable: false },
      { skill: "agility", level: 90, boostable: true },
      { skill: "crafting", level: 85, boostable: true },
      { skill: "runecraft", level: 85, boostable: true },
    ],
  },
};

export default VarrockDiary;
