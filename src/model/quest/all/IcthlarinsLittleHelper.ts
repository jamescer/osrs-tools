import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const IcthlarinsLittleHelper: Quest = {
  id: 0,
  name: "Icthlarin's Little Helper",
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'icthlarinsLittleHelper',
  url: 'https://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper',
  series: 'Desert',
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Agility, amount: 4000 },
      { skill: Skill.Thieving, amount: 4500 },
      { skill: Skill.Woodcutting, amount: 4000 },
    ],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default IcthlarinsLittleHelper;
