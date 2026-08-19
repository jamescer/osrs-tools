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
  name: 'Desert Diary',
  itemReward: 'Desert amulet',

  easy: {
    itemReward: 'Desert amulet 1',
    rewards: {
      description: [
        {
          main: 'Desert amulet 1',
          other: [],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Pharaoh\'s sceptre holds up to 10 charges (up from 3)',
          other: [],
        },
        {
          main: 'Goat horns from goats are now noted',
          other: [],
        },
        {
          main: 'Simon Templeton also buys artefacts in noted form',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Catch a Golden Warbler.',
        notes: 'Found in the Uzer Hunter area. Necklace of passage recommended for quick access.',
        requirements: [skill('Hunter', 5)],
      },
      {
        description: 'Mine 5 clay in the north-eastern desert (Uzer mine).',
        requirements: [],
      },
      {
        description: 'Enter the Kalphite Hive.',
        notes: 'Requires a rope for first entry.',
        requirements: [],
      },
      {
        description: 'Enter the Desert with a set of Desert robes equipped.',
        notes: 'Wear a desert shirt, desert robe, and desert boots. The desert outfit does not count.',
        requirements: [],
      },
      {
        description: 'Kill a Vulture.',
        notes: 'Found north of Menaphos or Sophanem. Ranged or Magic recommended.',
        requirements: [],
      },
      {
        description: 'Have the Nardah Herbalist (Zahur) clean a herb for you.',
        notes: 'Talk to Zahur — do not use the herb on her directly.',
        requirements: [],
      },
      {
        description: 'Collect 5 Potato Cactus from the Kalphite Hive.',
        notes: 'You can bring a single potato cactus and drop and pick it up five times.',
        requirements: [],
      },
      {
        description: 'Sell some artefacts to Simon Templeton.',
        notes: 'Requires any artefact from Pyramid Plunder. The pyramid top from the Agility Pyramid does not count.',
        requirements: [quest("Icthlarin's Little Helper")],
      },
      {
        description: 'Open the Sarcophagus in the first room of Pyramid Plunder.',
        requirements: [quest("Icthlarin's Little Helper"), skill('Thieving', 21)],
      },
      {
        description: 'Cut a desert cactus open to fill a waterskin.',
        notes: 'Requires a knife or slash weapon, and an empty waterskin.',
        requirements: [],
      },
      {
        description: 'Travel from the Shantay Pass to Pollnivneach by Magic Carpet.',
        notes: 'Costs 200 coins and a Shantay Pass (or 205 coins total).',
        requirements: [],
      },
    ],
  },

  medium: {
    itemReward: 'Desert amulet 2',
    rewards: {
      description: [
        {
          main: 'Desert amulet 2',
          other: [
            'One daily teleport to Nardah',
          ],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: 'Pharaoh\'s sceptre holds up to 25 charges (up from 10)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: 'Climb to the summit of the Agility Pyramid.',
        notes: 'Protection against desert heat recommended.',
        requirements: [skill('Agility', 30)],
      },
      {
        description: 'Slay a desert lizard.',
        notes: 'Requires an ice cooler to finish off the lizard.',
        requirements: [skill('Slayer', 22)],
      },
      {
        description: 'Catch an Orange Salamander.',
        notes: 'Requires a rope and a small fishing net.',
        requirements: [skill('Hunter', 47)],
      },
      {
        description: 'Steal a feather from the Desert Phoenix.',
        requirements: [skill('Thieving', 25)],
      },
      {
        description: 'Travel to Uzer via Magic Carpet.',
        requirements: [quest('The Golem')],
      },
      {
        description: 'Travel to the Desert via Eagle.',
        notes: 'Unlocks travel from the Eagles\' Peak Dungeon after the quest.',
        requirements: [quest("Eagles' Peak")],
      },
      {
        description: 'Pray at the Elidinis statuette in Nardah.',
        notes: 'Requires you to have less than full Prayer points.',
        requirements: [quest('Spirits of the Elid')],
      },
      {
        description: 'Create a combat potion in the desert.',
        notes: 'Requires a harralander potion (unf) and goat horn dust.',
        requirements: [skill('Herblore', 36)],
      },
      {
        description: 'Teleport to Enakhra\'s Temple with the Camulet.',
        requirements: [quest("Enakhra's Lament")],
      },
      {
        description: 'Visit the Genie.',
        notes: 'This task is automatically completed during Spirits of the Elid. Requires a rope and light source.',
        requirements: [quest('Spirits of the Elid')],
      },
      {
        description: 'Teleport to Pollnivneach with a redirected Teleport to House tablet.',
        notes: 'Requires a scroll of redirection and a house tablet. Ironmen must instead enter their house via the Pollnivneach house portal.',
        requirements: [skill('Construction', 20)],
      },
      {
        description: 'Chop some Teak logs near Uzer.',
        notes: 'Teak trees are found north-east of the oasis.',
        requirements: [skill('Woodcutting', 35)],
      },
    ],
  },

  hard: {
    itemReward: 'Desert amulet 3',
    rewards: {
      description: [
        {
          main: 'Desert amulet 3',
          other: [],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Pharaoh\'s sceptre holds up to 50 charges (up from 25)',
          other: [],
        },
        {
          main: 'Free carpet rides throughout the Kharidian Desert',
          other: [],
        },
        {
          main: 'Ropes permanently secured at the Kalphite Lair entrance and Queen\'s Lair',
          other: [],
        },
        {
          main: 'Roughly 14% increased XP and 25% more marks of grace from the Pollnivneach Rooftop Course',
          other: [],
        },
        {
          main: 'Zahur now cleans grimy herbs in noted form and offers potion-making services',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Knock out and pickpocket a Menaphite Thug.',
        notes: 'Requires any blackjack.',
        requirements: [quest('The Feud'), skill('Thieving', 65)],
      },
      {
        description: 'Mine some Granite.',
        requirements: [skill('Mining', 45)],
      },
      {
        description: 'Refill your waterskins in the Desert using Lunar magic.',
        notes: 'Must cast Humidify outside of a desert settlement. Requires Lunar spellbook selected.',
        requirements: [quest('Dream Mentor'), skill('Magic', 68)],
      },
      {
        description: 'Kill the Kalphite Queen.',
        requirements: [],
      },
      {
        description: 'Complete a lap of the Pollnivneach agility course.',
        requirements: [skill('Agility', 70)],
      },
      {
        description: 'Slay a Dust Devil in the Smoke Dungeon with a Slayer helmet equipped.',
        notes: 'Requires a Slayer helmet (Crafting 55 to make).',
        requirements: [quest('Desert Treasure I'), skill('Slayer', 65), skill('Defence', 10)],
      },
      {
        description: 'Activate Ancient Magicks at the altar in the Jaldraocht Pyramid.',
        requirements: [quest('Desert Treasure I')],
      },
      {
        description: 'Defeat a Locust Rider with Keris.',
        notes: 'Keris only has to be equipped as the locust rider dies. Keris partisan also works.',
        requirements: [quest('Contact!'), skill('Attack', 50)],
      },
      {
        description: 'Burn some yew logs on the Nardah Mayor\'s balcony.',
        notes: 'The mayor\'s house is directly east of the central fountain.',
        requirements: [skill('Firemaking', 60)],
      },
      {
        description: 'Create a Mithril platebody in Nardah.',
        notes: 'The anvil is found in the westernmost building.',
        requirements: [skill('Smithing', 68)],
      },
    ],
  },

  elite: {
    itemReward: 'Desert amulet 4',
    rewards: {
      description: [
        {
          main: 'Desert amulet 4',
          other: [
            'Unlimited teleports to Nardah (closer to the Elidinis Statuette)',
            'Unlimited teleports to the entrance of the Kalphite Cave',
            'Fully protects against desert heat while worn',
          ],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'Pharaoh\'s sceptre holds up to 100 charges (up from 50)',
          other: [],
        },
        {
          main: 'Free passage through Shantay Pass and Ruins of Unkah',
          other: [],
        },
        {
          main: 'Access to the crevice shortcut in the Kalphite Lair (with Agility 86)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: 'Bake a wild pie at the Nardah Clay Oven.',
        requirements: [skill('Cooking', 85)],
      },
      {
        description: 'Cast Ice Barrage against a foe in the Desert.',
        notes: 'Must be cast outside of a desert settlement and must successfully hit.',
        requirements: [quest('Desert Treasure I'), skill('Magic', 94)],
      },
      {
        description: 'Fletch some Dragon darts at the Bedabin Camp.',
        notes: 'Requires dragon dart tips and feathers.',
        requirements: [skill('Fletching', 95)],
      },
      {
        description: 'Speak to the KQ head in your POH.',
        notes: 'Requires 2 mahogany planks, 2 gold leaves, saw, and hammer to mount. The Kalphite Queen drops her head at 1/128, or guaranteed (tattered) at 256th kill.',
        requirements: [quest('Priest in Peril'), skill('Construction', 78)],
      },
      {
        description: 'Steal from the Grand Gold Chest in the final room of Pyramid Plunder.',
        requirements: [quest("Icthlarin's Little Helper"), skill('Thieving', 91, false)],
      },
      {
        description: 'Restore at least 85 Prayer points when praying at the Altar in Sophanem.',
        requirements: [quest("Icthlarin's Little Helper"), skill('Prayer', 85, false)],
      },
    ],
  },
};

export default DesertDiary;
