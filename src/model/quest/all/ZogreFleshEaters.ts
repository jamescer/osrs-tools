import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ZogreFleshEaters: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Zogre Flesh Eaters',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new LevelRequirement('Herblore', 8, false),
    new LevelRequirement('Smithing', 4, false),
    new LevelRequirement('Ranged', 30, false),
  ],
  recommendedSkills: {},
  series: 'Ogre',
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
  startLocation: '',

  shortName: 'zogreFleshEaters',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters',
};

export default ZogreFleshEaters;
