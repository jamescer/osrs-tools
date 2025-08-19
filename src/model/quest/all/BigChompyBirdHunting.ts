import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const BigChompyBirdHunting: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Big Chompy Bird Hunting',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'bigChompyBirdHunting',
  url: 'https://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting',
  series: 'Ogre',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Cooking', amount: 1470 },
      { skill: 'Fletching', amount: 262 },
      { skill: 'Ranged', amount: 735 },
    ],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default BigChompyBirdHunting;
