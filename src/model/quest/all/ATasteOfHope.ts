import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const ATasteOfHope: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'A Taste of Hope',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [], // Quests: Darkness of Hallowvale, Skills: Crafting 48, Agility 45, Attack 40, Herblore 40, Slayer 38
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aTasteOfHope',
  url: 'https://oldschool.runescape.wiki/w/A_Taste_of_Hope',
  series: 'Myreque',
  age: '',
    recommendations: [
      {
        type: 'tip',
        name: 'High combat stats (80+ recommended)',
        note: 'Strong food and potions for boss fights. Consider bringing Prayer potions and high-tier gear.'
      },
      {
        type: 'item',
        name: 'Prayer potions, high-tier gear',
        note: 'Useful for the final boss fight.'
      }
    ],
    recommendedSkills: {
      Attack: 80,
      Strength: 80,
      Defence: 80,
      Hitpoints: 80,
      Ranged: 80,
      Magic: 80
    },
    recommendedPrayers: ['Protect from Melee', 'Protect from Magic', 'Piety'],
    rewards: {
      experience: [
        { skill: 'Herblore', amount: 4000 },
        { skill: 'Attack', amount: 2000 },
        { skill: 'Strength', amount: 2000 },
        { skill: 'Defence', amount: 2000 },
        { skill: 'Hitpoints', amount: 2000 }
      ],
      questPoints: 1,
      items: [
        { name: 'Drakan’s medallion' }
      ],
      areas: ['Darkmeyer'],
      unlocks: [
        { description: 'Access to Darkmeyer' },
        { description: 'Ability to use Drakan’s medallion teleport' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default ATasteOfHope;
