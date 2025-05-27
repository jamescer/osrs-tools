import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheHandInTheSand: Quest = {
  id: 0,
  name: 'The Hand in the Sand',
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
  shortName: 'theHandInTheSand',
  url: 'https://oldschool.runescape.wiki/w/The_Hand_in_the_Sand',
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
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheHandInTheSand;
