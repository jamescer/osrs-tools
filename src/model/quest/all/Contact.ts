import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const Contact: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Contact!',
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.Medium,
  requirements: [], // Quests: Prince Ali Rescue, Icthlarin's Little Helper
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'contact',
  url: 'https://oldschool.runescape.wiki/w/Contact!',
  series: 'Desert',
  age: '',
    recommendations: [
      { type: 'item', name: 'Light source', note: 'Kandarin headgear, Firemaking cape, Abyssal lantern, bruma torch recommended' },
      { type: 'item', name: 'Tinderbox' },
      { type: 'item', name: 'Antipoison potion' },
      { type: 'item', name: 'Combat equipment' },
      { type: 'item', name: 'Food' },
      { type: 'item', name: 'Pharaoh\'s sceptre or Nardah teleport' },
      { type: 'item', name: 'Emergency escape teleport' },
      { type: 'item', name: 'Desert robes' },
      { type: 'item', name: 'Waterskins' },
      { type: 'item', name: 'Ring of dueling or amulet of glory' },
      { type: 'item', name: 'Coins', quantity: 800, note: 'For Magic carpet transportation' },
      { type: 'item', name: 'Shantay pass' }
    ],
    recommendedSkills: {
      Combat: 70,
      Agility: 50,
      Thieving: 50
    },
    recommendedPrayers: ['Protect from Melee', 'Protect from Magic', 'Protect from Missiles'],
    rewards: {
      experience: [
        { skill: 'Thieving', amount: 7000 }
      ],
      questPoints: 1,
      items: [
        { name: 'Keris dagger' }
      ],
      areas: ['Sophanem'],
      unlocks: [
        { description: 'Access to Sophanem shops' },
        { description: 'Unlocks Giant scarab in Nightmare Zone' }
      ],
      lamps: [
        { amount: 7000, note: 'Combat lamp, 2x 7,000 XP in Attack, Strength, Defence, Hitpoints, Ranged, or Magic' },
        { amount: 7000, note: 'Combat lamp, 2x 7,000 XP in Attack, Strength, Defence, Hitpoints, Ranged, or Magic' }
      ],
      points: [],
      pets: [],
    },
};

export default Contact;
