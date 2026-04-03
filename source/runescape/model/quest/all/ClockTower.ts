import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ClockTower: Quest = {
  age: 'Third Age',
  description: 'Repair the Grand Clock Tower in Ardougne and restore it to working order.',

  difficulty: QuestDifficulty.Novice,

  id: 16,

  length: QuestLength.Short,

  members: false,

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
    experience: [{ amount: 1000, skill: 'Crafting' }],
    items: [{ name: 'Coins', quantity: 500 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Ability to run past level 53 Ogres in the dungeon' }],
  },
  series: null,
  shortName: 'clockTower',
  startLocation: 'Ardougne Clock Tower',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the Ardougne Clock Tower.',
    'Speak to the guard.',
    'Enter the tower and assess damage.',
    'Gather required cogs and parts.',
    'Repair each section of the clock.',
    'Activate the clock to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Clock_Tower',
};

export default ClockTower;
