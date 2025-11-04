import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ATheatreOfBlood: Quest = {
  description: '',
  difficulty: QuestDifficulty.Master,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'A Theatre of Blood',
  questPoints: 1,
  recommendations: [
    {
      name: 'High combat stats (90+ recommended)',
      note: 'Strong food, potions, and team coordination. Consider Saradomin brews, Super restores, and best-in-slot gear such as Justiciar, Scythe of Vitur.',
      type: 'tip',
    },
    {
      name: 'Saradomin brews, Super restores, high-tier gear',
      note: 'Essential for survivability and damage.',
      type: 'item',
    },
  ],
  recommendedPrayers: [
    'Protect from Missiles',
    'Protect from Magic',
    'Protect from Melee',
    'Piety',
    'Rigour',
    'Augury',
  ],
  requirements: [],
  recommendedSkills: {
    Attack: 90,
    Defence: 90,
    Hitpoints: 90,
    Strength: 90,
    Magic: 90,
    Ranged: 90,
  },
  series: null,
  rewards: {
    experience: [],
    items: [
      { name: 'Access to the Theatre of Blood' },
      { name: 'Ability to receive unique rewards from the Theatre of Blood' },
    ],
    lamps: [],
    pets: [{ name: 'Lil Zik' }],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Can participate in the Theatre of Blood raid.' },
      { description: 'Verzik Vitur boss fight unlock' },
      { description: 'Hard mode unlock' },
      { description: 'Sins of the Father quest requirement met' },
    ],
  },
  startLocation: '',
  shortName: 'aTheatreOfBlood',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Theatre_of_Blood',
};

export default ATheatreOfBlood;
