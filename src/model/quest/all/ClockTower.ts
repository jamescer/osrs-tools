import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ClockTower: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,
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
  recommendedSkills: {
    Combat: 15,
  },
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Coins', quantity: 500 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Ability to run past level 53 Ogres in the dungeon' }],
  },
  series: null,
  shortName: 'clockTower',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Clock_Tower',
};

export default ClockTower;
