import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const CabinFever: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Cabin Fever',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Medium,
  requirements: [], // Quests: Pirate's Treasure, Rum Deal, Priest in Peril. Skills: Agility 42, Crafting 45, Smithing 50, Ranged 40
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'cabinFever',
  url: 'https://oldschool.runescape.wiki/w/Cabin_Fever',
  series: 'Pirate',
  age: '',
    recommendations: [
      {
        type: 'item',
        name: 'Ranged weapon and ammo',
        note: 'Required for ship defense.'
      },
      {
        type: 'tip',
        name: 'Food',
        note: 'Useful for combat and travel.'
      }
    ],
    recommendedSkills: {
      Ranged: 40,
      Agility: 42,
      Crafting: 45,
      Smithing: 50
    },
    recommendedPrayers: ['Protect from Melee'],
    rewards: {
      experience: [
        { skill: 'Agility', amount: 7000 },
        { skill: 'Crafting', amount: 7000 },
        { skill: 'Smithing', amount: 7000 }
      ],
      questPoints: 2,
      items: [
        { name: 'Access to Mos Le’Harmless' }
      ],
      areas: ['Mos Le’Harmless'],
      unlocks: [
        { description: 'Ability to travel to Mos Le’Harmless' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default CabinFever;
