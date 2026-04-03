import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
/**
 * Witch's House quest data
 * @author James Cerniglia
 * @see https://oldschool.runescape.wiki/w/Witch%27s_House for quest details and requirements
 */
const WitchsHouse: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 137,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Witch's House",
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: null,
  shortName: 'witchsHouse',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Witch%27s_House',
};

export default WitchsHouse;
