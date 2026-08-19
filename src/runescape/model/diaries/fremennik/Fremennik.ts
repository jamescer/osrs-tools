import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Fremennik Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Fremennik_Diary
 */
export const FremennikDiary: Diary = {
  easy: {
    itemReward: 'Fremennik sea boots 1',
    rewards: {
      description: [
        {
          main: 'Fremennik sea boots 1',
          other: [
            'One daily teleport to the Rellekka marketplace',
            'Peer the Seer acts as a bank deposit box',
            'Fossegrimen gives enchanted lyre an extra charge per offering',
          ],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Catch a Cerulean twitch.',
        notes: 'Found in the Rellekka Hunter area.',
        requirements: [skill('Hunter', 11)],
      },
      {
        description: "Change your boots at Yrsa's Shoe Store.",
        notes: 'Talk to Yrsa for a makeover (500 coins), or freely browse her clothing store.',
        requirements: [quest('The Fremennik Trials')],
      },
      {
        description: 'Kill 5 Rock crabs.',
        notes: 'Giant rock crabs and rock lobsters on Waterbirth Island do not count.',
        requirements: [],
      },
      {
        description: 'Craft a tiara from scratch in Rellekka.',
        notes: 'Mine silver ore from the Rellekka mine, then smelt it into a tiara. Steps must be done consecutively.',
        requirements: [
          quest('The Fremennik Trials'),
          skill('Mining', 20),
          skill('Smithing', 20),
          skill('Crafting', 23),
        ],
      },
      {
        description: 'Browse the Stonemasons shop.',
        notes: 'He is in western Keldagrim. Right-click to trade.',
        requirements: [quest('The Giant Dwarf')],
      },
      {
        description: 'Collect 5 Snape grass on Waterbirth Island.',
        notes: 'You can drop and pick up the same snape grass five times.',
        requirements: [],
      },
      {
        description: "Steal from the Keldagrim crafting or baker's stall.",
        notes: 'Located on the eastern side of the Keldagrim Palace.',
        requirements: [quest('The Giant Dwarf'), skill('Thieving', 5)],
      },
      {
        description: 'Fill a bucket with water at the Rellekka well.',
        requirements: [],
      },
      {
        description: 'Enter the Troll Stronghold.',
        requirements: [quest('Troll Stronghold')],
      },
      {
        description: 'Chop and burn some oak logs in the Fremennik Province.',
        notes: 'Oak trees can be found near the Rellekka house portal.',
        requirements: [skill('Woodcutting', 15), skill('Firemaking', 15)],
      },
    ],
  },
  elite: {
    itemReward: 'Fremennik sea boots 4',
    rewards: {
      description: [
        {
          main: 'Fremennik sea boots 4',
          other: [
            'Unlimited teleports to the Rellekka marketplace',
            'Dagannoth bones from the Dagannoth Kings are now noted (unless disabled)',
            '15% increased chance of gaining approval in Managing Miscellania when fishing or woodcutting',
            'Enchanted lyre can now teleport to Waterbirth Island, Jatizso, and Neitiznot',
            'Seal of passage no longer needed to interact with anyone on Lunar Isle',
          ],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: 'Kill each of the Dagannoth Kings.',
        notes:
          'All three (Rex, Supreme, Prime) must be killed consecutively without completing other tasks in-between.',
        requirements: [],
      },
      {
        description: 'Craft 56 astral runes simultaneously from Essence without the use of Extracts.',
        requirements: [quest('Lunar Diplomacy'), skill('Runecraft', 82)],
      },
      {
        description: 'Create a dragonstone amulet in the Neitiznot furnace.',
        notes: 'Crafting the unstrung version is sufficient; a ball of wool is not needed.',
        requirements: [quest('The Fremennik Isles'), skill('Crafting', 80)],
      },
      {
        description: 'Complete a lap of the Rellekka agility course.',
        requirements: [skill('Agility', 80)],
      },
      {
        description: 'Kill the generals of Armadyl, Bandos, Saradomin and Zamorak in the God Wars Dungeon.',
        notes:
          'Requires Agility 70, Strength 70, and Ranged 70 (all not boostable for GWD entry). You do not need to kill their bodyguards. Progress does not reset when doing other tasks.',
        requirements: [
          quest('Troll Stronghold'),
          skill('Agility', 70, false),
          skill('Strength', 70, false),
          skill('Ranged', 70, false),
        ],
      },
      {
        description: 'Slay a Spiritual mage within the Godwars Dungeon.',
        requirements: [quest('Troll Stronghold'), skill('Slayer', 83)],
      },
    ],
  },

  hard: {
    itemReward: 'Fremennik sea boots 3',
    rewards: {
      description: [
        {
          main: 'Fremennik sea boots 3',
          other: [
            'Five daily teleports to the Rellekka marketplace',
            'Roughly 18% increased XP and 25% more marks of grace from the Rellekka Rooftop Course',
            'Adamantite bars from aviansies killed in the God Wars Dungeon are now noted',
            'Enchanted lyre can now teleport to Waterbirth Island in addition to Rellekka',
            'Access to Tan Leather and Recharge Dragonstone from the Lunar spellbook',
          ],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Teleport to Trollheim.',
        requirements: [quest("Eadgar's Ruse"), skill('Magic', 61)],
      },
      {
        description: 'Catch a Sabre-toothed Kyatt.',
        notes: 'Requires a teasing stick, logs, and a knife.',
        requirements: [skill('Hunter', 55)],
      },
      {
        description: 'Mix a super defence potion in the Fremennik Province.',
        notes: 'Must be mixed in or near Rellekka. Requires cadantine potion (unf) and white berries.',
        requirements: [skill('Herblore', 66)],
      },
      {
        description: 'Steal from the Keldagrim Gem stall.',
        requirements: [quest('The Giant Dwarf'), skill('Thieving', 75)],
      },
      {
        description: 'Craft a Neitiznot shield on Neitiznot.',
        notes: 'Requires hammer, rope, bronze nails, and 2 arctic pine logs.',
        requirements: [quest('The Fremennik Isles'), skill('Woodcutting', 56)],
      },
      {
        description: 'Mine 5 Adamantite ores on Jatizso.',
        requirements: [quest('The Fremennik Isles'), skill('Mining', 70)],
      },
      {
        description: 'Obtain 100% support from your kingdom subjects.',
        requirements: [quest('Throne of Miscellania')],
      },
      {
        description: 'Teleport to Waterbirth Island.',
        notes: 'Requires Lunar spellbook selected.',
        requirements: [quest('Lunar Diplomacy'), skill('Magic', 72)],
      },
      {
        description: "Obtain the Blast Furnace Foreman's permission to use the Blast Furnace for free.",
        notes: 'Talk to the foreman using the correct dialogue options (1 > 3 > 1).',
        requirements: [quest('The Giant Dwarf'), skill('Smithing', 60, false)],
      },
    ],
  },

  itemReward: 'Fremennik sea boots',

  medium: {
    itemReward: 'Fremennik sea boots 2',
    rewards: {
      description: [
        {
          main: 'Fremennik sea boots 2',
          other: [
            'Three daily teleports to the Rellekka marketplace',
            '10% increased chance of gaining approval in Managing Miscellania when fishing or woodcutting',
          ],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: 'Slay a Brine rat.',
        notes: 'Requires a spade to enter the Brine Rat Cavern.',
        requirements: [quest("Olaf's Quest"), skill('Slayer', 47)],
      },
      {
        description: 'Travel to the Snowy Hunter Area via Eagle.',
        notes: "Unlocks travel from the Eagles' Peak Dungeon after the required quest.",
        requirements: [quest("Eagles' Peak")],
      },
      {
        description: 'Mine some coal in Rellekka.',
        requirements: [quest('The Fremennik Trials'), skill('Mining', 30)],
      },
      {
        description: 'Steal from the Rellekka Fish stalls.',
        requirements: [quest('The Fremennik Trials'), skill('Thieving', 42)],
      },
      {
        description: 'Travel to Miscellania by Fairy ring.',
        notes: 'Use fairy ring code CIP. Requires a dramen or lunar staff.',
        requirements: [quest('The Fremennik Trials'), quest('Fairytale II - Cure a Queen')],
      },
      {
        description: 'Catch a Snowy knight.',
        requirements: [skill('Hunter', 35)],
      },
      {
        description: 'Pick up your Pet Rock from your POH Menagerie.',
        notes: 'Use your pet rock on a pet house, then retrieve it. Cannot be in building mode.',
        requirements: [quest('The Fremennik Trials'), skill('Construction', 37)],
      },
      {
        description: 'Visit the Lighthouse from Waterbirth Island.',
        notes: 'Must exit the Waterbirth Island Dungeon on the 5th sublevel.',
        requirements: [quest('Horror from the Deep')],
      },
      {
        description: 'Mine some gold at the Arzinian mine.',
        notes:
          'Requires the gold helmet from Between a Rock... This task is automatically completed during that quest.',
        requirements: [quest('Between a Rock...'), skill('Mining', 40), skill('Defence', 30)],
      },
    ],
  },

  name: 'Fremennik Diary',
};

export default FremennikDiary;
