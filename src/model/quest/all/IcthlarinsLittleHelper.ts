import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const IcthlarinsLittleHelper: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: "Icthlarin's Little Helper",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Desert',
  rewards: {
    areas: [],
    experience: [
      { amount: 4000, skill: Skill.Agility },
      { amount: 4500, skill: Skill.Thieving },
      { amount: 4000, skill: Skill.Woodcutting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'icthlarinsLittleHelper',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper',
};

export default IcthlarinsLittleHelper;
