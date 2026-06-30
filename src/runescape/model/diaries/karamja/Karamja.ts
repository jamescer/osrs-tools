import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Karamja Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Karamja_Diary
 */
export const KaramjaDiary: Diary = {
  name: "Karamja Diary",
  itemReward: "Karamja gloves",
  easy: {
    itemReward: "Karamja gloves 1",
    rewards: {
      description: [
        {
          main: "Karamja gloves 1",
          other: ["Brimhaven—Ardougne and Musa Point—Port Sarim boat trips cost 15 coins instead of 30 coins"],
        },
        {
          main: "Items in various shops around Karamja are sold at a discounted rate and bought for more",
          other: [],
        },
        {
          main: "1 Antique lamp worth 1,000 experience in any skill of any level",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 1000, levelToUse: 1 }],
    },
    tasks: [
      {
        description: "Pick 5 bananas from the plantation located east of the volcano.",
        requirements: [],
      },
      {
        description: "Use the rope swing to travel to the Moss Giant Island north-west of Karamja.",
        requirements: [skill("agility", 10)],
      },
      {
        description: "Mine some gold from the rocks on the north-west peninsula of Karamja.",
        requirements: [skill("mining", 40)],
        notes: "Any pickaxe required.",
      },
      {
        description: "Travel to Port Sarim via the dock, east of Musa Point.",
        requirements: [],
        notes: "30 coins or an activated ring of charos required.",
      },
      {
        description: "Travel to Ardougne via the port near Brimhaven.",
        requirements: [],
        notes: "30 coins or an activated ring of charos required.",
      },
      {
        description: "Explore Cairn Island to the west of Karamja.",
        requirements: [skill("agility", 15)],
      },
      {
        description: "Use the Fishing spots north of the banana plantation.",
        requirements: [],
        notes: "Harpoon, lobster pot, small fishing net, or fishing rod with bait required depending on spot.",
      },
      {
        description: "Collect 5 seaweed from anywhere on Karamja.",
        requirements: [],
        notes: "Can drop and pick up the same seaweed multiple times.",
      },
      {
        description: "Attempt the TzHaar Fight Pits or Fight Cave.",
        requirements: [],
        notes: "Can simply enter and leave. No actual attempt necessary.",
      },
      {
        description: "Kill a jogre in the Pothole dungeon.",
        requirements: [],
        notes: "Weaponry required.",
      },
    ],
    itemsRequired: ["30 coins", "Pickaxe", "Fishing supplies", "Seaweed"],
    questsRequired: [],
    skillsRequired: [
      { skill: "agility", level: 15, boostable: true },
      { skill: "mining", level: 40, boostable: true },
    ],
  },
  medium: {
    itemReward: "Karamja gloves 2",
    rewards: {
      description: [
        {
          main: "Karamja gloves 2",
          other: ["10% additional Agility experience from all obstacles in the Brimhaven Agility Arena"],
        },
        {
          main: "Access to the underground portion of the Shilo Village mine",
          other: [],
        },
        {
          main: "1 Antique lamp worth 5,000 experience in any skill of at least level 30",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 5000, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Claim a ticket from the Agility Arena in Brimhaven.",
        requirements: [skill("agility", 40)],
        notes: "200 coins required.",
      },
      {
        description: "Discover hidden walls in the dungeon below the volcano.",
        requirements: [quest("Dragon Slayer I")],
      },
      {
        description: "Visit the Isle of Crandor via the dungeon below the volcano.",
        requirements: [quest("Dragon Slayer I")],
        notes: "Must go through hidden wall, past lesser demons, and climb rope to surface.",
      },
      {
        description: "Use Vigroy and Hajedy's cart service.",
        requirements: [quest("Shilo Village")],
        notes: "200 coins required.",
      },
      {
        description: "Earn 100% favour in the village of Tai Bwo Wannai.",
        requirements: [quest("Jungle Potion"), skill("woodcutting", 10)],
      },
      {
        description: "Cook a spider on a stick.",
        requirements: [skill("cooking", 16)],
        notes: "Spider carcass and skewer stick or arrow shaft required.",
      },
      {
        description: "Charter the Lady of the Waves from Cairn Isle to Port Khazard.",
        requirements: [quest("Shilo Village")],
        notes: "Ship ticket or 20-50 coins required.",
      },
      {
        description: "Cut a log from a teak tree.",
        requirements: [skill("woodcutting", 35), quest("Jungle Potion")],
        notes: "Teak trees found in Hardwood Grove or Kharazi Jungle.",
      },
      {
        description: "Cut a log from a mahogany tree.",
        requirements: [skill("woodcutting", 50), quest("Jungle Potion")],
        notes: "Mahogany trees found in Hardwood Grove or Kharazi Jungle.",
      },
      {
        description: "Catch a karambwan.",
        requirements: [quest("Tai Bwo Wannai Trio"), skill("fishing", 65)],
        notes: "Karambwan vessel, raw karambwanji, and small fishing net required.",
      },
      {
        description: "Exchange gems for a machete.",
        requirements: [quest("Jungle Potion")],
        notes: "Gout tuber and gem payment required.",
      },
      {
        description: "Use the gnome glider to travel to Karamja.",
        requirements: [quest("The Grand Tree")],
      },
      {
        description: "Grow a healthy fruit tree in the patch near Brimhaven.",
        requirements: [skill("farming", 27)],
        notes: "Fruit tree sapling, spade, and rake required.",
      },
      {
        description: "Trap a horned graahk.",
        requirements: [skill("hunter", 41)],
        notes: "Teasing stick or spear, knife, and logs required.",
      },
      {
        description: "Chop the vines to gain deeper access to Brimhaven Dungeon.",
        requirements: [skill("woodcutting", 10)],
        notes: "Any axe and 875 coins required.",
      },
      {
        description: "Cross the lava using the stepping stones within Brimhaven Dungeon.",
        requirements: [skill("woodcutting", 10), skill("agility", 12)],
        notes: "Any axe and 875 coins required.",
      },
      {
        description: "Climb the stairs within Brimhaven Dungeon.",
        requirements: [skill("woodcutting", 10)],
        notes: "Any axe and 875 coins required.",
      },
      {
        description: "Charter a ship from the shipyard in the far east of Karamja.",
        requirements: [quest("The Grand Tree")],
        notes: "Enough coins to pay the fare required.",
      },
      {
        description: "Mine a red topaz from a gem rock.",
        requirements: [skill("mining", 40), quest("Jungle Potion")],
        notes: "Any pickaxe required.",
      },
    ],
    itemsRequired: [
      "200 coins initial",
      "Spider carcass and skewer stick",
      "Raw karambwanji and fishing vessel",
      "Fruit tree sapling, spade, rake",
      "Teasing stick, knife, logs",
      "875 coins for Brimhaven access",
      "Machete and gems for trade",
    ],
    questsRequired: ["Dragon Slayer I", "Shilo Village", "Jungle Potion", "Tai Bwo Wannai Trio", "The Grand Tree"],
    skillsRequired: [
      { skill: "agility", level: 40, boostable: true },
      { skill: "cooking", level: 16, boostable: true },
      { skill: "woodcutting", level: 50, boostable: true },
      { skill: "fishing", level: 65, boostable: true },
      { skill: "farming", level: 27, boostable: true },
      { skill: "hunter", level: 41, boostable: true },
    ],
  },
  hard: {
    itemReward: "Karamja gloves 3",
    rewards: {
      description: [
        {
          main: "Karamja gloves 3",
          other: ["Unlimited teleports to the underground portion of the Shilo Village mine"],
        },
        {
          main: "Jiminua's Jungle Store and the Karamja General Store are affected by glove discounts",
          other: [],
        },
        {
          main: "1 Antique lamp worth 10,000 experience in any skill of at least level 40",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 10000, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Become the Champion of the Fight Pits.",
        requirements: [],
        notes: "At least one other player required.",
      },
      {
        description: "Kill a Ket-Zek in the Fight Caves.",
        requirements: [],
        notes: "Ket-Zeks appear on 31st wave. Can leave safely after killing one.",
      },
      {
        description: "Eat an oomlie wrap.",
        requirements: [skill("cooking", 50)],
        notes: "Cooked oomlie wrap or raw oomlie with palm leaf required.",
      },
      {
        description: "Craft some nature runes from essence.",
        requirements: [skill("runecraft", 44)],
        notes: "Pure or daeyalt essence and access to Nature Altar required.",
      },
      {
        description: "Cook a karambwan thoroughly.",
        requirements: [quest("Tai Bwo Wannai Trio"), skill("cooking", 30)],
        notes: "Raw karambwan required.",
      },
      {
        description: "Kill a deathwing in the dungeon under the Kharazi Jungle.",
        requirements: [quest("Legends' Quest"), skill("agility", 50), skill("thieving", 50), skill("mining", 52), skill("strength", 50)],
        notes: "Axe, machete, pickaxe, and lockpick required.",
      },
      {
        description: "Use the crossbow shortcut south of the volcano.",
        requirements: [skill("agility", 53), skill("ranged", 42), skill("strength", 21)],
        notes: "Mith grapple and any crossbow required.",
      },
      {
        description: "Collect 5 palm leaves.",
        requirements: [quest("Legends' Quest")],
        notes: "Can drop and pick up same leaf multiple times.",
      },
      {
        description: "Be assigned a Slayer task by the Slayer Master in Shilo Village.",
        requirements: [quest("Shilo Village"), skill("slayer", 50)],
        notes: "Combat level 100 or Slayer cape helpful.",
      },
      {
        description: "Kill a metal dragon in Brimhaven Dungeon.",
        requirements: [skill("woodcutting", 10)],
        notes: "Protection from dragonfire, 875 coins, and weaponry required.",
      },
    ],
    itemsRequired: [
      "Oomlie wrap or palm leaf",
      "Pure or daeyalt essence",
      "Raw karambwan",
      "Axe, machete, pickaxe, lockpick",
      "Mith grapple and crossbow",
      "875 coins for Brimhaven Dungeon",
      "Dragonfire protection",
    ],
    questsRequired: ["Tai Bwo Wannai Trio", "Legends' Quest", "Shilo Village"],
    skillsRequired: [
      { skill: "cooking", level: 50, boostable: true },
      { skill: "runecraft", level: 44, boostable: true },
      { skill: "agility", level: 53, boostable: true },
      { skill: "ranged", level: 42, boostable: true },
      { skill: "strength", level: 50, boostable: true },
      { skill: "thieving", level: 50, boostable: true },
      { skill: "mining", level: 52, boostable: true },
      { skill: "slayer", level: 50, boostable: true },
      { skill: "woodcutting", level: 10, boostable: true },
    ],
  },
  elite: {
    itemReward: "Karamja gloves 4",
    rewards: {
      description: [
        {
          main: "Karamja gloves 4",
          other: ["Unlimited teleports to Duradel/Kuradal"],
        },
        {
          main: "10% chance of receiving two Agility arena tickets and Brimhaven vouchers",
          other: [],
        },
        {
          main: "Free usage of Shilo Village's furnace and Hardwood Grove",
          other: [],
        },
        {
          main: "Free cart rides between Brimhaven and Shilo Village",
          other: [],
        },
        {
          main: "Red dragonhide and bars from Brimhaven Dungeon are noted",
          other: [],
        },
        {
          main: "Double Tokkul from TzHaar Fight Cave and ability to resurrect once per day",
          other: [],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Craft 56 Nature runes simultaneously from essence without Extracts.",
        requirements: [skill("runecraft", 91)],
        notes: "28 pure or daeyalt essence required. Access to Nature Altar required.",
      },
      {
        description: "Equip a Fire Cape or Infernal Cape in Mor Ul Rek.",
        requirements: [],
        notes: "Fire cape or infernal cape required.",
      },
      {
        description: "Check the health of a palm tree in Brimhaven.",
        requirements: [skill("farming", 68)],
        notes: "Palm sapling, spade, rake, and 15 papaya fruit recommended.",
      },
      {
        description: "Create an antivenom potion whilst standing in the horse shoe mine.",
        requirements: [skill("herblore", 87)],
        notes: "Antidote++ and 5-20 Zulrah's scales required.",
      },
      {
        description: "Check the health of your Calquat tree patch.",
        requirements: [skill("farming", 72)],
        notes: "Calquat sapling, spade, rake, and 8 poison ivy berries recommended.",
      },
    ],
    itemsRequired: [
      "28 pure or daeyalt essence",
      "Fire cape or infernal cape",
      "Palm sapling, spade, rake, papaya fruit",
      "Antidote++ and Zulrah's scales",
      "Calquat sapling, spade, rake, poison ivy berries",
    ],
    questsRequired: [],
    skillsRequired: [
      { skill: "runecraft", level: 91, boostable: true },
      { skill: "farming", level: 72, boostable: true },
      { skill: "herblore", level: 87, boostable: true },
    ],
  },
};

export default KaramjaDiary;
