import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CabinFever: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  
  age: '',
  
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
  requirements: [],
  recommendedSkills: {
    Agility: 42,
    Crafting: 45,
    Ranged: 40,
    Smithing: 50,
  },
  series: 'Pirate',
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
    questPoints: 2,
    points: [],
    unlocks: [{ description: 'Ability to travel to Mos Le’Harmless' }],
  },
  startLocation: '',
  shortName: 'cabinFever',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cabin_Fever',
};

export default CabinFever;
