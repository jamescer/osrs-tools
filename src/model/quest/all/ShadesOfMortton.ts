import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ShadesOfMortton: Quest = {
  id: 0,
  name: 'Shades of Mortton',
  members: true,
  difficulty: 'Intermediate',
  length: 'Short',
  requirements: [
    new LevelRequirement('Crafting', 20, false),
    new LevelRequirement('Herblore', 15, false),
  ],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'shadesOfMortton',
  url: 'https://oldschool.runescape.wiki/w/Shades_of_Mortton',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 3,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ShadesOfMortton;
