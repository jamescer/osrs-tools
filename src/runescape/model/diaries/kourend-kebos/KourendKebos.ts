import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Kourend & Kebos Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Kourend_%26_Kebos_Diary
 */
export const KourendKebosDiary: Diary = {
  name: "Kourend & Kebos Diary",
  itemReward: "Kourend headgear",
  easy: {
    itemReward: "Kourend headgear 1",
    rewards: {
      description: [
        {
          main: "Kourend headgear 1",
          other: ["Grants access to the Kourend area without needing completion of below-mentioned quests"],
        },
        {
          main: "1 Antique lamp worth 2,500 experience in any skill of at least level 30",
          other: [],
        },
        {
          main: "Increased rewards from Kourend-based activities",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Gain 10% favour with any Kourend house.",
        requirements: [quest("Vileblood")],
      },
      {
        description: "Catch a fish in the Arceuus area.",
        requirements: [skill("fishing", 5)],
      },
      {
        description: "Mine ore in the Piscarilius area.",
        requirements: [skill("mining", 10)],
      },
      {
        description: "Chop wood in the Lovakengj area.",
        requirements: [skill("woodcutting", 5)],
      },
      {
        description: "Craft a leather item in the Shayzien area.",
        requirements: [skill("crafting", 1)],
      },
      {
        description: "Smith an item in the Hosidius area.",
        requirements: [skill("smithing", 15)],
      },
      {
        description: "Grow a herb in the Arceuus house pot.",
        requirements: [skill("farming", 14)],
      },
      {
        description: "Visit all five Kourend houses.",
        requirements: [],
      },
      {
        description: "Complete a task from a house favour master.",
        requirements: [],
      },
      {
        description: "Use a shortcut in Kourend.",
        requirements: [skill("agility", 10)],
      },
    ],
    itemsRequired: ["Fishing supplies", "Mining pickaxe", "Woodcutting axe", "Crafting supplies"],
    questsRequired: ["Vileblood"],
    skillsRequired: [
      { skill: "fishing", level: 5, boostable: true },
      { skill: "mining", level: 10, boostable: true },
      { skill: "woodcutting", level: 5, boostable: true },
      { skill: "farming", level: 14, boostable: true },
      { skill: "smithing", level: 15, boostable: true },
      { skill: "agility", level: 10, boostable: true },
    ],
  },
  medium: {
    itemReward: "Kourend headgear 2",
    rewards: {
      description: [
        {
          main: "Kourend headgear 2",
          other: ["Improved favour gain and access to restricted activities"],
        },
        {
          main: "1 Antique lamp worth 7,500 experience in any skill of at least level 40",
          other: [],
        },
        {
          main: "Teleport to Kourend from any house",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Reach 50% favour with all five houses.",
        requirements: [quest("Vileblood")],
      },
      {
        description: "Defeat a monster in the Kourend slayer dungeon.",
        requirements: [skill("slayer", 35)],
      },
      {
        description: "Complete the medium Kourend obstacle course.",
        requirements: [skill("agility", 40)],
      },
      {
        description: "Craft a teleport spell.",
        requirements: [skill("runecraft", 45), skill("crafting", 45)],
      },
      {
        description: "Use the Kourend market.",
        requirements: [],
      },
      {
        description: "Defeat a demon in the Arceuus area.",
        requirements: [skill("combat", 40)],
      },
      {
        description: "Smith adamant equipment.",
        requirements: [skill("smithing", 40)],
      },
      {
        description: "Grow a fruit tree.",
        requirements: [skill("farming", 27)],
      },
      {
        description: "Catch a molly fish.",
        requirements: [skill("fishing", 58)],
      },
      {
        description: "Use the deep wilderness shortcut.",
        requirements: [skill("agility", 52)],
      },
    ],
    itemsRequired: ["Combat gear", "Crafting supplies", "Smithing bars", "Farming supplies"],
    questsRequired: ["Vileblood", "X Marks the Spot"],
    skillsRequired: [
      { skill: "slayer", level: 35, boostable: true },
      { skill: "agility", level: 52, boostable: true },
      { skill: "runecraft", level: 45, boostable: true },
      { skill: "crafting", level: 45, boostable: true },
      { skill: "smithing", level: 40, boostable: true },
      { skill: "farming", level: 27, boostable: true },
      { skill: "fishing", level: 58, boostable: true },
    ],
  },
  hard: {
    itemReward: "Kourend headgear 3",
    rewards: {
      description: [
        {
          main: "Kourend headgear 3",
          other: ["Maximum favour gain rate and exclusive boss access"],
        },
        {
          main: "1 Antique lamp worth 15,000 experience in any skill of at least level 50",
          other: [],
        },
        {
          main: "Free entry to houses without favour requirements",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: "Reach 100% favour with all five houses.",
        requirements: [quest("Vileblood"), quest("A taste of Hope")],
      },
      {
        description: "Defeat a Hydra boss.",
        requirements: [skill("slayer", 80)],
      },
      {
        description: "Complete the hard Kourend obstacle course.",
        requirements: [skill("agility", 70)],
      },
      {
        description: "Craft a master rune spell.",
        requirements: [skill("runecraft", 85), skill("crafting", 85)],
      },
      {
        description: "Achieve 99 in a Kourend-related skill.",
        requirements: [skill("smithing", 99)],
      },
    ],
    itemsRequired: ["High-level combat gear", "Master crafting materials"],
    questsRequired: ["Vileblood", "X Marks the Spot", "A taste of Hope"],
    skillsRequired: [
      { skill: "slayer", level: 80, boostable: true },
      { skill: "agility", level: 70, boostable: true },
      { skill: "runecraft", level: 85, boostable: true },
      { skill: "crafting", level: 85, boostable: true },
    ],
  },
  elite: {
    itemReward: "Kourend headgear 4",
    rewards: {
      description: [
        {
          main: "Kourend headgear 4",
          other: ["Unlimited access to all Kourend areas and doubled boss loot"],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
        {
          main: "Daily bonus favour and exclusive items",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Defeat the Kourend final boss.",
        requirements: [quest("A taste of Hope"), skill("slayer", 95), skill("combat", 100)],
      },
      {
        description: "Complete elite obstacle course without errors.",
        requirements: [skill("agility", 90)],
      },
      {
        description: "Master all five houses at the highest tier.",
        requirements: [skill("smithing", 99), skill("crafting", 99), skill("runecraft", 99)],
      },
      {
        description: "Craft the ultimate Kourend artifact.",
        requirements: [skill("crafting", 99), skill("magic", 99)],
      },
      {
        description: "Claim the Kourend throne of ultimate power.",
        requirements: [quest("A taste of Hope"), skill("combat", 100)],
      },
    ],
    itemsRequired: ["Endgame combat and crafting supplies"],
    questsRequired: ["Vileblood", "X Marks the Spot", "A taste of Hope"],
    skillsRequired: [
      { skill: "slayer", level: 95, boostable: true },
      { skill: "combat", level: 100, boostable: false },
      { skill: "agility", level: 90, boostable: true },
      { skill: "crafting", level: 99, boostable: false },
      { skill: "smithing", level: 99, boostable: false },
      { skill: "runecraft", level: 99, boostable: false },
    ],
  },
};

export default KourendKebosDiary;
