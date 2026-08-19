import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Kandarin Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Kandarin_Diary
 */
export const KandarinDiary: Diary = {
  easy: {
    itemReward: 'Kandarin headgear 1',
    rewards: {
      description: [
        {
          main: 'Kandarin headgear 1',
          other: [
            'Acts as a light source when worn or held in the inventory',
            'While worn, gain double logs from regular trees (no extra XP)',
          ],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Coal trucks can hold up to 140 coal (up from 120)',
          other: [],
        },
        {
          main: 'Flax keeper offers 30 noted bow strings daily for 30 noted flax',
          other: [],
        },
        {
          main: "5% more marks of grace from the Seers' Village Rooftop Course",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Catch a Mackerel at Catherby.',
        requirements: [skill('Fishing', 16)],
      },
      {
        description: 'Buy a candle from the Chandler in Catherby.',
        requirements: [],
      },
      {
        description: "Collect five Flax from the Seers' flax fields.",
        requirements: [],
      },
      {
        description: "Play the Organ in Seers' church.",
        requirements: [],
      },
      {
        description: "Plant some Jute seeds in the patch north of McGrubor's Wood.",
        notes: 'This is the farming patch next to Rhonen.',
        requirements: [skill('Farming', 13)],
      },
      {
        description: 'Have Galahad make you a cup of tea.',
        requirements: [],
      },
      {
        description: 'Defeat one of each Elemental in the Elemental Workshop.',
        notes: 'These are the earth, water, air, and fire elemental found on the upper floor of the workshop.',
        requirements: [quest('Elemental Workshop I')],
      },
      {
        description: 'Get a pet fish from Harry in Catherby.',
        notes: 'Talk to Harry with a fishbowl of water, seaweed, and 10 coins in your inventory.',
        requirements: [],
      },
      {
        description: "Buy a Stew from the Seers' pub (Forester's Arms).",
        requirements: [],
      },
      {
        description: 'Speak to Sherlock.',
        requirements: [],
      },
      {
        description: 'Cross the Coal truck log shortcut.',
        requirements: [skill('Agility', 20)],
      },
    ],
  },
  elite: {
    itemReward: 'Kandarin headgear 4',
    rewards: {
      description: [
        {
          main: 'Kandarin headgear 4',
          other: ['Unlimited teleports to Sherlock'],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'First 200 coal in the coal trucks daily automatically transported to bank',
          other: [],
        },
        {
          main: 'Flax keeper offers 250 noted bow strings daily for 250 noted flax',
          other: [],
        },
        {
          main: '15% increased chance to save a harvest life at the Catherby herb patch',
          other: [],
        },
        {
          main: "50% discount on Thormac's enchanting services",
          other: [],
        },
        {
          main: 'Otto Godblessed turns your Zamorakian spear into a hasta for 150,000 coins (down from 300,000)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: 'Read the Blackboard at Barbarian Assault after reaching level 5 in every role.',
        notes: 'Requires earning enough honour points to buy level 5 in all four roles (about 5,600 points total).',
        requirements: [],
      },
      {
        description: 'Pick some Dwarf weed from the herb patch at Catherby.',
        requirements: [skill('Farming', 79)],
      },
      {
        description: 'Fish and cook 5 Sharks in Catherby using the Cooking gauntlets.',
        notes:
          'Must use the range in the specific building between the bank and archery shop. Steps must be done consecutively. Requires cooking gauntlets.',
        requirements: [quest('Family Crest'), skill('Fishing', 76), skill('Cooking', 80)],
      },
      {
        description: "Mix a Stamina mix on top of the Seers' Village bank.",
        notes: 'Requires Barbarian Herblore access (via Barbarian Training). Requires a stamina potion (2) and caviar.',
        requirements: [skill('Herblore', 86), skill('Agility', 60)],
      },
      {
        description: "Smith a Rune hasta at Otto's Grotto.",
        notes:
          'Requires Barbarian Smithing access (via Barbarian Training). Requires a runite bar, magic logs, and a hammer.',
        requirements: [skill('Smithing', 90)],
      },
      {
        description: 'Construct a Pyre ship from Magic logs.',
        notes:
          'Requires Barbarian Firemaking access (via Barbarian Training). Must use chewed bones, not mangled bones.',
        requirements: [skill('Firemaking', 85), skill('Crafting', 85)],
      },
      {
        description: 'Teleport to Catherby.',
        notes: 'Requires Lunar spellbook selected. Tele Group Catherby also works.',
        requirements: [quest('Lunar Diplomacy'), skill('Magic', 87)],
      },
    ],
  },
  hard: {
    itemReward: 'Kandarin headgear 3',
    rewards: {
      description: [
        {
          main: 'Kandarin headgear 3',
          other: ['One daily teleport to Sherlock'],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Coal trucks can hold up to 308 coal (up from 280)',
          other: [],
        },
        {
          main: 'Flax keeper offers 120 noted bow strings daily for 120 noted flax',
          other: [],
        },
        {
          main: "15% more marks of grace from the Seers' Village Rooftop Course",
          other: [],
        },
        {
          main: '10% increased chance to save a harvest life at the Catherby herb patch',
          other: [],
        },
        {
          main: "25% discount on Thormac's enchanting services",
          other: [],
        },
        {
          main: '10% more honour points from Barbarian Assault',
          other: [],
        },
        {
          main: "Camelot Teleport can now teleport to Seers' Village bank",
          other: [],
        },
        {
          main: '10% increased chance to trigger enchanted bolt special effects',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Catch a Leaping Sturgeon.',
        notes:
          "Must be caught at Otto's Grotto. Requires Barbarian Fishing (access via Barbarian Training). Requires a Barbarian rod and suitable bait.",
        requirements: [skill('Fishing', 70), skill('Agility', 45), skill('Strength', 45)],
      },
      {
        description: "Complete a lap of the Seers' Village Rooftop agility course.",
        requirements: [skill('Agility', 60)],
      },
      {
        description: "Create a Yew longbow from scratch around Seers' Village.",
        notes:
          'Chop a yew tree, cut the logs into a yew longbow (u), then finish with a bow string. Steps must be done consecutively.',
        requirements: [skill('Woodcutting', 60), skill('Fletching', 70)],
      },
      {
        description: "Enter the Seers' Village courthouse with Piety turned on.",
        notes: 'Requires completion of the Knight Waves Training Grounds.',
        requirements: [quest("King's Ransom"), skill('Prayer', 70, false), skill('Defence', 70, false)],
      },
      {
        description: 'Charge a Water Orb.',
        notes: 'Requires a dusty key or Agility 70. Protection from dragonfire recommended.',
        requirements: [skill('Magic', 56)],
      },
      {
        description: "Burn some Maple logs with a bow in Seers' Village.",
        notes: 'Requires Barbarian Firemaking access (via Barbarian Training).',
        requirements: [skill('Firemaking', 65)],
      },
      {
        description: 'Kill a Shadow Hound in the Shadow dungeon.',
        notes: 'Requires a ring of visibility (or ring of shadows) to enter the dungeon.',
        requirements: [quest('Desert Treasure I'), skill('Thieving', 53)],
      },
      {
        description: 'Kill a Mithril Dragon.',
        notes:
          'The Mithril dragon fought during Dragon Slayer II does not count. Requires Barbarian Firemaking access.',
        requirements: [],
      },
      {
        description: 'Purchase and equip a granite body from Barbarian Assault.',
        notes:
          'Requires defeating the Penance Queen. Buying and equipping count as separate steps — must be done consecutively.',
        requirements: [skill('Strength', 50), skill('Defence', 50)],
      },
      {
        description: "Have the Seers' estate agent decorate your house with Fancy Stone.",
        notes: 'Costs 25,000 coins. Must finish the dialogue or the task will not count.',
        requirements: [skill('Construction', 50, false)],
      },
      {
        description: "Smith an Adamant spear at Otto's Grotto.",
        notes:
          'Requires Barbarian Smithing access (via Barbarian Training). Requires yew logs, an adamantite bar, and a hammer.',
        requirements: [skill('Smithing', 75)],
      },
    ],
  },

  itemReward: 'Kandarin headgear',

  medium: {
    itemReward: 'Kandarin headgear 2',
    rewards: {
      description: [
        {
          main: 'Kandarin headgear 2',
          other: [],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: 'Coal trucks can hold up to 280 coal (up from 140)',
          other: [],
        },
        {
          main: 'Flax keeper offers 60 noted bow strings daily for 60 noted flax',
          other: [],
        },
        {
          main: "10% more marks of grace from the Seers' Village Rooftop Course",
          other: [],
        },
        {
          main: "10% increased XP from cutting maple trees in Seers' Village",
          other: [],
        },
        {
          main: '5% increased chance to save a harvest life at the Catherby herb patch',
          other: [],
        },
        {
          main: "Seers' Village spinning wheel spins 33% faster",
          other: [],
        },
        {
          main: 'Ropes are permanently secured at the Baxtorian Falls (after completion of Waterfall Quest)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: 'Complete a lap of the Barbarian agility course.',
        requirements: [quest("Alfred Grimhand's Barcrawl"), skill('Agility', 35)],
      },
      {
        description: 'Create a Super Antipoison potion from scratch in the Seers/Catherby area.',
        notes: 'Steps must be done consecutively without completing other tasks in-between.',
        requirements: [skill('Herblore', 48)],
      },
      {
        description: 'Enter the Ranging Guild.',
        requirements: [skill('Ranged', 40)],
      },
      {
        description: 'Use the grapple shortcut to get from the water obelisk to Catherby shore.',
        notes: 'Requires a mith grapple and any crossbow. Requires a dusty key or Agility 70.',
        requirements: [skill('Agility', 36), skill('Strength', 22, false), skill('Ranged', 39, false)],
      },
      {
        description: 'Catch and cook a Bass in Catherby.',
        notes: 'Steps must be done consecutively without completing other tasks in-between.',
        requirements: [skill('Fishing', 46), skill('Cooking', 43)],
      },
      {
        description: 'Teleport to Camelot.',
        requirements: [skill('Magic', 45)],
      },
      {
        description: "String a Maple shortbow in Seers' Village bank.",
        requirements: [skill('Fletching', 50)],
      },
      {
        description: 'Pick some Limpwurt root from the farming patch in Catherby.',
        notes: 'This is the flower patch next to Dantaera.',
        requirements: [skill('Farming', 26)],
      },
      {
        description: 'Create a Mind helmet.',
        notes: 'This task is automatically completed during Elemental Workshop II.',
        requirements: [quest('Elemental Workshop II')],
      },
      {
        description: 'Kill a Fire Giant inside the Baxtorian Waterfall dungeon.',
        requirements: [quest('Waterfall Quest')],
      },
      {
        description: 'Complete a wave of Barbarian Assault.',
        notes: 'Must complete the Barbarian Assault tutorial first.',
        requirements: [],
      },
      {
        description: 'Steal from the chest in Hemenster.',
        notes: 'The chest is in the building between the range and anvil buildings.',
        requirements: [skill('Thieving', 47)],
      },
      {
        description: "Travel to McGrubor's Wood by Fairy Ring.",
        notes: 'Use fairy ring code ALS. Requires a dramen or lunar staff.',
        requirements: [quest('Fairytale II - Cure a Queen')],
      },
      {
        description: 'Mine some coal near the coal trucks.',
        requirements: [skill('Mining', 30)],
      },
    ],
  },

  name: 'Kandarin Diary',
};

export default KandarinDiary;
