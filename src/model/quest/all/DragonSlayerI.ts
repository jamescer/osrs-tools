import { CombatLevelRequirement, LevelRequirement, QuestPointRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const DragonSlayer: Quest = {
  age: '',
  description:
    'Prove yourself a true champion. Kill the mighty dragon Elvarg of Crandor and earn the right to buy and wear the Rune platebody.',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: false,
  miniquest: false,
  name: 'Dragon Slayer I',
  questPoints: 2,
  recommendations: [
    {
      name: 'Coins',
      note: 'For buying ship and map piece from Wormbrain (if not using telekinetic grab)',
      quantity: 10000,
      type: 'item',
    },
    {
      name: 'Hammer',
      note: 'For repairing the ship',
      quantity: 1,
      type: 'item',
    },
    {
      name: 'Steel nails',
      note: 'For repairing the ship',
      quantity: 90,
      type: 'item',
    },
    {
      name: 'Plank',
      note: 'For repairing the ship',
      quantity: 3,
      type: 'item',
    },
    {
      name: 'Anti-dragon shield',
      note: 'Required for fighting Elvarg. Obtained during quest from Duke Horacio',
      quantity: 1,
      type: 'item',
    },
    {
      name: 'Unfired bowl',
      note: "For Thalzar's map piece",
      quantity: 1,
      type: 'item',
    },
    {
      name: "Wizard's mind bomb",
      note: "For Thalzar's map piece",
      quantity: 1,
      type: 'item',
    },
    {
      name: 'Lobster pot',
      note: "For Thalzar's map piece",
      quantity: 1,
      type: 'item',
    },
    {
      name: 'Silk',
      note: "For Thalzar's map piece",
      quantity: 1,
      type: 'item',
    },
    {
      name: 'Food',
      note: 'Lobsters or better recommended for Elvarg fight',
      type: 'item',
    },
    {
      name: 'Combat equipment',
      note: 'Best melee equipment possible, preferably adamant or better',
      type: 'item',
    },
    {
      name: 'Law and air runes',
      note: 'For telegrabbing map piece from Wormbrain (requires level 33 Magic)',
      type: 'tip',
    },
    {
      name: 'Teleport runes',
      note: 'For emergency escape from Elvarg',
      type: 'tip',
    },
  ],
  recommendedPrayers: ['Protect from Magic'],
  recommendedSkills: {
    Attack: 40,
    Defence: 40,
    Magic: 33,
    Prayer: 43,
    Strength: 40,
  },
  requirements: [
    new QuestPointRequirement(32),
    new CombatLevelRequirement(45),
    new LevelRequirement('Magic', 33, true),
    new LevelRequirement('Crafting', 8, false),
    new LevelRequirement('Prayer', 37, false),
    new LevelRequirement('Smithing', 34, false),
  ],
  rewards: {
    areas: ['Crandor', 'Corsair Cove Resource Area'],
    experience: [
      {
        amount: 18650,
        skill: 'Strength',
      },
      {
        amount: 18650,
        skill: 'Defence',
      },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      {
        description: 'The ability to equip and use the rune platebody and its variants',
      },
      {
        description: 'The ability to equip and use the green dragonhide body',
      },
      {
        description: 'The ability to equip and use the dragon platebody',
      },
      {
        description: 'Dragons become available as Slayer task',
      },
      {
        description: 'The ability to return to Crandor',
      },
      {
        description: 'Access to additional resources in Corsair Cove',
      },
    ],
  },
  series: 'Guild',
  shortName: 'dragonSlayer',

  startLocation: "Champions' Guild, south of Varrock",
  status: QuestStatus.NotStarted,
  steps: [
    "Speak to the Guildmaster in the Champions' Guild.",
    'Talk to Oziach in Edgeville.',
    'Return to the Guildmaster and ask about all map pieces, shield, and boat.',
    'Get an anti-dragon shield from Duke Horacio in Lumbridge Castle.',
    "Get Melzar's map piece from Melzar's Maze.",
    "Get Thalzar's map piece by visiting the Oracle and using items on the magic door.",
    "Get Lozar's map piece from Wormbrain in Port Sarim jail.",
    'Buy the Lady Lumbridge ship from Klarense for 2,000 coins.',
    'Repair the ship using planks, nails, and a hammer.',
    'Get Ned from Draynor Village to captain the ship.',
    'Navigate to Crandor and fight Elvarg.',
    'Return to Oziach to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Dragon_Slayer_I',
};

export default DragonSlayer;
