import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';

const AHandInTheSand: Quest = {
  id: 0,
  name: 'A Hand in the Sand',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Crafting', 49, false),
    new LevelRequirement('Thieving', 40, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aHandInTheSand',
  url: 'https://oldschool.runescape.wiki/w/A_Hand_in_the_Sand',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Crafting', amount: 9000 },
      { skill: 'Thieving', amount: 1000 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default AHandInTheSand;
