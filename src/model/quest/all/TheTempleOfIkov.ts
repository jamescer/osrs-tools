import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const TheTempleOfIkov: Quest = {
  id: 0,
  name: 'Temple of Ikov',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Medium,
  requirements: [new LevelRequirement('Thieving', 42, false)],
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

  recommendations: [],
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
