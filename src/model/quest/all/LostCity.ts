import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const LostCity: Quest = {
  id: 0,
  name: 'Lost City',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Woodcutting', 36, false),
  ],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'lostCity',
  url: 'https://oldschool.runescape.wiki/w/Lost_City',
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
    questPoints: 3,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default LostCity;
