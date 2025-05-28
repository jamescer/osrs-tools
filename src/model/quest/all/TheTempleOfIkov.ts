import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheTempleOfIkov: Quest = {
  id: 0,
  name: 'Temple of Ikov',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Thieving', 42, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theTempleOfIkov',
  url: 'https://oldschool.runescape.wiki/w/Temple_of_Ikov',
  series: null,
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

export default TheTempleOfIkov;
