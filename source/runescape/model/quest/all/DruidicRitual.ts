import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const DruidicRitual: Quest = {
  age: 'Third Age',
  description: 'Help the druids of Taibwo Taiboa island by performing a ritual during a sacred ceremony.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Druidic Ritual',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 250, skill: 'Herblore' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: null,
  shortName: 'druidicRitual',

  startLocation: 'Taibwo Taiboa island',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Taibwo Taiboa island and speak to the druid.',
    'The druid tells you about a sacred herblore ceremony.',
    'Collect the required ingredients: olive oil, a goat horn, serrated bones, and herbs.',
    'Travel to the sacred altar and perform the ritual.',
    'Use your ingredients to complete the druidic ritual.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Druidic_Ritual',
};

export default DruidicRitual;
