import { CombatLevelRequirement, LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);
const combat = (level: number) => new CombatLevelRequirement(level);

/**
 * Lumbridge & Draynor Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Lumbridge_%26_Draynor_Diary
 */
export const LumbridgeDraynorDiary: Diary = {
  easy: {
    itemReward: "Explorer's ring 1",
    rewards: {
      description: [
        {
          main: "Explorer's ring 1",
          other: [
            'Can restore 50% of run energy twice a day',
            "Allows 30 casts of Low Level Alchemy without runes each day (no XP unless at Alchemist's Playground)",
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
        description: 'Complete a lap of the Draynor Village rooftop agility course.',
        requirements: [],
      },
      {
        description: 'Slay a Cave bug beneath Lumbridge Swamp.',
        notes: "Requires a light source and rope if the caves haven't been entered yet.",
        requirements: [skill('Slayer', 7, false)],
      },
      {
        description: 'Have Sedridor teleport you to the Rune essence mine.',
        requirements: [quest('Rune Mysteries')],
      },
      {
        description: 'Craft some water runes from Essence.',
        requirements: [skill('Runecraft', 5)],
      },
      {
        description: 'Learn your age from Hans in Lumbridge.',
        requirements: [],
      },
      {
        description: 'Pickpocket a man or woman in Lumbridge.',
        requirements: [],
      },
      {
        description: 'Chop and burn some oak logs in Lumbridge.',
        requirements: [skill('Woodcutting', 15), skill('Firemaking', 15)],
      },
      {
        description: 'Kill a Zombie in Draynor Sewers.',
        requirements: [],
      },
      {
        description: 'Catch some Anchovies in Al Kharid.',
        requirements: [skill('Fishing', 15)],
      },
      {
        description: 'Bake some Bread on the Lumbridge kitchen range.',
        requirements: [quest("Cook's Assistant")],
      },
      {
        description: 'Mine some Iron ore at the Al Kharid mine.',
        requirements: [skill('Mining', 15)],
      },
      {
        description: 'Enter the H.A.M. Hideout.',
        notes: 'A lockpick is recommended.',
        requirements: [],
      },
    ],
  },
  elite: {
    itemReward: "Explorer's ring 4",
    rewards: {
      description: [
        {
          main: "Explorer's ring 4",
          other: [
            'Can restore full run energy three times a day',
            "Allows 30 casts of High Level Alchemy without runes each day (no XP unless at Alchemist's Playground)",
            "20% discount on items in the Culinaromancer's Chest",
            'Steal twice as many cave goblin wires in Dorgesh-Kaan',
            'Ability to use fairy rings without the need of a dramen or lunar staff',
            'Unlocks the seventh slot for blocking Slayer tasks',
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
        description: 'Steal from a Dorgesh-Kaan rich chest.',
        notes: 'Requires a lockpick.',
        requirements: [quest('Death to the Dorgeshuun'), skill('Thieving', 78)],
      },
      {
        description: 'Grapple across a pylon on the Dorgesh-Kaan Agility Course.',
        notes: 'Requires a mith grapple, any crossbow, and a light source.',
        requirements: [
          quest('Death to the Dorgeshuun'),
          skill('Agility', 70),
          skill('Ranged', 70, false),
          skill('Strength', 70, false),
        ],
      },
      {
        description: 'Chop some magic logs at the Mage Training Arena.',
        requirements: [skill('Woodcutting', 75)],
      },
      {
        description: 'Smith an Adamant platebody in Draynor sewer.',
        notes: 'Requires 5 adamantite bars and a hammer.',
        requirements: [skill('Smithing', 88, false)],
      },
      {
        description: '140 or more Water runes simultaneously from Essence without the use of Extracts.',
        notes: 'Minimum Runecraft 57 with 3 Raiments of the Eye pieces, or 38 with the full set.',
        requirements: [skill('Runecraft', 76)],
      },
      {
        description: "Perform the Quest cape emote in the Wise Old Man's house.",
        notes: 'Requires completion of all quests and the Quest point cape.',
        requirements: [],
      },
    ],
  },

  hard: {
    itemReward: "Explorer's ring 3",
    rewards: {
      description: [
        {
          main: "Explorer's ring 3",
          other: [
            'Can restore 50% of run energy four times a day',
            'Unlimited teleports to the cabbage patch of South Falador Farm',
          ],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: '10% increased experience from Tears of Guthix',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Cast Bones to Peaches in Al Kharid palace.',
        notes:
          'Using the Bones to Peaches tablet does not count. Requires Bones to Peaches unlock from the Mage Training Arena.',
        requirements: [skill('Magic', 60)],
      },
      {
        description: 'Squeeze past the jutting wall on your way to the cosmic altar.',
        notes: 'Requires access to Zanaris (dramen or lunar staff).',
        requirements: [quest('Lost City'), skill('Agility', 46)],
      },
      {
        description: 'Craft 56 Cosmic runes simultaneously from Essence without the use of Extracts.',
        requirements: [quest('Lost City'), skill('Runecraft', 59)],
      },
      {
        description: 'Travel from Lumbridge to Edgeville on a Waka Canoe.',
        requirements: [skill('Woodcutting', 57)],
      },
      {
        description: 'Collect at least 100 Tears of Guthix in one visit.',
        notes:
          'This minigame can only be attempted once a week. Recommended to have at least 150 quest points before trying.',
        requirements: [quest('Tears of Guthix')],
      },
      {
        description: 'Take the train from Dorgesh-Kaan to Keldagrim.',
        requirements: [quest('Another Slice of H.A.M.')],
      },
      {
        description: "Purchase some Barrows gloves from the Culinaromancer's Chest.",
        notes: 'Costs 130,000 coins.',
        requirements: [quest('Recipe for Disaster')],
      },
      {
        description: 'Pick some Belladonna from the farming patch at Draynor Manor.',
        requirements: [skill('Farming', 63)],
      },
      {
        description: 'Light your mining helmet in the Lumbridge castle basement.',
        requirements: [skill('Firemaking', 65)],
      },
      {
        description: "Recharge your prayer at Emir's Arena with Smite activated.",
        requirements: [skill('Prayer', 52)],
      },
      {
        description: 'Craft, string and enchant an Amulet of Power in Lumbridge.',
        notes: 'Doing this upstairs in Lumbridge Castle does not count.',
        requirements: [skill('Crafting', 70), skill('Magic', 57)],
      },
    ],
  },

  itemReward: "Explorer's ring",

  medium: {
    itemReward: "Explorer's ring 2",
    rewards: {
      description: [
        {
          main: "Explorer's ring 2",
          other: [
            'Can restore 50% of run energy three times a day',
            'Three daily teleports to the cabbage patch of South Falador Farm',
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
        description: 'Complete a lap of the Al Kharid rooftop agility course.',
        requirements: [skill('Agility', 20)],
      },
      {
        description: 'Grapple across the River Lum.',
        notes: 'Requires a mith grapple and any crossbow.',
        requirements: [skill('Agility', 8), skill('Strength', 19, false), skill('Ranged', 37, false)],
      },
      {
        description: "Purchase an upgraded device (Ava's accumulator) from Ava.",
        notes: "Requires 75 steel arrows with Ava's attractor.",
        requirements: [quest('Animal Magnetism'), skill('Ranged', 50, false)],
      },
      {
        description: "Travel to the Wizards' Tower by Fairy ring.",
        notes: 'Use fairy ring code DIS. Requires a dramen or lunar staff.',
        requirements: [quest('Fairytale II - Cure a Queen')],
      },
      {
        description: 'Cast the Teleport to Lumbridge spell.',
        requirements: [skill('Magic', 31)],
      },
      {
        description: 'Catch some Salmon in Lumbridge.',
        requirements: [skill('Fishing', 30)],
      },
      {
        description: 'Craft a coif in the Lumbridge cow pen.',
        notes: 'Not to be confused with a cowl.',
        requirements: [skill('Crafting', 38)],
      },
      {
        description: 'Chop some willow logs in Draynor Village.',
        requirements: [skill('Woodcutting', 30)],
      },
      {
        description: 'Pickpocket Martin the Master Gardener.',
        requirements: [skill('Thieving', 38)],
      },
      {
        description: 'Get a slayer task from Chaeldar.',
        notes: 'Requires a dramen or lunar staff to enter Zanaris.',
        requirements: [quest('Lost City'), combat(70)],
      },
      {
        description: 'Catch an Essence or Eclectic impling in Puro-Puro.',
        notes: 'Requires a butterfly net and impling jar. Requires access to Zanaris.',
        requirements: [quest('Lost City'), skill('Hunter', 42)],
      },
      {
        description: 'Craft some Lava runes at the fire altar in Al Kharid.',
        notes: 'Use the earth runes you brought on the altar, not the essence.',
        requirements: [skill('Runecraft', 23)],
      },
    ],
  },

  name: 'Lumbridge & Draynor Diary',
};

export default LumbridgeDraynorDiary;
