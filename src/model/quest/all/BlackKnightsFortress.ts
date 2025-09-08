import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const BlackKnightsFortress: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Black Knights' Fortress",
  members: false,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'blackKnightsFortress',
  url: 'https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress',
  series: null,
  age: '',
    recommendations: [
      {
        type: 'item',
        name: 'Bronze med helm, iron chainbody, cabbage',
        note: 'Required to enter the fortress and complete the quest.'
      },
      {
        type: 'tip',
        name: 'Food',
        note: 'Useful for low-level players.'
      }
    ],
    recommendedSkills: {},
    recommendedPrayers: [],
    rewards: {
      experience: [],
      questPoints: 3,
      items: [
        { name: '3000 coins' }
      ],
      areas: [],
      unlocks: [
        { description: 'Ability to enter the Black Knights’ Fortress freely' }
      ],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default BlackKnightsFortress;
