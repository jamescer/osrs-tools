import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Morytania Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Morytania_Diary
 */
export const MorytaniaDiary: Diary = {
  name: "Morytania Diary",
  itemReward: "Morytania legs",
  easy: {
    itemReward: "Morytania legs 1",
    rewards: {
      description: [
        {
          main: "Morytania legs 1",
          other: ["10% increased XP from slaying creatures in Morytania"],
        },
        {
          main: "1 Antique lamp worth 2,500 experience in any skill of at least level 30",
          other: [],
        },
        {
          main: "Ability to enter Morytania freely",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Recharge prayer points at the Ectofuntus.",
        requirements: [quest("Ghosts Ahoy")],
      },
      {
        description: "Travel to Morytania via the boat.",
        requirements: [],
      },
      {
        description: "Craft bones into bonemeal at the Ectofuntus.",
        requirements: [skill("crafting", 30)],
      },
      {
        description: "Catch a ghast in Morytania.",
        requirements: [skill("fishing", 1)],
      },
      {
        description: "Enter the Slums of Mos Le'Harmless.",
        requirements: [quest("Cabin Fever"), skill("agility", 40)],
      },
      {
        description: "Use a shortcut in Morytania.",
        requirements: [skill("agility", 15)],
      },
      {
        description: "Mine objects in Morytania.",
        requirements: [skill("mining", 1)],
      },
      {
        description: "Kill a ghoul.",
        requirements: [skill("combat", 1)],
      },
      {
        description: "Fish at the Ectofuntus for bones.",
        requirements: [skill("fishing", 32)],
      },
      {
        description: "Travel via the Morytania swamp shortcut.",
        requirements: [skill("agility", 45)],
      },
    ],
    itemsRequired: ["Bones", "Fishing supplies", "Combat gear"],
    questsRequired: ["Ghosts Ahoy", "Cabin Fever"],
    skillsRequired: [
      { skill: "crafting", level: 30, boostable: true },
      { skill: "fishing", level: 32, boostable: true },
      { skill: "combat", level: 1, boostable: true },
      { skill: "agility", level: 45, boostable: true },
      { skill: "mining", level: 1, boostable: true },
    ],
  },
  medium: {
    itemReward: "Morytania legs 2",
    rewards: {
      description: [
        {
          main: "Morytania legs 2",
          other: ["15% increased XP in Morytania and access to prayer restoration altar"],
        },
        {
          main: "1 Antique lamp worth 7,500 experience in any skill of at least level 40",
          other: [],
        },
        {
          main: "Teleport to Morytania via legs",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Defeat a banshee in the Slayer Tower.",
        requirements: [skill("slayer", 15)],
      },
      {
        description: "Use the minecart system to travel.",
        requirements: [quest("Shades of Mort'ton")],
      },
      {
        description: "Catch a pheasant in Morytania.",
        requirements: [skill("hunter", 5)],
      },
      {
        description: "Track and hunt something.",
        requirements: [skill("hunter", 39)],
      },
      {
        description: "Complete the Morytania obstacle course.",
        requirements: [skill("agility", 50)],
      },
      {
        description: "Defeat a powerful monster in Morytania.",
        requirements: [skill("slayer", 35), skill("combat", 40)],
      },
      {
        description: "Use a passage within Morytania.",
        requirements: [skill("agility", 52)],
      },
      {
        description: "Pray at the Ectofuntus for prayer restoration.",
        requirements: [skill("prayer", 40)],
      },
      {
        description: "Grow a herb in Morytania.",
        requirements: [skill("farming", 14)],
      },
      {
        description: "Access a hidden location.",
        requirements: [skill("thieving", 50)],
      },
    ],
    itemsRequired: ["Slayer supplies", "Hunter gear", "Combat equipment"],
    questsRequired: ["Ghosts Ahoy", "Cabin Fever", "Shades of Mort'ton"],
    skillsRequired: [
      { skill: "slayer", level: 35, boostable: true },
      { skill: "hunter", level: 39, boostable: true },
      { skill: "agility", level: 52, boostable: true },
      { skill: "combat", level: 40, boostable: true },
      { skill: "prayer", level: 40, boostable: true },
      { skill: "farming", level: 14, boostable: true },
      { skill: "thieving", level: 50, boostable: true },
    ],
  },
  hard: {
    itemReward: "Morytania legs 3",
    rewards: {
      description: [
        {
          main: "Morytania legs 3",
          other: ["20% increased XP in Morytania and reduced potion prices"],
        },
        {
          main: "1 Antique lamp worth 15,000 experience in any skill of at least level 50",
          other: [],
        },
        {
          main: "10 daily teleports to Morytania",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: "Defeat a task-master in the Slayer Tower.",
        requirements: [skill("slayer", 72)],
      },
      {
        description: "Complete the hard Morytania obstacle course.",
        requirements: [skill("agility", 70)],
      },
      {
        description: "Complete Morytania Barrows.",
        requirements: [skill("combat", 70)],
      },
      {
        description: "Smith an item at Morytania's forge.",
        requirements: [skill("smithing", 60)],
      },
      {
        description: "Achieve 99 in a Morytania-related skill.",
        requirements: [skill("slayer", 99)],
      },
    ],
    itemsRequired: ["High-level slayer supplies", "Barrows gear"],
    questsRequired: ["Ghosts Ahoy", "Cabin Fever", "Shades of Mort'ton", "A Taste of Hope"],
    skillsRequired: [
      { skill: "slayer", level: 72, boostable: true },
      { skill: "agility", level: 70, boostable: true },
      { skill: "combat", level: 70, boostable: true },
      { skill: "smithing", level: 60, boostable: true },
    ],
  },
  elite: {
    itemReward: "Morytania legs 4",
    rewards: {
      description: [
        {
          main: "Morytania legs 4",
          other: ["25% increased XP in Morytania and doubled Barrows loot"],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
        {
          main: "Unlimited teleports to Morytania",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Defeat the ultimate Morytania boss.",
        requirements: [skill("slayer", 95), skill("combat", 95)],
      },
      {
        description: "Complete elite obstacle course without error.",
        requirements: [skill("agility", 90)],
      },
      {
        description: "Master all Morytania skills to 99.",
        requirements: [skill("slayer", 99), skill("prayer", 99), skill("farming", 99)],
      },
      {
        description: "Craft a legendary Morytania artifact.",
        requirements: [skill("crafting", 99), skill("runecraft", 95)],
      },
      {
        description: "Claim the Crown of Morytania.",
        requirements: [quest("A Taste of Hope"), skill("combat", 100)],
      },
    ],
    itemsRequired: ["Endgame supplies", "Master level crafting materials"],
    questsRequired: ["Ghosts Ahoy", "Cabin Fever", "Shades of Mort'ton", "A Taste of Hope"],
    skillsRequired: [
      { skill: "slayer", level: 95, boostable: true },
      { skill: "combat", level: 100, boostable: false },
      { skill: "agility", level: 90, boostable: true },
      { skill: "prayer", level: 99, boostable: false },
      { skill: "farming", level: 99, boostable: false },
      { skill: "crafting", level: 99, boostable: false },
      { skill: "runecraft", level: 95, boostable: true },
    ],
  },
};

export default MorytaniaDiary;
