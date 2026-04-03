import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const Contact: Quest = {
  age: 'Fifth Age',
  description: 'Make contact with a high priest in the desert and complete a sacred mission.',
  difficulty: QuestDifficulty.Master,
  id: 18,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Contact!',
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
    { name: 'Coins', note: 'For Magic carpet transportation', quantity: 800, type: 'item' },
    { name: 'Shantay pass', type: 'item' },
  ],
  recommendedPrayers: ['Protect from Melee', 'Protect from Magic', 'Protect from Missiles'],
  recommendedSkills: {
    Agility: 50,
    Combat: 70,
    Thieving: 50,
  },
  requirements: [
    new QuestRequirement('Prince Ali Rescue'),
    new QuestRequirement("Icthlarin's Little Helper"),
    new LevelRequirement('Agility', 50, false),
    new LevelRequirement('Thieving', 50, false),
  ],
  rewards: {
    areas: ['Sophanem'],
    experience: [{ amount: 7000, skill: Skill.Thieving }],
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
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Access to Sophanem shops' },
      { description: 'Unlocks Giant scarab in Nightmare Zone' },
    ],
  },
  series: 'Desert',
  shortName: 'contact',
  startLocation: 'Sophanem, in a chamber beneath the temple',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Sophanem temple.',
    'Navigate through the temple dungeons.',
    'Meet with the high priest.',
    'Receive the sacred mission.',
    'Gather artifacts and complete rituals.',
    'Return to the priest and complete the contact.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Contact!',
};

export default Contact;
