import { CombatLevelRequirement, LevelRequirement, QuestPointRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);
const combat = (level: number) => new CombatLevelRequirement(level);
const qp = (points: number) => new QuestPointRequirement(points);

/**
 * Varrock Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Varrock_Diary
 */
export const VarrockDiary: Diary = {
  easy: {
    itemReward: 'Varrock armour 1',
    rewards: {
      description: [
        {
          main: 'Varrock armour 1',
          other: [
            'While worn, 10% chance of mining double clay, limestone, and ores up to and including gold (XP granted for both)',
            'While worn, 10% chance of smelting 2 bars at once (up to steel) at the Edgeville furnace',
          ],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Zaff sells 15 noted battlestaves per day for 105,000 coins',
          other: [],
        },
        {
          main: 'Skull sceptre holds up to 14 charges (up from 10)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Browse Thessalia's store.",
        requirements: [],
      },
      {
        description: 'Have Aubury teleport you to the Essence mine.',
        notes: 'You can right-click Aubury to teleport.',
        requirements: [quest('Rune Mysteries')],
      },
      {
        description: 'Mine some Iron ore in the south-east mining patch near Varrock.',
        requirements: [skill('Mining', 15)],
      },
      {
        description: 'Make a normal plank at the Sawmill.',
        notes: 'Requires 100 coins and logs.',
        requirements: [],
      },
      {
        description: 'Enter the second level of the Stronghold of Security.',
        notes: 'Food is recommended at low combat levels.',
        requirements: [],
      },
      {
        description: 'Jump over the fence south of Varrock.',
        requirements: [skill('Agility', 13)],
      },
      {
        description: 'Chop down a dying tree in the Lumber Yard.',
        requirements: [],
      },
      {
        description: 'Buy a newspaper.',
        notes: 'Can be bought from Benny in Varrock Square for 50 coins.',
        requirements: [],
      },
      {
        description: 'Give a dog a bone!',
        notes: 'Does not count when done during the investigation segment of Children of the Sun.',
        requirements: [],
      },
      {
        description: 'Spin a bowl on the pottery wheel and fire it in the oven in Barbarian Village.',
        requirements: [skill('Crafting', 8)],
      },
      {
        description: 'Speak to Haig Halen after obtaining at least 50 Kudos.',
        requirements: [],
      },
      {
        description: 'Craft some Earth runes from Essence.',
        requirements: [skill('Runecraft', 9)],
      },
      {
        description: 'Catch some Trout in the River Lum at Barbarian Village.',
        requirements: [skill('Fishing', 20)],
      },
      {
        description: 'Steal from the Tea stall in Varrock.',
        requirements: [skill('Thieving', 5)],
      },
    ],
  },
  elite: {
    itemReward: 'Varrock armour 4',
    rewards: {
      description: [
        {
          main: 'Varrock armour 4',
          other: [
            'Can be worn in place of a prospector jacket for clue steps and the experience bonus',
            'While worn, 10% chance of mining double of any ore',
            'While worn, 10% chance of smelting 2 bars at once (any kind) at the Edgeville furnace',
          ],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'Zaff sells 120 noted battlestaves per day for 840,000 coins',
          other: [],
        },
        {
          main: 'Skull sceptre holds up to 26 charges (up from 22)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: 'Create a super combat potion in Varrock west bank.',
        notes: 'Requires Super attack (4), super strength (4), super defence (4), and a torstol.',
        requirements: [quest('Druidic Ritual'), skill('Herblore', 90)],
      },
      {
        description: 'Use Lunar magic to make 20 mahogany planks at the Lumberyard.',
        notes: 'Must stand within the Lumber Yard, past the fence. Requires Lunar spellbook selected.',
        requirements: [quest('Dream Mentor'), skill('Magic', 86)],
      },
      {
        description: 'Bake a summer pie in the Cooking Guild.',
        notes: "Requires a chef's hat, golden chef's hat, Varrock armour 3, or Cooking cape to enter the guild.",
        requirements: [skill('Cooking', 95)],
      },
      {
        description: 'Smith and fletch ten rune darts within Varrock.',
        requirements: [quest('The Tourist Trap'), skill('Smithing', 89), skill('Fletching', 81)],
      },
      {
        description: 'Craft 100 or more Earth runes simultaneously from Essence without the use of Extracts.',
        requirements: [skill('Runecraft', 78)],
      },
    ],
  },

  hard: {
    itemReward: 'Varrock armour 3',
    rewards: {
      description: [
        {
          main: 'Varrock armour 3',
          other: [
            "Can be worn in place of a chef's hat to access the Cooks' Guild",
            'While worn, 10% chance of mining double ores up to and including adamantite',
            'While worn, 10% chance of smelting 2 bars at once (up to adamantite) at the Edgeville furnace',
            "Access to the bank in the Cooks' Guild",
          ],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Zaff sells 60 noted battlestaves per day for 420,000 coins',
          other: [],
        },
        {
          main: 'Skull sceptre holds up to 22 charges (up from 18)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Trade furs with the Fancy Dress Seller for a spottier cape and equip it.',
        notes: 'Requires 2 dashing kebbit fur and 800 coins. Hunter 69 required by ironmen to catch the kebbit.',
        requirements: [skill('Hunter', 66, false)],
      },
      {
        description: 'Speak to Orlando Smith when you have achieved 153 Kudos.',
        requirements: [],
      },
      {
        description: 'Make a Waka canoe near Edgeville.',
        requirements: [skill('Woodcutting', 57)],
      },
      {
        description: 'Teleport to Paddewwa.',
        notes: 'Requires Ancient Magicks selected.',
        requirements: [quest('Desert Treasure I'), skill('Magic', 54)],
      },
      {
        description: 'Teleport to Barbarian Village with a skull sceptre.',
        requirements: [],
      },
      {
        description: 'Chop some yew logs in Varrock and burn them at the top of the Varrock church.',
        notes: 'Steps must be done consecutively without completing other tasks in-between.',
        requirements: [skill('Woodcutting', 60), skill('Firemaking', 60)],
      },
      {
        description: 'Have the Varrock estate agent decorate your house with Fancy Stone.',
        notes: 'Costs 25,000 coins. Must finish the dialogue for the task to count.',
        requirements: [skill('Construction', 50, false)],
      },
      {
        description: 'Collect at least 2 yew roots from the Tree patch in Varrock Palace.',
        notes: 'Farming 68 needed to dig up more than a single root. Requires Woodcutting 60 to cut down the tree.',
        requirements: [skill('Farming', 68), skill('Woodcutting', 60)],
      },
      {
        description: 'Pray at the altar in Varrock palace with Smite active.',
        notes: 'The altar is found on the 1st floor (UK) / 2nd floor (US) of the palace.',
        requirements: [skill('Prayer', 52, false)],
      },
      {
        description: 'Squeeze through the obstacle pipe in Edgeville dungeon.',
        requirements: [skill('Agility', 51)],
      },
    ],
  },

  itemReward: 'Varrock armour',

  medium: {
    itemReward: 'Varrock armour 2',
    rewards: {
      description: [
        {
          main: 'Varrock armour 2',
          other: [
            'While worn, 10% chance of mining double ores up to and including mithril',
            'While worn, 10% chance of smelting 2 bars at once (up to mithril) at the Edgeville furnace',
          ],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: 'Zaff sells 30 noted battlestaves per day for 210,000 coins',
          other: [],
        },
        {
          main: 'Ability to toggle Varrock Teleport destination between Varrock Square and the Grand Exchange',
          other: [],
        },
        {
          main: 'Skull sceptre holds up to 18 charges (up from 14)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: 'Have the Apothecary in Varrock make you a Strength potion.',
        notes: "Requires limpwurt root, red spiders' eggs, and 5 coins.",
        requirements: [],
      },
      {
        description: "Enter the Champions' Guild.",
        requirements: [qp(32)],
      },
      {
        description: 'Select a colour for your kitten.',
        notes:
          'Requires partial completion of Garden of Tranquillity. Costs 100 coins and requires an activated ring of charos (a).',
        requirements: [quest("Gertrude's Cat"), quest('Garden of Tranquillity')],
      },
      {
        description: 'Use the spirit tree north of Varrock.',
        notes: 'The spirit tree is located in the north-eastern corner of the Grand Exchange.',
        requirements: [quest('Tree Gnome Village')],
      },
      {
        description: 'Perform the 4 emotes from the Stronghold of Security.',
        notes: 'Requires a Jagex Account or RuneScape Authenticator.',
        requirements: [],
      },
      {
        description: "Enter the Tolna dungeon after completing A Soul's Bane.",
        requirements: [quest("A Soul's Bane")],
      },
      {
        description: 'Teleport to the digsite using a Digsite pendant.',
        requirements: [quest('The Dig Site')],
      },
      {
        description: 'Cast the Teleport to Varrock spell.',
        requirements: [skill('Magic', 25)],
      },
      {
        description: 'Get a Slayer task from Vannaka.',
        requirements: [combat(40)],
      },
      {
        description: 'Make 20 Mahogany planks in one go.',
        notes: 'Right-click the Sawmill operator. Requires 20 mahogany logs and 30,000 coins.',
        requirements: [],
      },
      {
        description: 'Pick a White tree fruit.',
        requirements: [quest('Garden of Tranquillity'), skill('Farming', 25)],
      },
      {
        description: 'Use the balloon to travel from Varrock.',
        notes: 'The destination does not matter for this task.',
        requirements: [quest('Enlightened Journey'), skill('Farming', 30), skill('Firemaking', 40)],
      },
      {
        description: 'Complete a lap of the Varrock Agility course.',
        requirements: [skill('Agility', 30)],
      },
    ],
  },

  name: 'Varrock Diary',
};

export default VarrockDiary;
