import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';  

import { Quest } from '../types';
import { QuestStatus } from '../Quest';

const DesertTreasure = {
  id: 0, // TODO: Replace with actual ID
  name: "Desert Treasure I",
  description: "Help the archaeologist uncover the secrets of the Ancient Pyramid and unlock Ancient Magicks.",
  difficulty: QuestDifficulty.Master,
  steps: [], // TODO: Fill in steps
  requirements: [], // TODO: Fill in requirements
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "DesertTreasure",
  url: "https://oldschool.runescape.wiki/w/Desert_Treasure_I",
  series: "Mahjarrat",
  members: true,
  questPoints: 3,
  length: QuestLength.Long,
  age: "Fifth Age",
  startLocation: "Bedabin Camp",
  recommendations: [
    { type: 'item', name: 'Shantay pass', quantity: 10, note: 'Or other method to enter Kharidian Desert.' },
    { type: 'item', name: 'Coins', quantity: 650, note: 'For carpet rides and Bandit Camp.' },
    { type: 'item', name: 'Magic logs', quantity: 12 },
    { type: 'item', name: 'Steel bar', quantity: 6 },
    { type: 'item', name: 'Molten glass', quantity: 6 },
    { type: 'item', name: 'Ashes', quantity: 1 },
    { type: 'item', name: 'Charcoal', quantity: 1 },
    { type: 'item', name: 'Blood rune', quantity: 1 },
    { type: 'item', name: 'Bones', quantity: 1 },
    { type: 'item', name: 'Silver bar', quantity: 1 },
    { type: 'item', name: 'Garlic powder', quantity: 1 },
    { type: 'item', name: 'Spice', quantity: 1 },
    { type: 'item', name: 'Sweet', note: 'Cake, chocolate cake, chocolate bar, cooking apple, or pineapple pizza.' },
    { type: 'item', name: 'Tinderbox' },
    { type: 'item', name: 'Facemask/slayer helmet/gas mask', note: 'Required for Smoke Dungeon.' },
    { type: 'item', name: 'Lockpick', quantity: 20, note: 'For Shadow diamond section.' },
    { type: 'item', name: 'Prayer potions', note: 'Highly recommended for boss fights.' },
    { type: 'item', name: 'Super restore/energy/stamina potions', note: 'Recommended for travel and boss fights.' },
    { type: 'item', name: 'Weight-reducing clothing', note: 'Recommended for pyramid and travel.' },
    { type: 'tip', name: 'High combat stats', note: 'Recommended for boss fights.' },
    { type: 'tip', name: 'Magic 50+', note: 'Required for quest and recommended for boss fights.' },
    { type: 'tip', name: 'Thieving 53+', note: 'Required for quest.' },
    { type: 'tip', name: 'Firemaking 50+', note: 'Required for quest.' },
    { type: 'tip', name: 'Slayer 10+', note: 'Required for quest.' }
  ],
  recommendedSkills: { Magic: 50, Thieving: 53, Firemaking: 50, Slayer: 10 },
  recommendedPrayers: ['Protect from Melee', 'Protect from Missiles'],
  rewards: {
    experience: [
      { skill: 'Magic', amount: 20006.9 }
    ],
    items: [
      { name: 'Ring of visibility' },
      { name: 'Ancient staff', note: 'Buyable from Eblis after quest.' }
    ],
    unlocks: [
      { description: 'Ability to use Ancient Magicks spellbook', url: 'https://oldschool.runescape.wiki/w/Ancient_Magicks' },
      { description: 'Access to Smoke Dungeon for Slayer tasks', url: 'https://oldschool.runescape.wiki/w/Smoke_Dungeon' },
      { description: 'Ability to talk to Eblis for ancient signet', url: 'https://oldschool.runescape.wiki/w/Ancient_signet' },
      { description: 'Bosses (Dessous, Damis, Fareed, Kamil) accessible in Nightmare Zone', url: 'https://oldschool.runescape.wiki/w/Nightmare_Zone' }
    ],
    questPoints: 3,
    areas: ['Ancient Pyramid', 'Smoke Dungeon'],
    misc: ['Switch between standard and Ancient Magicks spellbooks at the altar', 'Required for Recipe for Disaster (Defeating the Culinaromancer), Curse of the Empty Lord, Hopespear’s Will, The Frozen Door', 'Diary unlocks: Hard Desert, Varrock, Morytania; Elite Ardougne, Wilderness, Lumbridge, Desert']
  }
};

export default DesertTreasure;
