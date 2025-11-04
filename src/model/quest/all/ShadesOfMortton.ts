import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ShadesOfMortton: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: '',
  name: 'Shades of Mortton',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new LevelRequirement('Crafting', 20, false),
    new LevelRequirement('Herblore', 15, false),
  ],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'shadesOfMortton',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Shades_of_Mortton',
};

export default ShadesOfMortton;
