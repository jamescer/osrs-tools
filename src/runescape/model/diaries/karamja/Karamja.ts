import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Karamja Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Karamja_Diary
 */
export const KaramjaDiary: Diary = {
  easy: {
    itemReward: 'Karamja gloves 1',
    itemsRequired: ['30 coins', 'Pickaxe', 'Fishing supplies', 'Seaweed'],
    questsRequired: [],
    rewards: {
      description: [
        {
          main: 'Karamja gloves 1',
          other: ['Brimhaven—Ardougne and Musa Point—Port Sarim boat trips cost 15 coins instead of 30 coins'],
        },
        {
          main: 'Items in various shops around Karamja are sold at a discounted rate and bought for more',
          other: [],
        },
        {
          main: '1 Antique lamp worth 1,000 experience in any skill of any level',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 1000, levelToUse: 1 }],
    },
    skillsRequired: [
      { boostable: true, level: 15, skill: 'agility' },
      { boostable: true, level: 40, skill: 'mining' },
    ],
    tasks: [
      {
        description: 'Pick 5 bananas from the plantation located east of the volcano.',
        requirements: [],
      },
      {
        description: 'Use the rope swing to travel to the Moss Giant Island north-west of Karamja.',
        requirements: [skill('agility', 10)],
      },
      {
        description: 'Mine some gold from the rocks on the north-west peninsula of Karamja.',
        notes: 'Any pickaxe required.',
        requirements: [skill('mining', 40)],
      },
      {
        description: 'Travel to Port Sarim via the dock, east of Musa Point.',
        notes: '30 coins or an activated ring of charos required.',
        requirements: [],
      },
      {
        description: 'Travel to Ardougne via the port near Brimhaven.',
        notes: '30 coins or an activated ring of charos required.',
        requirements: [],
      },
      {
        description: 'Explore Cairn Island to the west of Karamja.',
        requirements: [skill('agility', 15)],
      },
      {
        description: 'Use the Fishing spots north of the banana plantation.',
        notes: 'Harpoon, lobster pot, small fishing net, or fishing rod with bait required depending on spot.',
        requirements: [],
      },
      {
        description: 'Collect 5 seaweed from anywhere on Karamja.',
        notes: 'Can drop and pick up the same seaweed multiple times.',
        requirements: [],
      },
      {
        description: 'Attempt the TzHaar Fight Pits or Fight Cave.',
        notes: 'Can simply enter and leave. No actual attempt necessary.',
        requirements: [],
      },
      {
        description: 'Kill a jogre in the Pothole dungeon.',
        notes: 'Weaponry required.',
        requirements: [],
      },
    ],
  },
  elite: {
    itemReward: 'Karamja gloves 4',
    itemsRequired: [
      '28 pure or daeyalt essence',
      'Fire cape or infernal cape',
      'Palm sapling, spade, rake, papaya fruit',
      "Antidote++ and Zulrah's scales",
      'Calquat sapling, spade, rake, poison ivy berries',
    ],
    questsRequired: [],
    rewards: {
      description: [
        {
          main: 'Karamja gloves 4',
          other: ['Unlimited teleports to Duradel/Kuradal'],
        },
        {
          main: '10% chance of receiving two Agility arena tickets and Brimhaven vouchers',
          other: [],
        },
        {
          main: "Free usage of Shilo Village's furnace and Hardwood Grove",
          other: [],
        },
        {
          main: 'Free cart rides between Brimhaven and Shilo Village',
          other: [],
        },
        {
          main: 'Red dragonhide and bars from Brimhaven Dungeon are noted',
          other: [],
        },
        {
          main: 'Double Tokkul from TzHaar Fight Cave and ability to resurrect once per day',
          other: [],
        },
        {
          main: '1 Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    skillsRequired: [
      { boostable: true, level: 91, skill: 'runecraft' },
      { boostable: true, level: 72, skill: 'farming' },
      { boostable: true, level: 87, skill: 'herblore' },
    ],
    tasks: [
      {
        description: 'Craft 56 Nature runes simultaneously from essence without Extracts.',
        notes: '28 pure or daeyalt essence required. Access to Nature Altar required.',
        requirements: [skill('runecraft', 91)],
      },
      {
        description: 'Equip a Fire Cape or Infernal Cape in Mor Ul Rek.',
        notes: 'Fire cape or infernal cape required.',
        requirements: [],
      },
      {
        description: 'Check the health of a palm tree in Brimhaven.',
        notes: 'Palm sapling, spade, rake, and 15 papaya fruit recommended.',
        requirements: [skill('farming', 68)],
      },
      {
        description: 'Create an antivenom potion whilst standing in the horse shoe mine.',
        notes: "Antidote++ and 5-20 Zulrah's scales required.",
        requirements: [skill('herblore', 87)],
      },
      {
        description: 'Check the health of your Calquat tree patch.',
        notes: 'Calquat sapling, spade, rake, and 8 poison ivy berries recommended.',
        requirements: [skill('farming', 72)],
      },
    ],
  },
  hard: {
    itemReward: 'Karamja gloves 3',
    itemsRequired: [
      'Oomlie wrap or palm leaf',
      'Pure or daeyalt essence',
      'Raw karambwan',
      'Axe, machete, pickaxe, lockpick',
      'Mith grapple and crossbow',
      '875 coins for Brimhaven Dungeon',
      'Dragonfire protection',
    ],
    questsRequired: ['Tai Bwo Wannai Trio', "Legends' Quest", 'Shilo Village'],
    rewards: {
      description: [
        {
          main: 'Karamja gloves 3',
          other: ['Unlimited teleports to the underground portion of the Shilo Village mine'],
        },
        {
          main: "Jiminua's Jungle Store and the Karamja General Store are affected by glove discounts",
          other: [],
        },
        {
          main: '1 Antique lamp worth 10,000 experience in any skill of at least level 40',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 10000, levelToUse: 40 }],
    },
    skillsRequired: [
      { boostable: true, level: 50, skill: 'cooking' },
      { boostable: true, level: 44, skill: 'runecraft' },
      { boostable: true, level: 53, skill: 'agility' },
      { boostable: true, level: 42, skill: 'ranged' },
      { boostable: true, level: 50, skill: 'strength' },
      { boostable: true, level: 50, skill: 'thieving' },
      { boostable: true, level: 52, skill: 'mining' },
      { boostable: true, level: 50, skill: 'slayer' },
      { boostable: true, level: 10, skill: 'woodcutting' },
    ],
    tasks: [
      {
        description: 'Become the Champion of the Fight Pits.',
        notes: 'At least one other player required.',
        requirements: [],
      },
      {
        description: 'Kill a Ket-Zek in the Fight Caves.',
        notes: 'Ket-Zeks appear on 31st wave. Can leave safely after killing one.',
        requirements: [],
      },
      {
        description: 'Eat an oomlie wrap.',
        notes: 'Cooked oomlie wrap or raw oomlie with palm leaf required.',
        requirements: [skill('cooking', 50)],
      },
      {
        description: 'Craft some nature runes from essence.',
        notes: 'Pure or daeyalt essence and access to Nature Altar required.',
        requirements: [skill('runecraft', 44)],
      },
      {
        description: 'Cook a karambwan thoroughly.',
        notes: 'Raw karambwan required.',
        requirements: [quest('Tai Bwo Wannai Trio'), skill('cooking', 30)],
      },
      {
        description: 'Kill a deathwing in the dungeon under the Kharazi Jungle.',
        notes: 'Axe, machete, pickaxe, and lockpick required.',
        requirements: [
          quest("Legends' Quest"),
          skill('agility', 50),
          skill('thieving', 50),
          skill('mining', 52),
          skill('strength', 50),
        ],
      },
      {
        description: 'Use the crossbow shortcut south of the volcano.',
        notes: 'Mith grapple and any crossbow required.',
        requirements: [skill('agility', 53), skill('ranged', 42), skill('strength', 21)],
      },
      {
        description: 'Collect 5 palm leaves.',
        notes: 'Can drop and pick up same leaf multiple times.',
        requirements: [quest("Legends' Quest")],
      },
      {
        description: 'Be assigned a Slayer task by the Slayer Master in Shilo Village.',
        notes: 'Combat level 100 or Slayer cape helpful.',
        requirements: [quest('Shilo Village'), skill('slayer', 50)],
      },
      {
        description: 'Kill a metal dragon in Brimhaven Dungeon.',
        notes: 'Protection from dragonfire, 875 coins, and weaponry required.',
        requirements: [skill('woodcutting', 10)],
      },
    ],
  },
  itemReward: 'Karamja gloves',
  medium: {
    itemReward: 'Karamja gloves 2',
    itemsRequired: [
      '200 coins initial',
      'Spider carcass and skewer stick',
      'Raw karambwanji and fishing vessel',
      'Fruit tree sapling, spade, rake',
      'Teasing stick, knife, logs',
      '875 coins for Brimhaven access',
      'Machete and gems for trade',
    ],
    questsRequired: ['Dragon Slayer I', 'Shilo Village', 'Jungle Potion', 'Tai Bwo Wannai Trio', 'The Grand Tree'],
    rewards: {
      description: [
        {
          main: 'Karamja gloves 2',
          other: ['10% additional Agility experience from all obstacles in the Brimhaven Agility Arena'],
        },
        {
          main: 'Access to the underground portion of the Shilo Village mine',
          other: [],
        },
        {
          main: '1 Antique lamp worth 5,000 experience in any skill of at least level 30',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 5000, levelToUse: 30 }],
    },
    skillsRequired: [
      { boostable: true, level: 40, skill: 'agility' },
      { boostable: true, level: 16, skill: 'cooking' },
      { boostable: true, level: 50, skill: 'woodcutting' },
      { boostable: true, level: 65, skill: 'fishing' },
      { boostable: true, level: 27, skill: 'farming' },
      { boostable: true, level: 41, skill: 'hunter' },
    ],
    tasks: [
      {
        description: 'Claim a ticket from the Agility Arena in Brimhaven.',
        notes: '200 coins required.',
        requirements: [skill('agility', 40)],
      },
      {
        description: 'Discover hidden walls in the dungeon below the volcano.',
        requirements: [quest('Dragon Slayer I')],
      },
      {
        description: 'Visit the Isle of Crandor via the dungeon below the volcano.',
        notes: 'Must go through hidden wall, past lesser demons, and climb rope to surface.',
        requirements: [quest('Dragon Slayer I')],
      },
      {
        description: "Use Vigroy and Hajedy's cart service.",
        notes: '200 coins required.',
        requirements: [quest('Shilo Village')],
      },
      {
        description: 'Earn 100% favour in the village of Tai Bwo Wannai.',
        requirements: [quest('Jungle Potion'), skill('woodcutting', 10)],
      },
      {
        description: 'Cook a spider on a stick.',
        notes: 'Spider carcass and skewer stick or arrow shaft required.',
        requirements: [skill('cooking', 16)],
      },
      {
        description: 'Charter the Lady of the Waves from Cairn Isle to Port Khazard.',
        notes: 'Ship ticket or 20-50 coins required.',
        requirements: [quest('Shilo Village')],
      },
      {
        description: 'Cut a log from a teak tree.',
        notes: 'Teak trees found in Hardwood Grove or Kharazi Jungle.',
        requirements: [skill('woodcutting', 35), quest('Jungle Potion')],
      },
      {
        description: 'Cut a log from a mahogany tree.',
        notes: 'Mahogany trees found in Hardwood Grove or Kharazi Jungle.',
        requirements: [skill('woodcutting', 50), quest('Jungle Potion')],
      },
      {
        description: 'Catch a karambwan.',
        notes: 'Karambwan vessel, raw karambwanji, and small fishing net required.',
        requirements: [quest('Tai Bwo Wannai Trio'), skill('fishing', 65)],
      },
      {
        description: 'Exchange gems for a machete.',
        notes: 'Gout tuber and gem payment required.',
        requirements: [quest('Jungle Potion')],
      },
      {
        description: 'Use the gnome glider to travel to Karamja.',
        requirements: [quest('The Grand Tree')],
      },
      {
        description: 'Grow a healthy fruit tree in the patch near Brimhaven.',
        notes: 'Fruit tree sapling, spade, and rake required.',
        requirements: [skill('farming', 27)],
      },
      {
        description: 'Trap a horned graahk.',
        notes: 'Teasing stick or spear, knife, and logs required.',
        requirements: [skill('hunter', 41)],
      },
      {
        description: 'Chop the vines to gain deeper access to Brimhaven Dungeon.',
        notes: 'Any axe and 875 coins required.',
        requirements: [skill('woodcutting', 10)],
      },
      {
        description: 'Cross the lava using the stepping stones within Brimhaven Dungeon.',
        notes: 'Any axe and 875 coins required.',
        requirements: [skill('woodcutting', 10), skill('agility', 12)],
      },
      {
        description: 'Climb the stairs within Brimhaven Dungeon.',
        notes: 'Any axe and 875 coins required.',
        requirements: [skill('woodcutting', 10)],
      },
      {
        description: 'Charter a ship from the shipyard in the far east of Karamja.',
        notes: 'Enough coins to pay the fare required.',
        requirements: [quest('The Grand Tree')],
      },
      {
        description: 'Mine a red topaz from a gem rock.',
        notes: 'Any pickaxe required.',
        requirements: [skill('mining', 40), quest('Jungle Potion')],
      },
    ],
  },
  name: 'Karamja Diary',
};

export default KaramjaDiary;
