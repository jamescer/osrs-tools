import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const BlackKnightsFortress: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: false,

  miniquest: false,
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
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: '3000 coins' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [{ description: 'Ability to enter the Black Knights’ Fortress freely' }],
  },
  series: null,
  shortName: 'blackKnightsFortress',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress',
};

export default BlackKnightsFortress;
