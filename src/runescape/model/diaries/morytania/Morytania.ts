import { CombatLevelRequirement, LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);
const combat = (level: number) => new CombatLevelRequirement(level);

/**
 * Morytania Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Morytania_Diary
 *
 * Note: Completion of Priest in Peril is required for all tasks (needed to enter Morytania).
 */
export const MorytaniaDiary: Diary = {
  easy: {
    itemReward: 'Morytania legs 1',
    rewards: {
      description: [
        {
          main: 'Morytania legs 1',
          other: ['Two daily teleports to the Pool of Slime beneath the Ectofuntus'],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Ghasts in Mort Myre Swamp ignore you half of the time',
          other: [],
        },
        {
          main: '2.5% more Slayer experience in the Slayer Tower while on a Slayer task',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Craft any Snelm from scratch in Morytania.',
        notes: 'Must be done outside of Mort Myre Swamp. Requires a chisel and any blamish shell.',
        requirements: [skill('Crafting', 15)],
      },
      {
        description: 'Cook a thin snail on the Port Phasmatys range.',
        notes: 'Requires 2 Ecto-tokens to enter Port Phasmatys, or completion of Ghosts Ahoy.',
        requirements: [skill('Cooking', 12)],
      },
      {
        description: 'Get a Slayer task from the Slayer Master in Canifis.',
        requirements: [combat(20)],
      },
      {
        description: 'Kill a Banshee in the Slayer Tower.',
        notes: 'Earmuffs or a Slayer helmet are recommended.',
        requirements: [skill('Slayer', 15)],
      },
      {
        description: 'Have Sbott in Canifis tan something for you.',
        requirements: [],
      },
      {
        description: 'Enter Mort Myre Swamp.',
        requirements: [],
      },
      {
        description: 'Kill a Ghoul.',
        requirements: [],
      },
      {
        description: 'Place a Scarecrow in the Morytania flower patch.',
        notes: 'Requires a bronze spear, watermelon, and a hay sack.',
        requirements: [skill('Farming', 23)],
      },
      {
        description: 'Offer some bonemeal at the Ectofuntus.',
        requirements: [],
      },
      {
        description: 'Kill a Werewolf in its human form using the Wolfbane Dagger.',
        requirements: [],
      },
      {
        description: 'Restore your prayer points at the Nature Altar.',
        notes: 'Requires you to have less than full Prayer points. Use fairy ring code BIP.',
        requirements: [quest('Nature Spirit')],
      },
    ],
  },
  elite: {
    itemReward: 'Morytania legs 4',
    rewards: {
      description: [
        {
          main: 'Morytania legs 4',
          other: [
            'Prevents ghasts from turning your food into rotten food when worn',
            'Unlimited teleports to the Pool of Slime beneath the Ectofuntus',
            'Unlimited teleports to Burgh de Rott',
            'Acts as a ghostspeak amulet when worn',
          ],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'Robin exchanges 39 bones daily for slime and bonemeal (up from 26)',
          other: [],
        },
        {
          main: '50% more Firemaking XP when burning shade remains',
          other: [],
        },
        {
          main: 'Bones buried via the Bonecrusher now grant full Prayer XP',
          other: [],
        },
        {
          main: 'Access to the disease-free herb patch on Harmony Island',
          other: [],
        },
        {
          main: '10% more Slayer XP in the Slayer Tower while on a Slayer task',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: 'Catch a shark in Burgh de Rott with your bare hands.',
        notes:
          'Requires Barbarian Fishing access. If boosting with Dragon harpoon special, bank the harpoon before catching the shark.',
        requirements: [quest('In Aid of the Myreque'), skill('Fishing', 96), skill('Strength', 76)],
      },
      {
        description: 'Cremate any Shade remains on a Magic or Redwood pyre.',
        notes: 'Requires magic or redwood pyre logs, any shade remains, and a tinderbox.',
        requirements: [quest("Shades of Mort'ton"), skill('Firemaking', 80)],
      },
      {
        description: 'Fertilize the Morytania herb patch using Lunar Magic.',
        notes: 'The herb patch is west of Port Phasmatys. Requires Lunar spellbook selected.',
        requirements: [quest('Lunar Diplomacy'), skill('Magic', 83)],
      },
      {
        description: 'Craft a Black dragonhide body in Canifis bank.',
        notes: 'Requires 3 black dragon leather, and a needle and thread.',
        requirements: [skill('Crafting', 84)],
      },
      {
        description: 'Kill an Abyssal demon in the Slayer Tower.',
        notes: 'Abyssal demons on the top floor do not require a Slayer task to kill.',
        requirements: [skill('Slayer', 85)],
      },
      {
        description: 'Loot the Barrows chest while wearing any complete Barrows set.',
        notes:
          'Includes the weapon that is part of the equipped set. All combat stats required are not boostable (Defence 70, and Attack 70/Strength 70/Ranged 70 depending on set).',
        requirements: [skill('Defence', 70, false)],
      },
    ],
  },

  hard: {
    itemReward: 'Morytania legs 3',
    rewards: {
      description: [
        {
          main: 'Morytania legs 3',
          other: [
            'Unlimited teleports to Burgh de Rott',
            'Five daily teleports to the Pool of Slime',
            'Acts as a ghostspeak amulet when worn',
          ],
        },
        {
          main: 'Bonecrusher (claimable from a ghost disciple wearing a ghostspeak amulet or legs 3+)',
          other: ['Automatically buries dropped bones, granting half the usual Prayer XP'],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Robin exchanges 26 bones daily for slime and bonemeal (up from 13)',
          other: [],
        },
        {
          main: 'Double Mort myre fungi when casting Bloom',
          other: [],
        },
        {
          main: '50% more Prayer XP from burning shade remains',
          other: [],
        },
        {
          main: '50% more runes from the Barrows chest',
          other: [],
        },
        {
          main: '7.5% more Slayer XP in the Slayer Tower while on a Slayer task',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Enter the Kharyrll Portal in your POH.',
        notes:
          'Costs 100,000 coins. Requires 2 limestone bricks, 3 teak planks, hammer, and saw. Needs 200 law runes and 100 blood runes to charge the portal.',
        requirements: [quest('Desert Treasure I'), skill('Magic', 66), skill('Construction', 50)],
      },
      {
        description: 'Climb up the advanced spike chain within the Slayer Tower.',
        notes: 'Located on the 1st floor near the Infernal Mages. Only a successful climb (no damage) counts.',
        requirements: [skill('Agility', 71)],
      },
      {
        description: 'Harvest some Watermelon from the Allotment patch on Harmony Island.',
        requirements: [quest('The Great Brain Robbery'), skill('Farming', 47)],
      },
      {
        description: "Chop and burn some Mahogany logs on Mos Le'Harmless.",
        notes: 'A witchwood icon and light source are recommended.',
        requirements: [quest('Cabin Fever'), skill('Woodcutting', 50), skill('Firemaking', 50)],
      },
      {
        description: 'Complete a Temple Trek with a hard companion.',
        notes: "It's not necessary to complete any events during the trek.",
        requirements: [quest('In Aid of the Myreque')],
      },
      {
        description: 'Kill a Cave Horror.',
        notes: 'Requires a witchwood icon and a light source.',
        requirements: [quest('Cabin Fever'), skill('Slayer', 58)],
      },
      {
        description: 'Harvest some Bittercap mushrooms from the patch in Canifis.',
        requirements: [skill('Farming', 53)],
      },
      {
        description: 'Pray at the Altar of Nature with Piety activated.',
        notes: 'Requires completion of the Knight Waves Training Grounds. Use fairy ring code BIP.',
        requirements: [
          quest('Nature Spirit'),
          quest("King's Ransom"),
          skill('Prayer', 70, false),
          skill('Defence', 70, false),
        ],
      },
      {
        description: 'Use the shortcut to get to the bridge over the Salve.',
        notes: 'Must use the shortcut to go downwards.',
        requirements: [skill('Agility', 65)],
      },
      {
        description: 'Mine some Mithril ore in the Abandoned Mine.',
        notes: 'A crystal-mine key is recommended for access to the veins on Level 2.',
        requirements: [quest('Haunted Mine'), skill('Mining', 55)],
      },
    ],
  },

  itemReward: 'Morytania legs',

  medium: {
    itemReward: 'Morytania legs 2',
    rewards: {
      description: [
        {
          main: 'Morytania legs 2',
          other: [
            'Five daily teleports to the Pool of Slime beneath the Ectofuntus',
            'Acts as a ghostspeak amulet when worn',
          ],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: 'Robin exchanges 13 bones daily for a bucket of slime and a pot of bonemeal each',
          other: [],
        },
        {
          main: '5% more Slayer experience in the Slayer Tower while on a Slayer task',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: 'Catch a swamp lizard.',
        requirements: [skill('Hunter', 29)],
      },
      {
        description: 'Complete a lap of the Canifis agility course.',
        requirements: [skill('Agility', 40)],
      },
      {
        description: 'Obtain some Bark from a Hollow tree.',
        requirements: [skill('Woodcutting', 45)],
      },
      {
        description: 'Travel to Dragontooth Isle.',
        notes:
          'Requires a ghostspeak amulet and 25 ecto-tokens. This task is automatically completed during Ghosts Ahoy.',
        requirements: [quest('Ghosts Ahoy')],
      },
      {
        description: 'Kill a Terror Dog.',
        notes: "Found in Tarn's Lair.",
        requirements: [quest('Lair of Tarn Razorlor'), skill('Slayer', 40)],
      },
      {
        description: 'Complete a game of Trouble Brewing.',
        notes:
          'You only have to complete the minigame once; winning is optional. Requires at least one opposing player to start.',
        requirements: [quest('Cabin Fever'), skill('Cooking', 40)],
      },
      {
        description: 'Board the Swamp boat at the Hollows.',
        requirements: [quest('Nature Spirit')],
      },
      {
        description: 'Make a batch of cannonballs at the Port Phasmatys furnace.',
        notes: 'Requires a steel bar and ammo mould.',
        requirements: [quest('Dwarf Cannon'), skill('Smithing', 35)],
      },
      {
        description: 'Kill a Fever Spider on Braindeath Island.',
        notes: 'This task is automatically completed during Rum Deal.',
        requirements: [quest('Rum Deal'), skill('Slayer', 42)],
      },
      {
        description: 'Use an Ectophial to return to Port Phasmatys.',
        requirements: [quest('Ghosts Ahoy')],
      },
      {
        description: 'Mix a Guthix Balance potion while in Morytania.',
        notes: 'Requires a restore potion, garlic, and silver dust (made by grinding a silver bar at the Ectofuntus).',
        requirements: [quest('In Aid of the Myreque'), skill('Herblore', 22)],
      },
    ],
  },

  name: 'Morytania Diary',
};

export default MorytaniaDiary;
