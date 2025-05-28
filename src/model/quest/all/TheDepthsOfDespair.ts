import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheDepthsOfDespair: Quest = {
  id: 0,
  name: 'The Depths of Despair',
  members: true,
  difficulty: 'Intermediate',
  length: 'Short',
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new LevelRequirement('Agility', 18, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theDepthsOfDespair',
  url: 'https://oldschool.runescape.wiki/w/The_Depths_of_Despair',
  series: 'Great Kourend',
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
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TheDepthsOfDespair;
