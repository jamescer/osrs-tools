import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Desert Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Desert_Diary
 */
export const DesertDiary: Diary = {
  easy: {
    itemReward: 'Desert amulet 1',
    itemsRequired: ['Pickaxe', 'Hatchet', 'Hunter supplies'],
    questsRequired: [],
    rewards: {
      description: [
        {
          main: 'Desert amulet 1',
          other: ['Provides unlimited teleports to the Nardah area'],
        },
        {
          main: '1 Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: '10% more Agility experience in the Shantay Pass Dungeon',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    skillsRequired: [
      { boostable: true, level: 20, skill: 'agility' },
      { boostable: true, level: 4, skill: 'hunter' },
      { boostable: true, level: 21, skill: 'thieving' },
    ],
    tasks: [
      {
        description: 'Complete a lap of the Shantay Pass course.',
        requirements: [skill('agility', 20)],
      },
      {
        description: 'Mine copper ore south of Pollnivneach using a copper pickaxe.',
        requirements: [skill('mining', 1)],
      },
      {
        description: 'Enter the Smoke Dungeon.',
        requirements: [skill('slayer', 1)],
      },
      {
        description: 'Chop a log in the desert with a hatchet.',
        requirements: [skill('woodcutting', 1)],
      },
      {
        description: 'Catch a scorpion in the Pollnivneach oasis.',
        requirements: [skill('hunter', 4)],
      },
      {
        description: 'Travel to the Kharidian Desert using a carpet or traverse the desert.',
        requirements: [],
      },
      {
        description: 'Craft an Amulet of Glory.',
        notes: 'Must have obtained the unfinished amulet from a dungeon.',
        requirements: [skill('crafting', 80)],
      },
      {
        description: 'Have a barbarian give you tools at the Uncivilized Area.',
        requirements: [skill('barbarian', 30, false)],
      },
      {
        description: 'Uncover the pyramid in the Pyramid Plunder minigame.',
        requirements: [skill('thieving', 21)],
      },
      {
        description: 'Defeat a dust devil in the Smoke Dungeon.',
        requirements: [skill('slayer', 65)],
      },
    ],
  },
  elite: {
    itemReward: 'Desert amulet 4',
    itemsRequired: ['Crafting supplies', 'Combat gear', 'High-level runes and spells'],
    questsRequired: ['Desert Treasure I', 'Desert Treasure II - The Fallen Empire'],
    rewards: {
      description: [
        {
          main: 'Desert amulet 4',
          other: ['Provides unlimited daily teleports to the desert'],
        },
        {
          main: '1 Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'Permanently doubled Desert Treasure drops',
          other: [],
        },
        {
          main: 'Access to the Vault of Shadows',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    skillsRequired: [
      { boostable: true, level: 91, skill: 'thieving' },
      { boostable: true, level: 90, skill: 'crafting' },
      { boostable: true, level: 92, skill: 'magic' },
      { boostable: false, level: 99, skill: 'mining' },
      { boostable: false, level: 99, skill: 'smithing' },
    ],
    tasks: [
      {
        description: 'Complete the entire Pyramid Plunder at elite level.',
        requirements: [skill('thieving', 91)],
      },
      {
        description: 'Craft 100 onyx jewelry.',
        requirements: [skill('crafting', 90)],
      },
      {
        description: 'Defeat Kelibimor.',
        requirements: [quest('Desert Treasure II - The Fallen Empire'), skill('combat', 95)],
      },
      {
        description: 'Achieve 99 Experience in three desert-related skills.',
        requirements: [skill('mining', 99), skill('smithing', 99), skill('crafting', 99)],
      },
      {
        description: 'Complete the Ancient Challenges.',
        requirements: [quest('Desert Treasure II - The Fallen Empire'), skill('magic', 92)],
      },
    ],
  },
  hard: {
    itemReward: 'Desert amulet 3',
    itemsRequired: ['Mining supplies', 'Crafting supplies', 'Cooking supplies', 'Combat gear'],
    questsRequired: ['Desert Treasure I', 'Desert Treasure II - The Fallen Empire', 'The Feud'],
    rewards: {
      description: [
        {
          main: 'Desert amulet 3',
          other: ['Provides ten daily teleports to the desert'],
        },
        {
          main: '1 Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: '10% increased XP in the Pyramid Plunder minigame',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    skillsRequired: [
      { boostable: true, level: 67, skill: 'crafting' },
      { boostable: false, level: 60, skill: 'construction' },
      { boostable: true, level: 67, skill: 'mining' },
      { boostable: true, level: 85, skill: 'slayer' },
      { boostable: true, level: 71, skill: 'thieving' },
      { boostable: true, level: 80, skill: 'cooking' },
      { boostable: true, level: 70, skill: 'smithing' },
      { boostable: true, level: 66, skill: 'magic' },
    ],
    tasks: [
      {
        description: 'Craft an onyx.',
        requirements: [skill('crafting', 67)],
      },
      {
        description: 'Complete the Fortress of Security.',
        requirements: [skill('construction', 60, false)],
      },
      {
        description: 'Kill a blue dragon in the Lair.',
        requirements: [skill('combat', 50)],
      },
      {
        description: 'Mine diamonds in the diamond quarry.',
        requirements: [skill('mining', 67)],
      },
      {
        description: 'Kill a kalphite guardian or kalphite dungeon monster.',
        requirements: [skill('slayer', 85)],
      },
      {
        description: 'Defeat all bosses in the Ancient Dungeon.',
        requirements: [quest('Desert Treasure II - The Fallen Empire')],
      },
      {
        description: 'Complete high-level Pyramid Plunder.',
        requirements: [skill('thieving', 71)],
      },
      {
        description: 'Cook a shark in the desert.',
        requirements: [skill('cooking', 80)],
      },
      {
        description: 'Smith an adamant or better item in the desert.',
        requirements: [skill('smithing', 70)],
      },
      {
        description: 'Teleport to Pollnivneach with Magic.',
        requirements: [skill('magic', 66)],
      },
    ],
  },
  itemReward: 'Desert amulet',
  medium: {
    itemReward: 'Desert amulet 2',
    itemsRequired: ['Slayer supplies', 'Firemaking supplies', 'Fletching supplies'],
    questsRequired: ['Desert Treasure I', 'The Feud'],
    rewards: {
      description: [
        {
          main: 'Desert amulet 2',
          other: ['Provides five daily teleports to the desert'],
        },
        {
          main: '1 Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: '10% more Agility experience in the Agility Pyramid',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    skillsRequired: [
      { boostable: true, level: 50, skill: 'slayer' },
      { boostable: true, level: 52, skill: 'agility' },
      { boostable: true, level: 21, skill: 'thieving' },
      { boostable: true, level: 50, skill: 'firemaking' },
      { boostable: true, level: 5, skill: 'fletching' },
      { boostable: true, level: 20, skill: 'fishing' },
    ],
    tasks: [
      {
        description: 'Assign a Slayer task from Sumona.',
        requirements: [quest('Desert Treasure I'), skill('slayer', 50)],
      },
      {
        description: 'Complete the Agility Pyramid course.',
        requirements: [skill('agility', 52)],
      },
      {
        description: 'Complete the Pyramid Plunder minigame.',
        requirements: [skill('thieving', 21)],
      },
      {
        description: 'Make a fire in the desert.',
        requirements: [skill('firemaking', 50)],
      },
      {
        description: 'Kill a blue dragon in the Lair.',
        requirements: [skill('combat', 34)],
      },
      {
        description: 'Travel to the Desert using the Carpet Ride.',
        requirements: [quest('The Feud')],
      },
      {
        description: 'Fletch a shortbow in the desert.',
        requirements: [skill('fletching', 5)],
      },
      {
        description: 'Fish in the river north of Al Kharid.',
        requirements: [skill('fishing', 20)],
      },
      {
        description: 'Visit the Dye Shop in Pollnivneach.',
        requirements: [],
      },
      {
        description: 'Harvest cactus spines.',
        requirements: [skill('woodcutting', 1)],
      },
    ],
  },
  name: 'Desert Diary',
};

export default DesertDiary;
