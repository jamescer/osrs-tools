import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Lumbridge & Draynor Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Lumbridge_%26_Draynor_Diary
 */
export const LumbridgeDraynorDiary: Diary = {
  easy: {
    itemReward: 'Lumbridge & Draynor headgear 1',
    itemsRequired: ['Axe', 'Fishing rod', 'Copper ore', 'Arrows'],
    questsRequired: [],
    rewards: {
      description: [
        {
          main: 'Lumbridge & Draynor headgear 1',
          other: ['Grants passage to the Lumbridge area without previous quests'],
        },
        {
          main: '1 Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Increased XP from local area training',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    skillsRequired: [
      { boostable: true, level: 1, skill: 'woodcutting' },
      { boostable: true, level: 1, skill: 'fishing' },
      { boostable: true, level: 1, skill: 'cooking' },
      { boostable: true, level: 1, skill: 'smithing' },
      { boostable: true, level: 1, skill: 'mining' },
      { boostable: true, level: 31, skill: 'magic' },
      { boostable: true, level: 1, skill: 'fletching' },
    ],
    tasks: [
      {
        description: 'Chop some wood with an axe.',
        requirements: [skill('woodcutting', 1)],
      },
      {
        description: 'Fish some shrimp.',
        requirements: [skill('fishing', 1)],
      },
      {
        description: 'Cook a piece of meat.',
        requirements: [skill('cooking', 1)],
      },
      {
        description: 'Smelt some copper ore into a copper bar.',
        requirements: [skill('smithing', 1)],
      },
      {
        description: 'Mine some copper ore.',
        requirements: [skill('mining', 1)],
      },
      {
        description: 'Damage some targets in the Lumbridge area.',
        requirements: [skill('attack', 1)],
      },
      {
        description: 'Fletch some arrows.',
        requirements: [skill('fletching', 1)],
      },
      {
        description: 'Travel to Port Sarim via boat.',
        requirements: [],
      },
      {
        description: 'Use the Lumbridge Teleport spell.',
        requirements: [skill('magic', 31)],
      },
      {
        description: 'Complete a beginner task from a NPC.',
        requirements: [],
      },
    ],
  },
  elite: {
    itemReward: 'Lumbridge & Draynor headgear 4',
    itemsRequired: ['Endgame supplies', 'Master level materials'],
    questsRequired: ['Ernest the Chicken', 'Tree Gnome Village', 'Rune Memories'],
    rewards: {
      description: [
        {
          main: 'Lumbridge & Draynor headgear 4',
          other: ['Unlimited teleports and all perks from lower tiers'],
        },
        {
          main: '1 Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'Free access to all elite areas and doubled boss loot',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    skillsRequired: [
      { boostable: true, level: 95, skill: 'slayer' },
      { boostable: false, level: 100, skill: 'combat' },
      { boostable: false, level: 99, skill: 'agility' },
      { boostable: false, level: 99, skill: 'cooking' },
      { boostable: false, level: 99, skill: 'smithing' },
      { boostable: false, level: 99, skill: 'crafting' },
      { boostable: true, level: 97, skill: 'magic' },
    ],
    tasks: [
      {
        description: 'Defeat the ultimate Lumbridge boss.',
        requirements: [skill('slayer', 95), skill('combat', 100)],
      },
      {
        description: 'Complete elite obstacle course perfectly.',
        requirements: [skill('agility', 99)],
      },
      {
        description: 'Master all Lumbridge skills at 99.',
        requirements: [skill('cooking', 99), skill('smithing', 99), skill('crafting', 99)],
      },
      {
        description: 'Claim the Crown of Lumbridge.',
        requirements: [quest('Rune Memories'), skill('combat', 100)],
      },
      {
        description: 'Craft a legendary Lumbridge artifact.',
        requirements: [skill('crafting', 99), skill('magic', 97)],
      },
    ],
  },
  hard: {
    itemReward: 'Lumbridge & Draynor headgear 3',
    itemsRequired: ['High-level combat gear', 'Crafting and smithing materials'],
    questsRequired: ['Ernest the Chicken', 'Tree Gnome Village', 'Rune Memories'],
    rewards: {
      description: [
        {
          main: 'Lumbridge & Draynor headgear 3',
          other: ['10 free teleports daily and reduced shop prices'],
        },
        {
          main: '1 Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Access to exclusive boss arena',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    skillsRequired: [
      { boostable: true, level: 50, skill: 'slayer' },
      { boostable: true, level: 60, skill: 'combat' },
      { boostable: true, level: 65, skill: 'agility' },
      { boostable: true, level: 80, skill: 'crafting' },
      { boostable: true, level: 90, skill: 'smithing' },
    ],
    tasks: [
      {
        description: 'Defeat a boss in the Lumbridge Dungeon.',
        requirements: [skill('slayer', 50), skill('combat', 60)],
      },
      {
        description: 'Complete the hard Lumbridge obstacle course.',
        requirements: [skill('agility', 65)],
      },
      {
        description: 'Craft an adamant item.',
        requirements: [skill('crafting', 80)],
      },
      {
        description: 'Smith a runite platebody.',
        requirements: [skill('smithing', 90)],
      },
      {
        description: 'Achieve 99 in a Lumbridge-related skill.',
        requirements: [skill('fishing', 99)],
      },
    ],
  },
  itemReward: 'Lumbridge/Draynor headgear',
  medium: {
    itemReward: 'Lumbridge & Draynor headgear 2',
    itemsRequired: ['Combat gear', 'Crafting supplies', 'Smithing bars', 'Fishing supplies'],
    questsRequired: ['Ernest the Chicken', 'Tree Gnome Village'],
    rewards: {
      description: [
        {
          main: 'Lumbridge & Draynor headgear 2',
          other: ['5 free teleports daily to Lumbridge'],
        },
        {
          main: '1 Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: 'Faster travel to Draynor area',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    skillsRequired: [
      { boostable: true, level: 20, skill: 'combat' },
      { boostable: true, level: 15, skill: 'agility' },
      { boostable: true, level: 14, skill: 'farming' },
      { boostable: true, level: 20, skill: 'smithing' },
      { boostable: true, level: 20, skill: 'fishing' },
      { boostable: true, level: 37, skill: 'magic' },
    ],
    tasks: [
      {
        description: 'Defeat a demon in the Draynor Manor.',
        requirements: [quest('Ernest the Chicken'), skill('combat', 1)],
      },
      {
        description: 'Complete the Lumbridge Swamp shortcut.',
        requirements: [skill('agility', 15)],
      },
      {
        description: 'Grow an herb in the local herb patch.',
        requirements: [skill('farming', 14)],
      },
      {
        description: 'Craft an item at the Lumbridge forge.',
        requirements: [skill('crafting', 1)],
      },
      {
        description: 'Smith a bronze platebody.',
        requirements: [skill('smithing', 20)],
      },
      {
        description: 'Fish some better fish than shrimp.',
        requirements: [skill('fishing', 20)],
      },
      {
        description: 'Defeat a monster in Draynor Dungeon.',
        requirements: [skill('combat', 20)],
      },
      {
        description: 'Use a spirit tree to travel.',
        requirements: [quest('Tree Gnome Village')],
      },
      {
        description: 'Cast a useful spell in the area.',
        requirements: [skill('magic', 37)],
      },
      {
        description: 'Complete a medium task from an NPC.',
        requirements: [],
      },
    ],
  },
  name: 'Lumbridge & Draynor Diary',
};

export default LumbridgeDraynorDiary;
