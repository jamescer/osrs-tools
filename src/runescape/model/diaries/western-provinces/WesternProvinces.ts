import { CombatLevelRequirement, LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);
const combat = (level: number) => new CombatLevelRequirement(level);

/**
 * Western Provinces Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Western_Provinces_Diary
 */
export const WesternProvincesDiary: Diary = {
  easy: {
    itemReward: 'Western banner 1',
    rewards: {
      description: [
        {
          main: 'Western banner 1',
          other: [],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: '25% chance of two chompy birds appearing at once when chompy bird hunting',
          other: [],
        },
        {
          main: 'Rantz offers 25 ogre arrows for free every day',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Catch a Copper Longtail.',
        requirements: [skill('Hunter', 9)],
      },
      {
        description: 'Complete a novice game of Pest Control.',
        notes: 'Must earn commendation points for the task to count.',
        requirements: [combat(40)],
      },
      {
        description: 'Mine some Iron ore near Piscatoris.',
        notes: 'Must be done at the Piscatoris mine.',
        requirements: [skill('Mining', 15)],
      },
      {
        description: 'Complete a lap of the Gnome agility course.',
        requirements: [],
      },
      {
        description: 'Score a goal in a Gnomeball match.',
        requirements: [],
      },
      {
        description: 'Claim any Chompy bird hat from Rantz.',
        notes: 'Requires 30 chompy or jubbly bird kills. Must have a (comp) ogre bow in inventory.',
        requirements: [quest('Big Chompy Bird Hunting')],
      },
      {
        description: 'Teleport to Pest Control using the Minigame Teleport.',
        requirements: [combat(40)],
      },
      {
        description: 'Collect a swamp toad at the Gnome Stronghold.',
        notes: 'Only a swamp toad from the swamp pen north-west of the Grand Tree counts.',
        requirements: [],
      },
      {
        description: 'Have Brimstail teleport you to the Essence Mine.',
        notes: 'You can right-click Brimstail to teleport.',
        requirements: [quest('Rune Mysteries')],
      },
      {
        description: 'Fletch an Oak shortbow in the Gnome Stronghold.',
        requirements: [skill('Fletching', 20)],
      },
      {
        description: 'Kill a Terrorbird in the Terrorbird enclosure.',
        notes: 'Found in the south-west of the Tree Gnome Stronghold, across the river.',
        requirements: [],
      },
    ],
  },
  elite: {
    itemReward: 'Western banner 4',
    rewards: {
      description: [
        {
          main: 'Western banner 4',
          other: ['Unlimited teleports to the Piscatoris Fishing Colony'],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'Two chompy birds will always appear at once when chompy bird hunting',
          other: [],
        },
        {
          main: '1/500 chance of receiving a chompy chick when chompy bird hunting',
          other: [],
        },
        {
          main: 'Rantz offers 150 ogre arrows for free every day',
          other: [],
        },
        {
          main: 'Nieve/Steve now grants as many Slayer reward points as Duradel/Kuradal',
          other: [],
        },
        {
          main: 'Resurrect with full health once per day when you reach 0 HP against Zulrah',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: 'Fletch a Magic longbow in Tirannwn.',
        notes: 'Requires a magic longbow (u) and a bow string.',
        requirements: [quest('Regicide'), skill('Fletching', 85)],
      },
      {
        description: 'Kill the Thermonuclear Smoke Devil.',
        notes: 'The first kill does not require a Slayer task. Must be in the room when its death animation ends.',
        requirements: [skill('Slayer', 93, false)],
      },
      {
        description: 'Have Prissy Scilla protect your Magic tree.',
        notes: 'Requires a magic sapling and 25 coconuts to pay the gardener.',
        requirements: [skill('Farming', 75)],
      },
      {
        description: 'Use the Elven overpass advanced cliffside shortcut.',
        requirements: [quest('Underground Pass'), skill('Agility', 85)],
      },
      {
        description: 'Equip any complete void set.',
        notes:
          'Requires Prayer 22, Attack 42, Strength 42, Defence 42, Hitpoints 42, Ranged 42, and Magic 42. Earn commendation points from Pest Control to purchase the void pieces.',
        requirements: [
          combat(40),
          skill('Prayer', 22),
          skill('Attack', 42),
          skill('Strength', 42),
          skill('Defence', 42),
          skill('Ranged', 42),
          skill('Magic', 42),
        ],
      },
      {
        description: 'Claim a Chompy bird hat from Rantz after registering at least 1,000 kills.',
        notes: 'Must have a (comp) ogre bow in inventory to claim hats.',
        requirements: [quest('Big Chompy Bird Hunting')],
      },
      {
        description: 'Pickpocket an Elf.',
        requirements: [quest("Mourning's End Part I"), skill('Thieving', 85)],
      },
    ],
  },

  hard: {
    itemReward: 'Western banner 3',
    rewards: {
      description: [
        {
          main: 'Western banner 3',
          other: ['One daily teleport to the Piscatoris Fishing Colony'],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Rantz offers 100 ogre arrows for free every day',
          other: [],
        },
        {
          main: 'Teleport crystals hold up to 5 charges (up from 3)',
          other: [],
        },
        {
          main: 'Void knight top and robe can be upgraded to elite void for 200 commendation points each',
          other: [],
        },
        {
          main: 'Access to the Red chinchompa private hunting ground',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Kill an Elf with a Crystal bow.',
        notes:
          'Requires a Crystal bow or Bow of Faerdhinen. An inactive bow can be used if equipped whilst the elf dies to poison.',
        requirements: [quest('Roving Elves'), skill('Ranged', 70, false)],
      },
      {
        description: 'Catch and cook a Monkfish in Piscatoris.',
        notes: 'Monkfish are caught in the Piscatoris Fishing Colony. Steps must be done consecutively.',
        requirements: [quest('Swan Song'), skill('Fishing', 62), skill('Cooking', 62)],
      },
      {
        description: 'Complete a Veteran game of Pest Control.',
        notes: 'Must earn commendation points for the task to count.',
        requirements: [combat(100)],
      },
      {
        description: 'Catch a Dashing Kebbit.',
        notes: 'Found in the Piscatoris falconry area. Costs 500 coins.',
        requirements: [skill('Hunter', 69)],
      },
      {
        description: 'Complete a lap of the Ape Atoll agility course.',
        notes: 'Requires a Ninja monkey or Kruk monkey greegree (other greegrees will cause you to fail).',
        requirements: [quest('Monkey Madness I'), skill('Agility', 48)],
      },
      {
        description: 'Chop and burn some Mahogany logs on Ape Atoll.',
        notes: 'Logs burnt by an Infernal axe do not count. Steps must be done consecutively.',
        requirements: [quest('Monkey Madness I'), skill('Woodcutting', 50), skill('Firemaking', 50)],
      },
      {
        description: 'Mine some Adamantite ore in Tirannwn.',
        notes: 'Can be done in the Isafdar mine outside of Lletya.',
        requirements: [quest('Regicide'), skill('Mining', 70)],
      },
      {
        description: 'Check the health of your Palm tree in Lletya.',
        notes: '15 papayas recommended to pay the gardener (Liliwen).',
        requirements: [quest("Mourning's End Part I"), skill('Farming', 68)],
      },
      {
        description: 'Claim a Chompy bird hat from Rantz after registering at least 300 kills.',
        notes: 'Must have a (comp) ogre bow in inventory to claim hats.',
        requirements: [quest('Big Chompy Bird Hunting')],
      },
      {
        description: 'Build an Isafdar painting in your POH Quest hall.',
        notes: 'Requires 3 mahogany planks, saw, hammer, and an Isafdar painting (2,000 coins from Sir Renitee).',
        requirements: [quest('Roving Elves'), skill('Construction', 65)],
      },
      {
        description: 'Kill Zulrah.',
        requirements: [quest('Regicide')],
      },
      {
        description: 'Teleport to Ape Atoll.',
        notes: 'Requires completion of the Awowogei subquest of Recipe for Disaster.',
        requirements: [quest('Recipe for Disaster'), skill('Magic', 64)],
      },
      {
        description: 'Pickpocket a Gnome.',
        requirements: [skill('Thieving', 75)],
      },
    ],
  },

  itemReward: 'Western banner',

  medium: {
    itemReward: 'Western banner 2',
    rewards: {
      description: [
        {
          main: 'Western banner 2',
          other: [],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: '50% chance of two chompy birds appearing at once when chompy bird hunting',
          other: [],
        },
        {
          main: 'Rantz offers 50 ogre arrows for free every day',
          other: [],
        },
        {
          main: 'Crystal saw holds up to 56 charges (up from 28)',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Take the agility shortcut from the Grand Tree to Otto's Grotto.",
        requirements: [quest('Tree Gnome Village'), quest('The Grand Tree'), skill('Agility', 37)],
      },
      {
        description: 'Travel to the Gnome Stronghold by Spirit Tree.',
        requirements: [quest('Tree Gnome Village')],
      },
      {
        description: 'Trap a Spined Larupia.',
        notes: 'Found in the Feldip Hunter area. Requires a teasing stick, logs, and a knife.',
        requirements: [skill('Hunter', 31)],
      },
      {
        description: 'Fish some Bass on Ape Atoll.',
        notes: 'Requires a big fishing net.',
        requirements: [quest('Monkey Madness I'), skill('Fishing', 46)],
      },
      {
        description: 'Chop and burn some teak logs on Ape Atoll.',
        notes: 'Steps must be done consecutively without completing other tasks in-between.',
        requirements: [quest('Monkey Madness I'), skill('Woodcutting', 35), skill('Firemaking', 35)],
      },
      {
        description: 'Complete an intermediate game of Pest Control.',
        notes: 'Must earn commendation points for the task to count.',
        requirements: [combat(70)],
      },
      {
        description: 'Travel to the Feldip Hills by Gnome Glider.',
        requirements: [quest('The Grand Tree'), quest('One Small Favour')],
      },
      {
        description: 'Claim a Chompy bird hat from Rantz after registering at least 125 kills.',
        notes: 'Must have a (comp) ogre bow in inventory to claim hats.',
        requirements: [quest('Big Chompy Bird Hunting')],
      },
      {
        description: "Travel from Eagles' Peak to the Feldip Hills by Eagle.",
        notes: "Unlocks travel from the Eagles' Peak Dungeon after the quest.",
        requirements: [quest("Eagles' Peak")],
      },
      {
        description: 'Make a Chocolate Bomb at the Grand Tree.',
        notes:
          'Requires a gnomebowl mould, Gianne dough, 4 chocolate bars, an equa leaf, 2 pots of cream, and chocolate dust.',
        requirements: [skill('Cooking', 42)],
      },
      {
        description: 'Complete a delivery for the Gnome Restaurant.',
        requirements: [],
      },
      {
        description: 'Turn your small crystal seed into a Crystal saw.',
        notes: "Enchant with the singing bowl in Brimstail's cave.",
        requirements: [quest('The Eyes of Glouphrie')],
      },
      {
        description: 'Mine some Gold ore underneath the Grand Tree.',
        requirements: [quest('The Grand Tree'), skill('Mining', 40)],
      },
    ],
  },

  name: 'Western Provinces Diary',
};

export default WesternProvincesDiary;
