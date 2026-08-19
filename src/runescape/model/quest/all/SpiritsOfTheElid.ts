import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SpiritsOfTheElid: Quest = {
  age: 'Fifth Age',
  description: 'Help the spirits of the river Elid restore water to the parched desert of the Kharidian.',
  difficulty: QuestDifficulty.Intermediate,
  id: 101,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Spirits of the Elid',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement(Skill.Magic, 33, false), new LevelRequirement(Skill.Thieving, 37, false)],
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
  series: null,
  shortName: 'spiritsOfTheElid',

  startLocation: 'Ghaslor the Elder, Nardah',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Spirits_of_the_Elid',
};

export default SpiritsOfTheElid;
