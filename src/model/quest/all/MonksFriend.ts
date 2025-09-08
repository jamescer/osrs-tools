import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const MonksFriend: Quest = {
  id: 0,
  name: "Monk's Friend",
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'monksFriend',
  url: 'https://oldschool.runescape.wiki/w/Monk%27s_Friend',
  series: null,
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: Skill.Woodcutting, amount: 2000 }],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default MonksFriend;
