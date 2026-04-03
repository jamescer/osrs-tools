import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ErnestTheChicken: Quest = {
  age: 'Fifth Age',
  description: 'A farmer named Farmer Fred has lost his chicken, Ernest, a prized white chicken.',
  difficulty: QuestDifficulty.Novice,
  id: 1001,
  length: QuestLength.VeryShort,
  members: false,
  miniquest: false,
  name: 'Ernest the Chicken',
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
  series: 'None',
  shortName: 'Ernest the Chicken',
  startLocation: 'Poultry Farm',
  status: QuestStatus.NotStarted,
  steps: [
    'Talk to Farmer Fred',
    'Find Ernest the chicken',
    'Return Ernest to Farmer Fred',
  ],
  url: 'https://oldschool.runescape.wiki/w/Ernest_the_Chicken',
};

export default ErnestTheChicken;
