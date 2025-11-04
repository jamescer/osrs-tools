import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SpiritsOfTheElid: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Spirits of the Elid',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new LevelRequirement('Magic', 33, false),
    new LevelRequirement('Thieving', 37, false),
  ],
  recommendedSkills: {},
  series: null,
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'spiritsOfTheElid',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Spirits_of_the_Elid',
};

export default SpiritsOfTheElid;
