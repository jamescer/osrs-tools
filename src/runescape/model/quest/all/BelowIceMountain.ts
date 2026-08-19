import { QuestPointRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const BelowIceMountain: Quest = {
  age: 'Fifth Age',
  description: 'Explore the ancient Camdozaal ruins beneath Ice Mountain and help a team of archaeologists uncover what lies within.',

  difficulty: QuestDifficulty.Novice,

  id: 8,

  length: QuestLength.Short,

  members: false,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Below Ice Mountain',
  questPoints: 1,
  recommendations: [
    {
      name: 'Skills necklace or Battlefront Teleport or fairy ring cir to teleport to the Farming Guild',
      type: 'tip',
    },
    { name: 'Combat equipment to fight a level 82 beast.', type: 'tip' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestPointRequirement(16),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Coins', quantity: 2000 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Explore the ancient Camdozaal ruins beneath Ice Mountain and help a team of archaeologists uncover what lies within.' },
      { description: 'Explore the ancient Camdozaal ruins beneath Ice Mountain and help a team of archaeologists uncover what lies within.' },
      { description: 'Explore the ancient Camdozaal ruins beneath Ice Mountain and help a team of archaeologists uncover what lies within.' },
    ],
  },
  series: null,
  shortName: 'belowIceMountain',

  startLocation: 'Willow on the path south of Ice Mountain',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Below_Ice_Mountain',
};

export default BelowIceMountain;
