import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ClockTower: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: 'Clock Tower',
  questPoints: 1,
  recommendations: [
    {
      name: 'Bucket of water',
      note: 'Required for the black cog (can be obtained during quest). Alternatives: Jug of water, Ice gloves, Smiths gloves (i).',
      type: 'item',
    },
    {
      name: 'Food',
      note: 'Recommended for low-level players due to ogres and spiders.',
      type: 'item',
    },
    {
      name: 'Stamina potions',
      note: 'Recommended for faster travel.',
      type: 'item',
    },
    {
      name: 'Ardougne cloak',
      note: 'Recommended for teleportation.',
      type: 'item',
    },
  ],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {
    Combat: 15,
  },
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Coins', quantity: 500 }],
    lamps: [],
    pets: [],
    questPoints: 1,
    points: [],
    unlocks: [{ description: 'Ability to run past level 53 Ogres in the dungeon' }],
  },
  startLocation: '',
  shortName: 'clockTower',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Clock_Tower',
};

export default ClockTower;
