import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheFremennikIsles: Quest = {
  id: 0,
  name: 'The Fremennik Isles',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Construction', 20, false),
    new LevelRequirement('Agility', 40, false),
    new LevelRequirement('Woodcutting', 56, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theFremennikIsles',
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Isles',
  series: 'Fremennik',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
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

export default TheFremennikIsles;
