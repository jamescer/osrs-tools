import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Kourend & Kebos Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Kourend_%26_Kebos_Diary
 */
export const KourendKebosDiary: Diary = {
  easy: {
    itemReward: "Rada's blessing 1",
    rewards: {
      description: [
        {
          main: "Rada's blessing 1",
          other: [
            'Three daily teleports to the Kourend Woodland',
            '2% chance to catch two fish at once anywhere when equipped (no extra XP)',
          ],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Entrance fee for Crabclaw Isle lowered to 5,000 coins',
          other: [],
        },
        {
          main: "Doubled chance at receiving a Xeric's talisman from lizardmen",
          other: [],
        },
        {
          main: "20% discount on Eodan's tanning services",
          other: [],
        },
        {
          main: 'Access to the cooking ranges in the Hosidius Kitchen (5% increased success rate)',
          other: [],
        },
        {
          main: 'Farming patches in Hosidius, south of the church, will never get diseased',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Mine some Iron ore at the Mount Karuulm mine.',
        requirements: [skill('Mining', 15)],
      },
      {
        description: 'Kill a Sand crab.',
        requirements: [],
      },
      {
        description: 'Hand in a book at the Arceuus Library.',
        requirements: [],
      },
      {
        description: 'Steal from a Hosidius food stall.',
        requirements: [skill('Thieving', 25)],
      },
      {
        description: 'Browse the Warrens General Store.',
        requirements: [],
      },
      {
        description: "Take a boat to Land's End.",
        notes: 'Travel with Veos or Cabin Boy Herbert from Port Sarim or Port Piscarilius.',
        requirements: [],
      },
      {
        description: 'Pray at the Altar in Kourend Castle.',
        notes: 'The altar is found on the top floor of the castle.',
        requirements: [],
      },
      {
        description: 'Dig up some Saltpetre.',
        requirements: [],
      },
      {
        description: 'Enter your Player Owned House from Hosidius.',
        notes: 'Costs 8,750 coins to move your house to Hosidius (can only be done after visiting Great Kourend).',
        requirements: [skill('Construction', 25, false)],
      },
      {
        description: 'Do a lap of either tier of the Shayzien Agility Course.',
        requirements: [],
      },
      {
        description: 'Create a Strength potion in the Lovakengj pub.',
        notes: 'Requires a tarromin potion (unf) and limpwurt root.',
        requirements: [quest('Druidic Ritual'), skill('Herblore', 12)],
      },
      {
        description: 'Fish a Trout from the River Molch.',
        notes: 'The fishing spot is found south-east of the Farming Guild.',
        requirements: [skill('Fishing', 20)],
      },
    ],
  },
  elite: {
    itemReward: "Rada's blessing 4",
    rewards: {
      description: [
        {
          main: "Rada's blessing 4",
          other: [
            'Unlimited teleports to the top of Mount Karuulm',
            '8% chance to catch two fish at once anywhere when equipped (no extra XP)',
            'Has a Prayer bonus of +2 when equipped',
          ],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: "Roughly 11% more Slayer reward points from Konar quo Maten's tasks",
          other: [],
        },
        {
          main: '10% additive success rate in the Hosidius Kitchen cooking ranges',
          other: [],
        },
        {
          main: 'Permanent protection from the burning effect in the Karuulm Slayer Dungeon',
          other: [],
        },
        {
          main: 'Ashes scattered via the Ash sanctifier now grant full Prayer XP',
          other: [],
        },
        {
          main: "80% discount on Eodan's tanning service",
          other: [],
        },
        {
          main: '10% additional blood runes from the false blood altar',
          other: [],
        },
        {
          main: '10% increased chance of obtaining higher-tier ores in the Blast mine',
          other: [],
        },
        {
          main: 'Thirus offers 80 dynamite for free every day',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: 'Craft one or more Blood runes from Dark essence.',
        notes: 'Mine a dark essence block, break it into fragments, then use fragments on the Kourend Blood Altar.',
        requirements: [skill('Runecraft', 77), skill('Mining', 38), skill('Crafting', 38)],
      },
      {
        description: 'Chop some Redwood logs.',
        requirements: [skill('Woodcutting', 90)],
      },
      {
        description: 'Defeat Skotizo in the Catacombs of Kourend.',
        notes: 'Requires a dark totem.',
        requirements: [],
      },
      {
        description: 'Catch an Anglerfish and cook it whilst in Great Kourend.',
        notes: 'Requires a fishing rod and sandworms.',
        requirements: [skill('Fishing', 82), skill('Cooking', 84)],
      },
      {
        description: 'Kill a Hydra in the Karuulm Slayer Dungeon.',
        notes: 'Either variant may be killed. Only the Alchemical Hydra requires a slayer task.',
        requirements: [skill('Slayer', 95)],
      },
      {
        description: 'Create an Ape Atoll teleport tablet.',
        notes: 'Requires Arceuus spellbook selected. Requires a dark essence block and runes.',
        requirements: [skill('Magic', 90)],
      },
      {
        description: 'Complete a raid in the Chambers of Xeric.',
        requirements: [],
      },
      {
        description: 'Create your own Battlestaff from scratch within the Farming Guild.',
        notes: 'Grow a celastrus tree and craft the staff from the bark. Requires celastrus sapling, knife, and axe.',
        requirements: [skill('Farming', 85), skill('Fletching', 40)],
      },
    ],
  },

  hard: {
    itemReward: "Rada's blessing 3",
    rewards: {
      description: [
        {
          main: "Rada's blessing 3",
          other: [
            'Unlimited teleports to the Kourend Woodland',
            'Three daily teleports to the top of Mount Karuulm',
            '6% chance to catch two fish at once anywhere when equipped (no extra XP)',
            'Has a Prayer bonus of +1 when equipped',
          ],
        },
        {
          main: 'Ash sanctifier (claimable from Tyss)',
          other: ['Automatically scatters demonic ashes, granting half the Prayer XP'],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Any slayer helmet usable in place of Shayzien helm (5) against lizardman shamans',
          other: [],
        },
        {
          main: "60% discount on Eodan's tanning services",
          other: [],
        },
        {
          main: '5% increased chance to save a harvest life at the Hosidius and Farming Guild herb patches',
          other: [],
        },
        {
          main: 'Thirus offers 40 dynamite for free every day',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Enter the Woodcutting Guild.',
        requirements: [skill('Woodcutting', 60)],
      },
      {
        description: 'Smelt an Adamantite bar in The Forsaken Tower.',
        notes: 'Using the Superheat Item spell does not count.',
        requirements: [quest('The Forsaken Tower'), skill('Smithing', 70)],
      },
      {
        description: 'Kill a Lizardman Shaman in the Lizardman Temple.',
        requirements: [],
      },
      {
        description: 'Mine some Lovakite.',
        requirements: [skill('Mining', 65)],
      },
      {
        description: 'Plant some Logavano seeds at the Tithe Farm.',
        requirements: [skill('Farming', 74)],
      },
      {
        description: 'Kill a Zombie in the Shayzien Crypts.',
        notes: 'Requires a light source.',
        requirements: [],
      },
      {
        description: "Teleport to Xeric's Heart using Xeric's Talisman.",
        notes: "Requires a Xeric's talisman charged with a lizardman fang.",
        requirements: [],
      },
      {
        description: 'Deliver an artefact to Captain Khaled.',
        notes: 'Requires a lockpick.',
        requirements: [skill('Thieving', 49)],
      },
      {
        description: 'Kill a Wyrm in the Karuulm Slayer Dungeon.',
        notes: 'Requires boots of stone, brimstone, or granite.',
        requirements: [skill('Slayer', 62)],
      },
      {
        description: 'Cast Monster Examine on a Troll south of Mount Quidamortem.',
        notes: 'Requires Lunar spellbook selected.',
        requirements: [quest('Dream Mentor'), skill('Magic', 66)],
      },
    ],
  },

  itemReward: "Rada's blessing",

  medium: {
    itemReward: "Rada's blessing 2",
    rewards: {
      description: [
        {
          main: "Rada's blessing 2",
          other: [
            'Five daily teleports to the Kourend Woodland',
            '4% chance to catch two fish at once anywhere when equipped (no extra XP)',
            'Has a Prayer bonus of +1 when equipped',
          ],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: 'Free access to Crabclaw Isle',
          other: [],
        },
        {
          main: "40% discount on Eodan's tanning services",
          other: [],
        },
        {
          main: '5% chance to mine two dense essence blocks at once',
          other: [],
        },
        {
          main: 'Thirus offers 20 dynamite for free every day',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: 'Travel to the Fairy Ring south of Mount Karuulm.',
        notes: 'Use fairy ring code CIR. Requires a dramen or lunar staff.',
        requirements: [quest('Fairytale II - Cure a Queen')],
      },
      {
        description: 'Kill a Lizardman.',
        notes: 'Antipoison is recommended.',
        requirements: [],
      },
      {
        description: "Use Kharedst's memoirs to teleport to all five cities in Great Kourend.",
        notes: 'Requires completion of all five Kourend questline quests. Use the book or the Book of the Dead.',
        requirements: [
          quest('The Depths of Despair'),
          quest('The Queen of Thieves'),
          quest('Tale of the Righteous'),
          quest('The Forsaken Tower'),
          quest('The Ascent of Arceuus'),
        ],
      },
      {
        description: 'Mine some Volcanic Sulphur.',
        notes: 'Requires a face mask, gas mask, or slayer helmet.',
        requirements: [skill('Mining', 42)],
      },
      {
        description: 'Enter the Farming Guild.',
        notes: "Must walk through the guild's main entrance.",
        requirements: [skill('Farming', 45)],
      },
      {
        description: 'Switch to the Necromancy Spellbook at Tyss.',
        requirements: [],
      },
      {
        description: 'Repair a Piscarilius crane.',
        notes: 'Requires a hammer, 3 regular planks, and about 50 nails.',
        requirements: [skill('Crafting', 30), skill('Construction', 30)],
      },
      {
        description: 'Deliver some intelligence to Captain Ginea.',
        requirements: [],
      },
      {
        description: 'Catch a Bluegill on Molch Island.',
        notes: 'Requires king worms (found on the island) or fish offcuts.',
        requirements: [skill('Fishing', 43), skill('Hunter', 35)],
      },
      {
        description: 'Use the boulder leap shortcut in the Arceuus essence mine.',
        requirements: [skill('Agility', 49)],
      },
      {
        description: 'Subdue the Wintertodt.',
        notes: 'Must earn at least 500 points. Requires an axe, tinderbox, and warm clothing.',
        requirements: [skill('Firemaking', 50)],
      },
      {
        description: 'Catch a Chinchompa in the Kourend Woodland.',
        requirements: [quest("Eagles' Peak"), skill('Hunter', 53)],
      },
      {
        description: 'Chop some Mahogany logs north of the Farming Guild.',
        requirements: [skill('Woodcutting', 50)],
      },
    ],
  },

  name: 'Kourend & Kebos Diary',
};

export default KourendKebosDiary;
