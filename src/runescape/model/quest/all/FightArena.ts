import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const FightArena: Quest = {
  age: 'Fifth Age',
  description: 'Rescue the imprisoned Lady Servil from the gladiatorial arena of General Khazard.',
  difficulty: QuestDifficulty.Intermediate,
  id: 44,
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

  startLocation: 'Lady Servil, north-west of East Ardougne',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fight_Arena',
};

export default FightArena;
