import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ShadowOfTheStorm: Quest = {
  id: 0,
  name: 'Shadow of the Storm',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new QuestRequirement('The Golem'),
    new QuestRequirement('Demon Slayer'),
    new LevelRequirement('Crafting', 30, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'shadowOfTheStorm',
  url: 'https://oldschool.runescape.wiki/w/Shadow_of_the_Storm',
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
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ShadowOfTheStorm;
