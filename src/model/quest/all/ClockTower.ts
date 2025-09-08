import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const ClockTower: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Clock Tower',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'clockTower',
  url: 'https://oldschool.runescape.wiki/w/Clock_Tower',
  series: null,
  age: '',
    recommendations: [
      {
        type: 'item',
        name: 'Bucket of water',
        note: 'Required for the black cog (can be obtained during quest). Alternatives: Jug of water, Ice gloves, Smiths gloves (i).'
      },
      {
        type: 'item',
        name: 'Food',
        note: 'Recommended for low-level players due to ogres and spiders.'
      },
      {
        type: 'item',
        name: 'Stamina potions',
        note: 'Recommended for faster travel.'
      },
      {
        type: 'item',
        name: 'Ardougne cloak',
        note: 'Recommended for teleportation.'
      }
    ],
    recommendedSkills: {
      Combat: 15
    },
    recommendedPrayers: [],
    rewards: {
      experience: [],
      questPoints: 1,
      items: [
        { name: 'Coins', quantity: 500 }
      ],
      areas: [],
      unlocks: [
        { description: 'Ability to run past level 53 Ogres in the dungeon' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default ClockTower;
