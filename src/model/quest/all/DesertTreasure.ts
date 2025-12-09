import { QuestDifficulty, QuestLength } from '../enums';
import { QuestStatus } from '../Quest';

const DesertTreasure = {
  age: 'Fifth Age',
  description:
    'Help the archaeologist uncover the secrets of the Ancient Pyramid and unlock Ancient Magicks.',
  difficulty: QuestDifficulty.Master,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Desert Treasure I',
  questPoints: 3,
  recommendations: [
    {
      name: 'Shantay pass',
      note: 'Or other method to enter Kharidian Desert.',
      quantity: 10,
      type: 'item',
    },
    { name: 'Coins', note: 'For carpet rides and Bandit Camp.', quantity: 650, type: 'item' },
    { name: 'Magic logs', quantity: 12, type: 'item' },
    { name: 'Steel bar', quantity: 6, type: 'item' },
    { name: 'Molten glass', quantity: 6, type: 'item' },
    { name: 'Ashes', quantity: 1, type: 'item' },
    { name: 'Charcoal', quantity: 1, type: 'item' },
    { name: 'Blood rune', quantity: 1, type: 'item' },
    { name: 'Bones', quantity: 1, type: 'item' },
    { name: 'Silver bar', quantity: 1, type: 'item' },
    { name: 'Garlic powder', quantity: 1, type: 'item' },
    { name: 'Spice', quantity: 1, type: 'item' },
    {
      name: 'Sweet',
      note: 'Cake, chocolate cake, chocolate bar, cooking apple, or pineapple pizza.',
      type: 'item',
    },
    { name: 'Tinderbox', type: 'item' },
    { name: 'Facemask/slayer helmet/gas mask', note: 'Required for Smoke Dungeon.', type: 'item' },
    { name: 'Lockpick', note: 'For Shadow diamond section.', quantity: 20, type: 'item' },
    { name: 'Prayer potions', note: 'Highly recommended for boss fights.', type: 'item' },
    {
      name: 'Super restore/energy/stamina potions',
      note: 'Recommended for travel and boss fights.',
      type: 'item',
    },
    { name: 'Weight-reducing clothing', note: 'Recommended for pyramid and travel.', type: 'item' },
    { name: 'High combat stats', note: 'Recommended for boss fights.', type: 'tip' },
    { name: 'Magic 50+', note: 'Required for quest and recommended for boss fights.', type: 'tip' },
    { name: 'Thieving 53+', note: 'Required for quest.', type: 'tip' },
    { name: 'Firemaking 50+', note: 'Required for quest.', type: 'tip' },
    { name: 'Slayer 10+', note: 'Required for quest.', type: 'tip' },
  ],
  recommendedPrayers: ['Protect from Melee', 'Protect from Missiles'],
  recommendedSkills: { Firemaking: 50, Magic: 50, Slayer: 10, Thieving: 53 },
  requirements: [],
  rewards: {
    areas: ['Ancient Pyramid', 'Smoke Dungeon'],
    experience: [{ amount: 20006.9, skill: 'Magic' }],
    items: [
      { name: 'Ring of visibility' },
      { name: 'Ancient staff', note: 'Buyable from Eblis after quest.' },
    ],
    misc: [
      'Switch between standard and Ancient Magicks spellbooks at the altar',
      'Required for Recipe for Disaster (Defeating the Culinaromancer), Curse of the Empty Lord, Hopespear’s Will, The Frozen Door',
      'Diary unlocks: Hard Desert, Varrock, Morytania; Elite Ardougne, Wilderness, Lumbridge, Desert',
    ],
    questPoints: 3,
    unlocks: [
      {
        description: 'Ability to use Ancient Magicks spellbook',
        url: 'https://oldschool.runescape.wiki/w/Ancient_Magicks',
      },
      {
        description: 'Access to Smoke Dungeon for Slayer tasks',
        url: 'https://oldschool.runescape.wiki/w/Smoke_Dungeon',
      },
      {
        description: 'Ability to talk to Eblis for ancient signet',
        url: 'https://oldschool.runescape.wiki/w/Ancient_signet',
      },
      {
        description: 'Bosses (Dessous, Damis, Fareed, Kamil) accessible in Nightmare Zone',
        url: 'https://oldschool.runescape.wiki/w/Nightmare_Zone',
      },
    ],
  },

  series: 'Mahjarrat',

  shortName: 'DesertTreasure',

  startLocation: 'Bedabin Camp',

  // TODO: Fill in requirements
  status: QuestStatus.NotStarted,

  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Desert_Treasure_I',
};

export default DesertTreasure;
