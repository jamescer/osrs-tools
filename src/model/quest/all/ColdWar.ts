import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const ColdWar: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Cold War',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
  requirements: [], // Skills: Hunter 10, Agility 30, Crafting 30, Construction 34, Thieving 15
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'coldWar',
  url: 'https://oldschool.runescape.wiki/w/Cold_War',
  series: 'Penguin',
  age: '',
    recommendations: [
      { type: 'item', name: '10 oak planks', quantity: 10 },
      { type: 'item', name: '10 steel nails', quantity: 10 },
      { type: 'item', name: 'Hammer' },
      { type: 'item', name: 'Spade' },
      { type: 'item', name: 'Clockwork or steel bar' },
      { type: 'item', name: 'Plank' },
      { type: 'item', name: 'Silk' },
      { type: 'item', name: 'Raw cod or ring of charos (a)' },
      { type: 'item', name: 'Swamp tar' },
      { type: 'item', name: 'Feather', quantity: 5 },
      { type: 'item', name: 'Mahogany plank' },
      { type: 'item', name: 'Leather' },
      { type: 'item', name: 'Cowbell', note: 'Obtainable only during quest' },
      { type: 'item', name: 'Ardougne cloak', note: 'Recommended for teleportation' },
      { type: 'item', name: 'Dramen or Lunar staff', note: 'Recommended for fairy ring network' },
      { type: 'item', name: 'Food', note: 'Recommended for low-level players' },
      { type: 'item', name: 'Armour', note: 'Recommended for low-level players' },
      { type: 'item', name: 'Stamina potions', note: 'Recommended for faster travel' }
    ],
    recommendedSkills: {
      Hunter: 10,
      Agility: 30,
      Crafting: 30,
      Construction: 34,
      Thieving: 15,
      Combat: 30
    },
    recommendedPrayers: [],
    rewards: {
      experience: [
        { skill: 'Agility', amount: 5000 },
        { skill: 'Construction', amount: 1500 },
        { skill: 'Crafting', amount: 2000 }
      ],
      questPoints: 1,
      items: [],
      areas: ['Iceberg', 'Penguin agility course'],
      unlocks: [
        { description: 'Ability to make the penguin suit' },
        { description: 'Ability to use the Penguin agility course' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default ColdWar;
