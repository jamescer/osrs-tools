import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ColdWar: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Cold War',
  // Skills: Hunter 10, Agility 30, Crafting 30, Construction 34, Thieving 15
  questPoints: 1,
  recommendations: [
    { name: '10 oak planks', quantity: 10, type: 'item' },
    { name: '10 steel nails', quantity: 10, type: 'item' },
    { name: 'Hammer', type: 'item' },
    { name: 'Spade', type: 'item' },
    { name: 'Clockwork or steel bar', type: 'item' },
    { name: 'Plank', type: 'item' },
    { name: 'Silk', type: 'item' },
    { name: 'Raw cod or ring of charos (a)', type: 'item' },
    { name: 'Swamp tar', type: 'item' },
    { name: 'Feather', quantity: 5, type: 'item' },
    { name: 'Mahogany plank', type: 'item' },
    { name: 'Leather', type: 'item' },
    { name: 'Cowbell', note: 'Obtainable only during quest', type: 'item' },
    { name: 'Ardougne cloak', note: 'Recommended for teleportation', type: 'item' },
    { name: 'Dramen or Lunar staff', note: 'Recommended for fairy ring network', type: 'item' },
    { name: 'Food', note: 'Recommended for low-level players', type: 'item' },
    { name: 'Armour', note: 'Recommended for low-level players', type: 'item' },
    { name: 'Stamina potions', note: 'Recommended for faster travel', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {
    Agility: 30,
    Combat: 30,
    Construction: 34,
    Crafting: 30,
    Hunter: 10,
    Thieving: 15,
  },
  requirements: [],
  rewards: {
    areas: ['Iceberg', 'Penguin agility course'],
    experience: [
      { amount: 5000, skill: 'Agility' },
      { amount: 1500, skill: 'Construction' },
      { amount: 2000, skill: 'Crafting' },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Ability to make the penguin suit' },
      { description: 'Ability to use the Penguin agility course' },
    ],
  },
  series: 'Penguin',
  shortName: 'coldWar',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cold_War',
};

export default ColdWar;
