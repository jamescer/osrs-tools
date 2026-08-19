import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheTempleOfIkov: Quest = {
  age: 'Fifth Age',
  description: 'Retrieve the Staff of Armadyl from the Temple of Ikov for Lucien — or betray him and destroy it instead.',
  difficulty: QuestDifficulty.Novice,
  id: 121,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Temple of Ikov',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement(Skill.Thieving, 42, false)],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'theTempleOfIkov',

  startLocation: 'Lucien, Flying Horse Inn, Ardougne',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Temple_of_Ikov',
};

export default TheTempleOfIkov;
