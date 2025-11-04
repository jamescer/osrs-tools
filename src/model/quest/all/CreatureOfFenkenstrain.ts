import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CreatureOfFenkenstrain: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Creature of Fenkenstrain',
  // Quests: Priest in Peril, The Restless Ghost. Skills: Crafting 20, Thieving 25
  questPoints: 2,
  recommendations: [
    { name: 'Ghostspeak amulet', type: 'item' },
    { name: 'Silver bar', type: 'item' },
    { name: 'Bronze wire', quantity: 3, type: 'item' },
    { name: 'Needle', type: 'item' },
    { name: 'Thread', quantity: 5, type: 'item' },
    { name: 'Spade', type: 'item' },
    { name: 'Law rune', type: 'item' },
    { name: 'Air rune', type: 'item' },
    {
      name: 'Coins',
      note: 'For Telekinetic Grab or buying pickled brain',
      quantity: 50,
      type: 'item',
    },
    { name: 'Holy symbol', note: 'For safety against Feral Vampyres', type: 'item' },
    {
      name: 'Ecto-tokens',
      note: 'For access to furnace, only if Ghosts Ahoy not completed',
      quantity: 2,
      type: 'item',
    },
    { name: 'Weapon', type: 'item' },
    { name: 'Armour', type: 'item' },
    { name: 'Stamina potion', type: 'item' },
    { name: 'Teleport to Canifis', type: 'item' },
    { name: 'Food', type: 'item' },
    { name: 'Access to Arceuus spellbook', type: 'item' },
    { name: 'Dramen staff', type: 'item' },
    { name: 'Amulet of glory', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {
    Combat: 30,
    Crafting: 20,
    Smithing: 4,
    Thieving: 25,
  },
  requirements: [],
  rewards: {
    areas: ["Fenkenstrain's Castle"],
    experience: [{ amount: 1000, skill: 'Thieving' }],
    items: [
      {
        name: 'Ring of charos',
        note: 'Access to Werewolf Agility Course, reduced transport costs',
      },
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'creatureOfFenkenstrain',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain',
};

export default CreatureOfFenkenstrain;
