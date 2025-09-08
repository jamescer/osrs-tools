import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const GardenOfTranquillity: Quest = {
  id: 0,
  name: 'Garden of Tranquillity',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.VeryLong,
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'gardenOfTranquillity',
  url: 'https://oldschool.runescape.wiki/w/Garden_of_Tranquillity',
  series: null,
  age: '',

  recommendations: [],
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

export default GardenOfTranquillity;
