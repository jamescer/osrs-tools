import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Wilderness Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Wilderness_Diary
 */
export const WildernessDiary: Diary = {
  name: "Wilderness Diary",
  itemReward: "Wilderness badge",
  easy: {
    itemReward: "Wilderness badge 1",
    rewards: {
      description: [
        {
          main: "Wilderness badge 1",
          other: ["10% increased loot from low-level Wilderness monsters"],
        },
        {
          main: "1 Antique lamp worth 2,500 experience in any skill of at least level 30",
          other: [],
        },
        {
          main: "Ability to survive longer in the Wilderness",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Collect some spider eggs in the Wilderness.",
        requirements: [skill("thieving", 49)],
      },
      {
        description: "Cross the Wilderness via a shortcut.",
        requirements: [skill("agility", 45)],
      },
      {
        description: "Mine something in the Wilderness.",
        requirements: [skill("mining", 15)],
      },
      {
        description: "Kill a monster in the Wilderness.",
        requirements: [skill("combat", 1)],
      },
      {
        description: "Fish in the Wilderness.",
        requirements: [skill("fishing", 1)],
      },
      {
        description: "Chop down a tree in the Wilderness.",
        requirements: [skill("woodcutting", 1)],
      },
      {
        description: "Use a Wilderness shortcut.",
        requirements: [skill("agility", 1)],
      },
      {
        description: "Survive in the Wilderness for 5 minutes.",
        requirements: [],
      },
      {
        description: "Participate in a PvP activity.",
        requirements: [],
      },
      {
        description: "Complete an easy Wilderness task.",
        requirements: [],
      },
    ],
    itemsRequired: ["Combat gear", "Survival supplies"],
    questsRequired: [],
    skillsRequired: [
      { skill: "thieving", level: 49, boostable: true },
      { skill: "agility", level: 45, boostable: true },
      { skill: "mining", level: 15, boostable: true },
      { skill: "combat", level: 1, boostable: true },
      { skill: "fishing", level: 1, boostable: true },
      { skill: "woodcutting", level: 1, boostable: true },
    ],
  },
  medium: {
    itemReward: "Wilderness badge 2",
    rewards: {
      description: [
        {
          main: "Wilderness badge 2",
          other: ["15% increased loot from mid-level Wilderness monsters"],
        },
        {
          main: "1 Antique lamp worth 7,500 experience in any skill of at least level 40",
          other: [],
        },
        {
          main: "Enhanced dodging abilities in dangerous areas",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Defeat a Wilderness slayer task.",
        requirements: [skill("slayer", 50)],
      },
      {
        description: "Enter the Wilderness castle.",
        requirements: [skill("agility", 60)],
      },
      {
        description: "Slay a dangerous creature.",
        requirements: [skill("combat", 40)],
      },
      {
        description: "Complete the Wilderness obstacle course.",
        requirements: [skill("agility", 50)],
      },
      {
        description: "Loot from a rare Wilderness drop.",
        requirements: [skill("thieving", 65)],
      },
      {
        description: "Use a portal to escape danger.",
        requirements: [skill("magic", 40)],
      },
      {
        description: "Survive an encounter with a boss.",
        requirements: [skill("combat", 50)],
      },
      {
        description: "Fish for rare Wilderness fish.",
        requirements: [skill("fishing", 60)],
      },
      {
        description: "Mine a rare ore in the Wilderness.",
        requirements: [skill("mining", 60)],
      },
      {
        description: "Complete a medium Wilderness task.",
        requirements: [],
      },
    ],
    itemsRequired: ["Combat equipment", "Slayer supplies", "Escape supplies"],
    questsRequired: [],
    skillsRequired: [
      { skill: "slayer", level: 50, boostable: true },
      { skill: "agility", level: 60, boostable: true },
      { skill: "combat", level: 50, boostable: true },
      { skill: "thieving", level: 65, boostable: true },
      { skill: "magic", level: 40, boostable: true },
      { skill: "fishing", level: 60, boostable: true },
      { skill: "mining", level: 60, boostable: true },
    ],
  },
  hard: {
    itemReward: "Wilderness badge 3",
    rewards: {
      description: [
        {
          main: "Wilderness badge 3",
          other: ["20% increased loot from all Wilderness monsters"],
        },
        {
          main: "1 Antique lamp worth 15,000 experience in any skill of at least level 50",
          other: [],
        },
        {
          main: "Triple escape chance from dangerous situations",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: "Kill the Wilderness boss.",
        requirements: [skill("slayer", 80), skill("combat", 80)],
      },
      {
        description: "Complete the hard Wilderness obstacle course.",
        requirements: [skill("agility", 70)],
      },
      {
        description: "Survive in the Wilderness for 30 minutes.",
        requirements: [skill("combat", 70)],
      },
      {
        description: "Achieve 99 in a Wilderness-related skill.",
        requirements: [skill("slayer", 99)],
      },
      {
        description: "Loot from 10 high-level bosses.",
        requirements: [skill("combat", 90)],
      },
    ],
    itemsRequired: ["High-level combat gear", "Boss supplies"],
    questsRequired: [],
    skillsRequired: [
      { skill: "slayer", level: 80, boostable: true },
      { skill: "combat", level: 90, boostable: true },
      { skill: "agility", level: 70, boostable: true },
    ],
  },
  elite: {
    itemReward: "Wilderness badge 4",
    rewards: {
      description: [
        {
          main: "Wilderness badge 4",
          other: ["25% increased loot and doubled drops from Wilderness bosses"],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
        {
          main: "Permanent immunity to Wilderness hazards and auto-teleport when needed",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Defeat the ultimate Wilderness boss.",
        requirements: [skill("slayer", 95), skill("combat", 100)],
      },
      {
        description: "Complete elite obstacle course without errors.",
        requirements: [skill("agility", 90)],
      },
      {
        description: "Master Wilderness combat.",
        requirements: [skill("combat", 100), skill("slayer", 99)],
      },
      {
        description: "Claim the Crown of the Wilderness.",
        requirements: [skill("combat", 100)],
      },
      {
        description: "Achieve legendary status.",
        requirements: [skill("combat", 100), skill("slayer", 99), skill("agility", 90)],
      },
    ],
    itemsRequired: ["Endgame combat supplies"],
    questsRequired: [],
    skillsRequired: [
      { skill: "slayer", level: 95, boostable: true },
      { skill: "combat", level: 100, boostable: false },
      { skill: "agility", level: 90, boostable: true },
    ],
  },
};

export default WildernessDiary;
