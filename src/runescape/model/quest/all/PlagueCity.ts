import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const PlagueCity: Quest = {
  age: 'Fifth Age',
  description: 'Travel into the quarantined West Ardougne to rescue Elena, trapped by the plague that has devastated the city.',
  difficulty: QuestDifficulty.Novice,
  id: 80,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Plague City',
  questPoints: 1,
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
    questPoints: 1,
    unlocks: [],
  },
  series: 'Elf',
  shortName: 'plagueCity',

  startLocation: "Edmond's house, East Ardougne",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Plague_City',
};

export default PlagueCity;
