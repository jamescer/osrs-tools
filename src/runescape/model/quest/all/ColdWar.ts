import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ColdWar: Quest = {
  age: 'Fifth Age',
  description: 'Help the penguins of the Penguin Intelligence Agency foil a secret penguin operation threatening Gielinor.',

  difficulty: QuestDifficulty.Intermediate,

  id: 17,

  length: QuestLength.MediumLong,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Cold War',
  // Skills: Hunter 10, Agility 30, Crafting 30, Construction 34, Thieving 15
  questPoints: 2,
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
  requirements: [
    new LevelRequirement(Skill.Hunter, 10, false),
    new LevelRequirement(Skill.Agility, 30, false),
    new LevelRequirement(Skill.Crafting, 30, false),
    new LevelRequirement(Skill.Construction, 34, false),
    new LevelRequirement(Skill.Thieving, 15, false),
  ],
  rewards: {
    areas: ['Iceberg', 'Penguin agility course'],
    experience: [
      { amount: 1000, skill: Skill.Agility },
      { amount: 5000, skill: Skill.Construction },
      { amount: 5000, skill: Skill.Crafting },
      { amount: 5000, skill: Skill.Farming },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Ability to make the penguin suit' },
      { description: 'Ability to use the Penguin agility course' },
    ],
  },
  series: 'Penguin',
  shortName: 'coldWar',
  startLocation: 'Larry, Ardougne Zoo',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cold_War',
};

export default ColdWar;
