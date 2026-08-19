import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheEnchantedKey: Quest = {
  age: 'Fifth Age',
  description:
    'Use an enchanted key to locate buried treasure chests scattered across Misthalin and Asgarnia.',
  difficulty: QuestDifficulty.Intermediate,
  id: 205,
  length: QuestLength.Medium,
  members: true,
  miniquest: true,
  name: 'The Enchanted Key',
  questPoints: 0,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Making History'),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [
      { name: 'Saradomin mjolnir' },
      { name: 'Guthix mjolnir' },
      { name: 'Zamorak mjolnir' },
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [],
  },
  series: null,
  shortName: 'theEnchantedKey',
  startLocation: 'Silver merchant, East Ardougne (reclaim enchanted key if lost)',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Enchanted_Key',
};

export default TheEnchantedKey;
