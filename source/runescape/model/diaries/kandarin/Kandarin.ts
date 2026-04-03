import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Kandarin Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Kandarin_Diary
 */
export const KandarinDiary: Diary = {
  name: "Kandarin Diary",
  itemReward: "Kandarin headgear",
  easy: {
    itemReward: "Kandarin headgear 1",
    rewards: {
      description: [
        {
          main: "Kandarin headgear 1",
          other: ["Reduces weight of equipment and provides teleport to Camelot"],
        },
        {
          main: "1 Antique lamp worth 2,500 experience in any skill of at least level 30",
          other: [],
        },
        {
          main: "Increased drop rates for herbs in local areas",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Cast the Camelot Teleport spell.",
        requirements: [skill("magic", 45)],
      },
      {
        description: "Chop wood from a tree near Camelot.",
        requirements: [skill("woodcutting", 1)],
      },
      {
        description: "Mine ore in the Al Kharid mining area.",
        requirements: [skill("mining", 15)],
      },
      {
        description: "Fish in the Barbarian Village.",
        requirements: [skill("fishing", 10)],
      },
      {
        description: "Conduct a divine blessing.",
        requirements: [skill("prayer", 10)],
      },
      {
        description: "Cross the bridge at Montaine.",
        requirements: [skill("agility", 10)],
      },
      {
        description: "Pray at an altar in Camelot.",
        requirements: [skill("prayer", 1)],
      },
      {
        description: "Prepare a wilderness route.",
        requirements: [skill("survival", 5, false)],
      },
      {
        description: "Fletch some arrows in the Kandarin area.",
        requirements: [skill("fletching", 1)],
      },
      {
        description: "Complete a task at the Kandarin market.",
        requirements: [],
      },
    ],
    itemsRequired: ["Magic runes", "Woodcutting axe", "Fishing supplies"],
    questsRequired: [],
    skillsRequired: [
      { skill: "magic", level: 45, boostable: true },
      { skill: "woodcutting", level: 1, boostable: true },
      { skill: "mining", level: 15, boostable: true },
      { skill: "fishing", level: 10, boostable: true },
      { skill: "fletching", level: 1, boostable: true },
    ],
  },
  medium: {
    itemReward: "Kandarin headgear 2",
    rewards: {
      description: [
        {
          main: "Kandarin headgear 2",
          other: ["Improved weight reduction and additional teleport options"],
        },
        {
          main: "1 Antique lamp worth 7,500 experience in any skill of at least level 40",
          other: [],
        },
        {
          main: "Access to restricted Kandarin areas",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Defeat a troll in the Trollheim dungeon.",
        requirements: [skill("slayer", 60), quest("My Arm's Big Adventure")],
      },
      {
        description: "Complete the Kandarin obstacle course.",
        requirements: [skill("agility", 40)],
      },
      {
        description: "Grow an herb patch at the Kandarin farming location.",
        requirements: [skill("farming", 14)],
      },
      {
        description: "Fletch yew shortbows.",
        requirements: [skill("fletching", 65)],
      },
      {
        description: "Smith adamant items at the anvil.",
        requirements: [skill("smithing", 40)],
      },
      {
        description: "Defeat a monster in the Yanille dungeon.",
        requirements: [skill("combat", 30)],
      },
      {
        description: "Use the shortcut at Camelot.",
        requirements: [skill("agility", 50)],
      },
      {
        description: "Cook a swordfish in the area.",
        requirements: [skill("cooking", 52)],
      },
      {
        description: "Craft a water staff.",
        requirements: [skill("runecraft", 5), skill("crafting", 5)],
      },
      {
        description: "Access the secret cave.",
        requirements: [skill("thieving", 40)],
      },
    ],
    itemsRequired: ["Combat gear", "Farming supplies", "Fletching supplies", "Smithing bars"],
    questsRequired: ["My Arm's Big Adventure"],
    skillsRequired: [
      { skill: "slayer", level: 60, boostable: true },
      { skill: "agility", level: 50, boostable: true },
      { skill: "farming", level: 14, boostable: true },
      { skill: "fletching", level: 65, boostable: true },
      { skill: "smithing", level: 40, boostable: true },
      { skill: "cooking", level: 52, boostable: true },
      { skill: "thieving", level: 40, boostable: true },
    ],
  },
  hard: {
    itemReward: "Kandarin headgear 3",
    rewards: {
      description: [
        {
          main: "Kandarin headgear 3",
          other: ["Major weight reduction and rare item teleports"],
        },
        {
          main: "1 Antique lamp worth 15,000 experience in any skill of at least level 50",
          other: [],
        },
        {
          main: "Access to exclusive loot tables",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: "Defeat a high-level troll leader.",
        requirements: [skill("slayer", 72), quest("The Gauntlet")],
      },
      {
        description: "Complete the hard Kandarin obstacle course.",
        requirements: [skill("agility", 70)],
      },
      {
        description: "Craft a fire tiara.",
        requirements: [skill("crafting", 80)],
      },
      {
        description: "Smith an adamant or rune platebody.",
        requirements: [skill("smithing", 88)],
      },
      {
        description: "Achieve 99 in a Kandarin-related skill.",
        requirements: [skill("smithing", 99)],
      },
    ],
    itemsRequired: ["High-level combat gear", "Crafting supplies", "Smithing bars"],
    questsRequired: ["My Arm's Big Adventure", "The Gauntlet"],
    skillsRequired: [
      { skill: "slayer", level: 72, boostable: true },
      { skill: "agility", level: 70, boostable: true },
      { skill: "crafting", level: 80, boostable: true },
      { skill: "smithing", level: 88, boostable: true },
    ],
  },
  elite: {
    itemReward: "Kandarin headgear 4",
    rewards: {
      description: [
        {
          main: "Kandarin headgear 4",
          other: ["Unlimited teleport access and complete weight reduction"],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
        {
          main: "Double drop rate for all Kandarin bosses",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Defeat the King of the Trolls.",
        requirements: [skill("slayer", 99), quest("The Gauntlet")],
      },
      {
        description: "Complete elite obstacle course without taking damage.",
        requirements: [skill("agility", 99)],
      },
      {
        description: "Achieve 99 in all Kandarin skills.",
        requirements: [skill("smithing", 99), skill("crafting", 99), skill("farming", 99)],
      },
      {
        description: "Craft the ultimate Kandarin artifact.",
        requirements: [skill("crafting", 99), skill("runecraft", 99)],
      },
      {
        description: "Claim the Kandarin throne.",
        requirements: [quest("The Gauntlet"), skill("combat", 100)],
      },
    ],
    itemsRequired: ["Endgame supplies", "Master crafting materials"],
    questsRequired: ["My Arm's Big Adventure", "The Gauntlet"],
    skillsRequired: [
      { skill: "slayer", level: 99, boostable: false },
      { skill: "agility", level: 99, boostable: false },
      { skill: "smithing", level: 99, boostable: false },
      { skill: "crafting", level: 99, boostable: false },
    ],
  },
};

export default KandarinDiary;
