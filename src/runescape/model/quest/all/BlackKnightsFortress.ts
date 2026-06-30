import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const BlackKnightsFortress: Quest = {
  age: 'First Age',
  description: 'Infiltrate the Black Knights\' Fortress and discover their secrets.',

  difficulty: QuestDifficulty.Intermediate,

  id: 12,

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
  recommendedSkills: { Combat: 15 },
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 5000, skill: 'Attack' }],
    items: [{ name: '3000 coins' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [{ description: 'Ability to enter the Black Knights’ Fortress freely' }],
  },
  series: null,
  shortName: 'blackKnightsFortress',
  startLocation: 'Just north of Falador, outside the fortress',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel north of Falador to the Black Knights\' Fortress.',
    'Put on disguise (bronze med helm, iron chainbody, and carry a cabbage).',
    'Enter the fortress to investigate.',
    'Gather information about the knights.',
    'Retrieve the captured rune essence.',
    'Exit the fortress and return to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress',
};

export default BlackKnightsFortress;
