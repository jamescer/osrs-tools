import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ATasteOfHope: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'A Taste of Hope',
  // Quests: Darkness of Hallowvale, Skills: Crafting 48, Agility 45, Attack 40, Herblore 40, Slayer 38
  questPoints: 1,
  recommendations: [
    {
      name: 'High combat stats (80+ recommended)',
      note: 'Strong food and potions for boss fights. Consider bringing Prayer potions and high-tier gear.',
      type: 'tip',
    },
    {
      name: 'Prayer potions, high-tier gear',
      note: 'Useful for the final boss fight.',
      type: 'item',
    },
  ],
  recommendedPrayers: ['Protect from Melee', 'Protect from Magic', 'Piety'],
  recommendedSkills: {
    Attack: 80,
    Defence: 80,
    Hitpoints: 80,
    Magic: 80,
    Ranged: 80,
    Strength: 80,
  },
  requirements: [],
  rewards: {
    areas: ['Darkmeyer'],
    experience: [
      { amount: 4000, skill: 'Herblore' },
      { amount: 2000, skill: 'Attack' },
      { amount: 2000, skill: 'Strength' },
      { amount: 2000, skill: 'Defence' },
      { amount: 2000, skill: 'Hitpoints' },
    ],
    items: [{ name: 'Drakan’s medallion' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Access to Darkmeyer' },
      { description: 'Ability to use Drakan’s medallion teleport' },
    ],
  },
  series: 'Myreque',
  shortName: 'aTasteOfHope',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Taste_of_Hope',
};

export default ATasteOfHope;
