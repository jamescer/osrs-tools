import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ShiloVillage: Quest = {
  id: 0,
  name: 'Shilo Village',
  members: true,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [
    new QuestRequirement('Jungle Potion'),
    new LevelRequirement('Crafting', 20, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'shiloVillage',
  url: 'https://oldschool.runescape.wiki/w/Shilo_Village',
  series: 'Karamja',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Long',
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

export default ShiloVillage;
