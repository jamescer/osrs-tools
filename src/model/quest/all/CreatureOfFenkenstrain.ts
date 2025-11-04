import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CreatureOfFenkenstrain: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  
  age: '',
  
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
      type: 'item',
      quantity: 50,
    },
    { name: 'Holy symbol', note: 'For safety against Feral Vampyres', type: 'item' },
    {
      name: 'Ecto-tokens',
      note: 'For access to furnace, only if Ghosts Ahoy not completed',
      type: 'item',
      quantity: 2,
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
  requirements: [],
  recommendedSkills: {
    Crafting: 20,
    Smithing: 4,
    Combat: 30,
    Thieving: 25,
  },
  series: null,
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
    questPoints: 2,
    points: [],
    unlocks: [],
  },
  startLocation: '',
  shortName: 'creatureOfFenkenstrain',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain',
};

export default CreatureOfFenkenstrain;
