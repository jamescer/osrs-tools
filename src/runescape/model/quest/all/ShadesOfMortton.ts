import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ShadesOfMortton: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 94,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Shades of Mortton',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement('Crafting', 20, false),
    new LevelRequirement('Herblore', 15, false),
  ],
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
  series: null,
  shortName: 'shadesOfMortton',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Shades_of_Mortton',
};

export default ShadesOfMortton;
