import { Quest, QuestStatus } from '../Quest';
import { QuestDifficulty, QuestLength } from '../enums';
const ATheatreOfBlood: Quest = {
  id: 0,
  name: 'A Theatre of Blood',
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aTheatreOfBlood',
  url: 'https://oldschool.runescape.wiki/w/Theatre_of_Blood',
  series: null,
  age: '',
    recommendations: [
      {
        type: 'tip',
        name: 'High combat stats (90+ recommended)',
        note: 'Strong food, potions, and team coordination. Consider Saradomin brews, Super restores, and best-in-slot gear such as Justiciar, Scythe of Vitur.'
      },
      {
        type: 'item',
        name: 'Saradomin brews, Super restores, high-tier gear',
        note: 'Essential for survivability and damage.'
      }
    ],
    recommendedSkills: {
      Attack: 90,
      Strength: 90,
      Defence: 90,
      Hitpoints: 90,
      Ranged: 90,
      Magic: 90
    },
    recommendedPrayers: ['Protect from Missiles', 'Protect from Magic', 'Protect from Melee', 'Piety', 'Rigour', 'Augury'],
    rewards: {
      experience: [],
      questPoints: 1,
      items: [
        { name: 'Access to the Theatre of Blood' },
        { name: 'Ability to receive unique rewards from the Theatre of Blood' }
      ],
      unlocks: [
        { description: 'Can participate in the Theatre of Blood raid.' },
        { description: 'Verzik Vitur boss fight unlock' },
        { description: 'Hard mode unlock' },
        { description: 'Sins of the Father quest requirement met' }
      ],
      lamps: [],
      points: [],
      pets: [
        { name: 'Lil Zik' }
      ],
    },
};

export default ATheatreOfBlood;
