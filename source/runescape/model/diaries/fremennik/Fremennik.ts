import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Fremennik Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Fremennik_Diary
 */
export const FremennikDiary: Diary = {
  name: "Fremennik Diary",
  itemReward: "Fremennik sea boots",
  easy: {
    itemReward: "Fremennik sea boots 1",
    rewards: {
      description: [
        {
          main: "Fremennik sea boots 1",
          other: ["Gives a 10% increase to Fishing experience when fishing in Fremennik Province"],
        },
        {
          main: "1 Antique lamp worth 2,500 experience in any skill of at least level 30",
          other: [],
        },
        {
          main: "Ability to use Fremennik Fish Spots for faster fish gathering",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Catch a swordfish from the Rellekka Fishing Spot.",
        requirements: [skill("fishing", 50)],
      },
      {
        description: "Use a bed in the Fremennik camp.",
        requirements: [quest("The Fremennik Trials")],
      },
      {
        description: "Mine iron ore from the Rellekka mining spot.",
        requirements: [skill("mining", 15)],
      },
      {
        description: "Cook a swordfish in Rellekka.",
        requirements: [skill("cooking", 52)],
      },
      {
        description: "Use the sundial to check the time.",
        requirements: [],
      },
      {
        description: "Fletch some arrows in the Rellekka area.",
        requirements: [skill("fletching", 1)],
      },
      {
        description: "Light a torch in the Rellekka area.",
        requirements: [],
      },
      {
        description: "Hit the shield on the target dummy.",
        requirements: [],
      },
      {
        description: "Drink from a waterskin in Rellekka.",
        requirements: [],
      },
      {
        description: "Complete a task from the Adviser.",
        requirements: [quest("The Fremennik Trials")],
      },
    ],
    itemsRequired: ["Fishing equipment", "Mining supplies", "Cooking supplies", "Arrows for fletching"],
    questsRequired: ["The Fremennik Trials"],
    skillsRequired: [
      { skill: "fishing", level: 50, boostable: true },
      { skill: "mining", level: 15, boostable: true },
      { skill: "cooking", level: 52, boostable: true },
      { skill: "fletching", level: 1, boostable: true },
    ],
  },
  medium: {
    itemReward: "Fremennik sea boots 2",
    rewards: {
      description: [
        {
          main: "Fremennik sea boots 2",
          other: ["15% increase to Fishing experience and additional catch rate in Fremennik waters"],
        },
        {
          main: "1 Antique lamp worth 7,500 experience in any skill of at least level 40",
          other: [],
        },
        {
          main: "Reduced damage taken from Fremennik enemies",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Defeat a sea troll in the Fremennik slayer dungeon.",
        requirements: [skill("slayer", 72)],
      },
      {
        description: "Unfreeze a monument in the Ice Dungeon.",
        requirements: [quest("Thawed"), skill("thawing", 5, false)],
      },
      {
        description: "Catch a flying fish in the Fremennik waters.",
        requirements: [skill("fishing", 70)],
      },
      {
        description: "Complete the Fremennik Slayer Dungeon.",
        requirements: [skill("slayer", 1)],
      },
      {
        description: "Serve a customer at the Fremennik market.",
        requirements: [],
      },
      {
        description: "Use a shortcut in the Ice Dungeon.",
        requirements: [skill("agility", 40)],
      },
      {
        description: "Obtain a Fremennik warrior drop.",
        requirements: [skill("combat", 40)],
      },
      {
        description: "Smith a Fremennik sword at the anvil.",
        requirements: [skill("smithing", 20)],
      },
      {
        description: "Use a prayer altar in a Fremennik temple.",
        requirements: [skill("prayer", 30)],
      },
      {
        description: "Discover the secret door in the Fremennik dungeon.",
        requirements: [skill("thieving", 50)],
      },
    ],
    itemsRequired: ["Combat equipment", "Slayer supplies", "Fishing rods", "Smithing supplies"],
    questsRequired: ["The Fremennik Trials", "Thawed"],
    skillsRequired: [
      { skill: "slayer", level: 72, boostable: true },
      { skill: "fishing", level: 70, boostable: true },
      { skill: "agility", level: 40, boostable: true },
      { skill: "smithing", level: 20, boostable: true },
      { skill: "thieving", level: 50, boostable: true },
    ],
  },
  hard: {
    itemReward: "Fremennik sea boots 3",
    rewards: {
      description: [
        {
          main: "Fremennik sea boots 3",
          other: ["20% increase to Fishing and ability to catch rare Fremennik fish"],
        },
        {
          main: "1 Antique lamp worth 15,000 experience in any skill of at least level 50",
          other: [],
        },
        {
          main: "Free passage through Fremennik settlements",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: "Defeat a King's Thaw monster.",
        requirements: [quest("Dragon Slayer II"), skill("combat", 85)],
      },
      {
        description: "Catch 100 molly fish in one session.",
        requirements: [skill("fishing", 88)],
      },
      {
        description: "Complete the hard Ice Dungeon without taking damage.",
        requirements: [skill("agility", 78), skill("combat", 80)],
      },
      {
        description: "Reach the boss chamber in the Fremennik Slayer Dungeon.",
        requirements: [skill("slayer", 90)],
      },
      {
        description: "Smith all Fremennik weapons.",
        requirements: [skill("smithing", 70)],
      },
    ],
    itemsRequired: ["High-level combat gear", "Fishing supplies", "Smithing bars"],
    questsRequired: ["Dragon Slayer II", "The Fremennik Trials", "Thawed"],
    skillsRequired: [
      { skill: "combat", level: 85, boostable: true },
      { skill: "fishing", level: 88, boostable: true },
      { skill: "agility", level: 78, boostable: true },
      { skill: "slayer", level: 90, boostable: true },
      { skill: "smithing", level: 70, boostable: true },
    ],
  },
  elite: {
    itemReward: "Fremennik sea boots 4",
    rewards: {
      description: [
        {
          main: "Fremennik sea boots 4",
          other: ["Protected from all cold-based attacks and unlimited fishing bonuses"],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
        {
          main: "Automatically teleport between Fremennik settlements",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Defeat the Ice King and all of its minions.",
        requirements: [quest("Dragon Slayer II"), skill("combat", 100)],
      },
      {
        description: "Complete 5 elite fishing challenges.",
        requirements: [skill("fishing", 99)],
      },
      {
        description: "Smith a legendary Fremennik weapon.",
        requirements: [skill("smithing", 99)],
      },
      {
        description: "Master all Fremennik skills to level 99.",
        requirements: [skill("fisher", 99), skill("smithing", 99), skill("slayer", 99)],
      },
      {
        description: "Claim the Crown of the Fremennik King.",
        requirements: [quest("Dragon Slayer II"), skill("combat", 100)],
      },
    ],
    itemsRequired: ["Endgame combat gear", "High-level supplies"],
    questsRequired: ["Dragon Slayer II", "The Fremennik Trials"],
    skillsRequired: [
      { skill: "combat", level: 100, boostable: false },
      { skill: "fishing", level: 99, boostable: false },
      { skill: "smithing", level: 99, boostable: false },
      { skill: "slayer", level: 99, boostable: false },
    ],
  },
};

export default FremennikDiary;
