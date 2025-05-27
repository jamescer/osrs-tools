import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheForsakenTower: Quest = {
  id: 0,
  name: 'The Forsaken Tower',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [
    new QuestRequirement('Client of Kourend'),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theForsakenTower',
  url: 'https://oldschool.runescape.wiki/w/The_Forsaken_Tower',
  series: 'Great Kourend',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
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

export default TheForsakenTower;
