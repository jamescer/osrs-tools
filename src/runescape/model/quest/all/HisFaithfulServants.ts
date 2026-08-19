import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const HisFaithfulServants: Quest = {
  age: 'Fifth Age',
  description:
    'Speak to the shades within the Haunted Mine and learn about their devotion to Zaros.',
  difficulty: QuestDifficulty.Master,
  id: 210,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: 'His Faithful Servants',
  questPoints: 0,
  recommendations: [
    { name: 'Ghostspeak amulet', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Haunted Mine'),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Upgraded ghostly robes (tier 3)' },
    ],
  },
  series: 'Mahjarrat',
  shortName: 'hisFaithfulServants',
  startLocation: 'Speak to the haunted mine entrance ghost',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/His_Faithful_Servants',
};

export default HisFaithfulServants;
