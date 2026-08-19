import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Falador Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Falador_Diary
 */
export const FaladorDiary: Diary = {
  name: 'Falador Diary',
  itemReward: 'Falador shield',

  easy: {
    itemReward: 'Falador shield 1',
    rewards: {
      description: [
        {
          main: 'Falador shield 1',
          other: [
            'Can restore 25% of prayer points once a day',
          ],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Access to the tight-gap shortcut from Burthorpe to the Chaos Temple (with Agility 14)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Find out your family crest from Sir Renitee.',
        requirements: [skill('Construction', 16)],
      },
      {
        description: 'Climb over the western Falador wall.',
        requirements: [skill('Agility', 5)],
      },
      {
        description: "Browse Sarah's farm shop.",
        requirements: [],
      },
      {
        description: 'Get a haircut or a shave from the Falador Hairdresser.',
        requirements: [],
      },
      {
        description: 'Fill a bucket from the pump north of Falador west bank.',
        requirements: [],
      },
      {
        description: 'Kill a duck in Falador Park.',
        requirements: [],
      },
      {
        description: 'Make a mind tiara.',
        notes: 'Requires a tiara and a mind talisman at the Mind Altar.',
        requirements: [],
      },
      {
        description: 'Take the boat to Entrana.',
        notes: 'No weapons or armour are allowed on Entrana.',
        requirements: [],
      },
      {
        description: 'Repair a broken strut in the Motherlode Mine.',
        notes: 'Requires a hammer and a pickaxe.',
        requirements: [],
      },
      {
        description: 'Claim a security book from the Security guard at Port Sarim jail.',
        requirements: [],
      },
      {
        description: "Smith some Blurite Limbs on Doric's anvil.",
        notes: "Requires completion of The Knight's Sword and Doric's Quest.",
        requirements: [quest("The Knight's Sword"), quest("Doric's Quest"), skill('Mining', 10), skill('Smithing', 13)],
      },
    ],
  },

  medium: {
    itemReward: 'Falador shield 2',
    rewards: {
      description: [
        {
          main: 'Falador shield 2',
          other: [
            'Can restore 25% of prayer points twice a day',
            '10% increased experience from the Falador farming patch',
            'Increased chance of receiving clue scrolls from Falador guards',
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
        description: "Light a Bullseye lantern at the Chemist's in Rimmington.",
        notes: 'Requires a tinderbox and a regular (unlit) Bullseye lantern.',
        requirements: [skill('Firemaking', 49)],
      },
      {
        description: 'Telegrab some Wine of Zamorak at the Chaos Temple by the Wilderness.',
        notes: "This altar is located north-west of Goblin Village. You must be inside the building until the wine appears in your inventory.",
        requirements: [skill('Magic', 33)],
      },
      {
        description: 'Unlock the Crystal chest in Taverley.',
        notes: 'Requires a crystal key (combine a loop half and a tooth half of a key).',
        requirements: [],
      },
      {
        description: 'Place a scarecrow in the Falador farm flower patch.',
        notes: 'Requires a scarecrow (watermelon, hay sack, bronze spear).',
        requirements: [skill('Farming', 23)],
      },
      {
        description: 'Kill a Mogre at Mudskipper Point.',
        notes: 'Requires completion of the Skippy and the Mogres miniquest.',
        requirements: [quest('Skippy and the Mogres'), skill('Slayer', 32)],
      },
      {
        description: 'Visit the Port Sarim Rat Pits.',
        notes: 'Requires partial completion of Ratcatchers.',
        requirements: [quest('Ratcatchers')],
      },
      {
        description: 'Grapple up and then jump off the north Falador wall.',
        notes: 'Requires a mith grapple and a crossbow.',
        requirements: [skill('Agility', 11), skill('Strength', 37, false), skill('Ranged', 19, false)],
      },
      {
        description: 'Pickpocket a Falador guard.',
        requirements: [skill('Thieving', 40)],
      },
      {
        description: 'Pray at the Altar of Guthix in Taverley whilst wearing full Initiate.',
        notes: 'Requires completion of Recruitment Drive. Full Initiate armour is required.',
        requirements: [quest('Recruitment Drive'), skill('Prayer', 10), skill('Defence', 20)],
      },
      {
        description: 'Mine some Gold ore at the Crafting Guild.',
        requirements: [skill('Crafting', 40), skill('Mining', 40)],
      },
      {
        description: 'Squeeze through the crevice in the Dwarven mines.',
        requirements: [skill('Agility', 42)],
      },
      {
        description: 'Chop and burn some willow logs in Taverley.',
        notes: 'Player-grown willows do not count. The willows must be chopped from natural trees in Taverley.',
        requirements: [skill('Woodcutting', 30), skill('Firemaking', 30)],
      },
      {
        description: 'Craft a fruit basket on the Falador Farm loom.',
        requirements: [skill('Crafting', 36)],
      },
      {
        description: 'Teleport to Falador.',
        requirements: [skill('Magic', 37)],
      },
    ],
  },

  hard: {
    itemReward: 'Falador shield 3',
    rewards: {
      description: [
        {
          main: 'Falador shield 3',
          other: [
            'Can restore full prayer points once a day',
            "Indicates the Giant Mole's location when equipped or held in inventory inside the Mole Hole",
            "Giant Mole's mole skin and claw drops will be noted",
            'Access to the bank chest and bank deposit box in the Crafting Guild',
            "Access to the shortcut to the Fountain of Heroes in the Heroes' Guild basement (with Agility 67)",
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
        description: 'Craft 140 Mind runes simultaneously from Essence without the use of Extracts.',
        requirements: [skill('Runecraft', 56)],
      },
      {
        description: 'Change your family crest to the Saradomin symbol.',
        requirements: [skill('Prayer', 70), skill('Construction', 16)],
      },
      {
        description: 'Kill the Giant Mole beneath Falador Park.',
        notes: 'Requires a spade and a light source to enter the Mole Hole.',
        requirements: [],
      },
      {
        description: 'Kill a Skeletal Wyvern in the Asgarnia Ice Dungeon.',
        requirements: [skill('Slayer', 72)],
      },
      {
        description: 'Complete a lap of the Falador rooftop agility course.',
        requirements: [skill('Agility', 50)],
      },
      {
        description: 'Enter the Mining Guild while wearing a Prospector helmet.',
        notes: 'Only the Prospector helmet is required, not the full outfit.',
        requirements: [skill('Mining', 60)],
      },
      {
        description: "Kill the Blue Dragon under the Heroes' Guild.",
        requirements: [quest("Heroes' Quest")],
      },
      {
        description: "Crack a wall safe within Rogues' Den.",
        notes: "Wall safes in the maze do not count; only the safes in Rogues' Den itself.",
        requirements: [skill('Thieving', 50)],
      },
      {
        description: 'Recharge prayer in the Port Sarim church while wearing full Proselyte.',
        requirements: [quest('The Slug Menace'), skill('Defence', 30), skill('Prayer', 20)],
      },
      {
        description: "Enter the Warriors' Guild.",
        notes: 'Requires 130 combined Attack and Strength, or level 99 in either skill.',
        requirements: [],
      },
      {
        description: 'Equip a dwarven helmet within the Dwarven mines.',
        requirements: [quest('Grim Tales'), skill('Defence', 50)],
      },
    ],
  },

  elite: {
    itemReward: 'Falador shield 4',
    rewards: {
      description: [
        {
          main: 'Falador shield 4',
          other: [
            'Can restore full prayer points twice a day',
            'Tree patch in Falador Park will never get diseased',
            'Access to the larger amethyst mine in the west of the Mining Guild',
            'Slightly increased chance of receiving higher level ores when cleaning pay-dirt (by about 1% per ore type)',
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
        description: 'Craft 252 Air Runes simultaneously from Essence without the use of Extracts.',
        requirements: [skill('Runecraft', 88)],
      },
      {
        description: 'Purchase a White 2h Sword from Sir Vyvin.',
        notes: 'Requires White Knight Master rank (1300 Black Knight kills). Selling and rebuying without this rank does not count.',
        requirements: [quest('Wanted!')],
      },
      {
        description: 'Find at least 3 magic roots at once when digging up a magic tree in Falador.',
        notes: 'The magic tree must be cut down by the player themselves.',
        requirements: [skill('Farming', 91), skill('Woodcutting', 75)],
      },
      {
        description: 'Perform a skillcape or quest cape emote at the top of Falador Castle.',
        notes: 'Requires level 99 in any skill (with the appropriate cape) or completion of all quests.',
        requirements: [],
      },
      {
        description: 'Jump over the strange floor in Taverley dungeon.',
        notes: 'Must complete the jump without taking any damage.',
        requirements: [skill('Agility', 80)],
      },
      {
        description: 'Mix a Saradomin brew in Falador east bank.',
        requirements: [skill('Herblore', 81)],
      },
    ],
  },
};

export default FaladorDiary;
