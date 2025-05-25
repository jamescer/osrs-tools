import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const IcthlarinsLittleHelper: Quest = {
  id: 0,
  name: "Icthlarin's Little Helper",
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium - Long',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'icthlarinsLittleHelper',
  url: "https://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper",
  series: 'Desert',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Agility: 4000, Thieving: 4500, Woodcutting: 4000 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default IcthlarinsLittleHelper;
