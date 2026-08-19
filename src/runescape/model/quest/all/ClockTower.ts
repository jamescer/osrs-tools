import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ClockTower: Quest = {
  age: 'Fifth Age',
  description: 'Help Brother Kojo fix his Clock Tower south of East Ardougne by finding four missing cogs.',

  difficulty: QuestDifficulty.Novice,

  id: 16,

  length: QuestLength.VeryShort,

  members: true,

  miniquest: false,
  name: 'Clock Tower',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Coins', quantity: 500 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'clockTower',
  startLocation: 'Brother Kojo, Clock Tower south of East Ardougne',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Clock_Tower',
};

export default ClockTower;
