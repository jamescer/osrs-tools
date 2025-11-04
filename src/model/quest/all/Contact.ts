import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const Contact: Quest = {
  description: '',
  difficulty: QuestDifficulty.Master,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Contact!',
  // Quests: Prince Ali Rescue, Icthlarin's Little Helper
  questPoints: 1,
  recommendations: [
    {
      name: 'Light source',
      note: 'Kandarin headgear, Firemaking cape, Abyssal lantern, bruma torch recommended',
      type: 'item',
    },
    { name: 'Tinderbox', type: 'item' },
    { name: 'Antipoison potion', type: 'item' },
    { name: 'Combat equipment', type: 'item' },
    { name: 'Food', type: 'item' },
    { name: "Pharaoh's sceptre or Nardah teleport", type: 'item' },
    { name: 'Emergency escape teleport', type: 'item' },
    { name: 'Desert robes', type: 'item' },
    { name: 'Waterskins', type: 'item' },
    { name: 'Ring of dueling or amulet of glory', type: 'item' },
    { name: 'Coins', note: 'For Magic carpet transportation', type: 'item', quantity: 800 },
    { name: 'Shantay pass', type: 'item' },
  ],
  recommendedPrayers: ['Protect from Melee', 'Protect from Magic', 'Protect from Missiles'],
  requirements: [],
  recommendedSkills: {
    Agility: 50,
    Combat: 70,
    Thieving: 50,
  },
  series: 'Desert',
  rewards: {
    areas: ['Sophanem'],
    experience: [{ amount: 7000, skill: 'Thieving' }],
    items: [{ name: 'Keris dagger' }],
    lamps: [
      {
        amount: 7000,
        note: 'Combat lamp, 2x 7,000 XP in Attack, Strength, Defence, Hitpoints, Ranged, or Magic',
      },
      {
        amount: 7000,
        note: 'Combat lamp, 2x 7,000 XP in Attack, Strength, Defence, Hitpoints, Ranged, or Magic',
      },
    ],
    pets: [],
    questPoints: 1,
    points: [],
    unlocks: [
      { description: 'Access to Sophanem shops' },
      { description: 'Unlocks Giant scarab in Nightmare Zone' },
    ],
  },
  startLocation: '',
  shortName: 'contact',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Contact!',
};

export default Contact;
