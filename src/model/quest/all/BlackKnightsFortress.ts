import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const BlackKnightsFortress: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: false,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: "Black Knights' Fortress",
  questPoints: 3,
  recommendations: [
    {
      name: 'Bronze med helm, iron chainbody, cabbage',
      note: 'Required to enter the fortress and complete the quest.',
      type: 'item',
    },
    {
      name: 'Food',
      note: 'Useful for low-level players.',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: '3000 coins' }],
    lamps: [],
    pets: [],
    questPoints: 3,
    points: [],
    unlocks: [{ description: 'Ability to enter the Black Knights’ Fortress freely' }],
  },
  startLocation: '',
  shortName: 'blackKnightsFortress',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress',
};

export default BlackKnightsFortress;
