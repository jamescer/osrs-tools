import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const FightArena: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Fight Arena',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
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
  series: 'Mahjarrat',
  shortName: 'fightArena',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fight_Arena',
};

export default FightArena;
