import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CabinFever: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Cabin Fever',
  // Quests: Pirate's Treasure, Rum Deal, Priest in Peril. Skills: Agility 42, Crafting 45, Smithing 50, Ranged 40
  questPoints: 2,
  recommendations: [
    {
      name: 'Ranged weapon and ammo',
      note: 'Required for ship defense.',
      type: 'item',
    },
    {
      name: 'Food',
      note: 'Useful for combat and travel.',
      type: 'tip',
    },
  ],
  recommendedPrayers: ['Protect from Melee'],
  recommendedSkills: {
    Agility: 42,
    Crafting: 45,
    Ranged: 40,
    Smithing: 50,
  },
  requirements: [],
  rewards: {
    areas: ['Mos Le’Harmless'],
    experience: [
      { amount: 7000, skill: 'Agility' },
      { amount: 7000, skill: 'Crafting' },
      { amount: 7000, skill: 'Smithing' },
    ],
    items: [{ name: 'Access to Mos Le’Harmless' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [{ description: 'Ability to travel to Mos Le’Harmless' }],
  },
  series: 'Pirate',
  shortName: 'cabinFever',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cabin_Fever',
};

export default CabinFever;
