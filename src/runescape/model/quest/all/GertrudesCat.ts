import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const GertrudesCat: Quest = {
  age: 'Fifth Age',
  description: 'Help Gertrude find her lost cat Fluffs, who has gone missing somewhere near the Lumber Yard.',
  difficulty: QuestDifficulty.Novice,
  id: 48,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: "Gertrude's Cat",
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
  series: null,
  shortName: 'gertrudesCat',

  startLocation: 'Gertrude, west of Varrock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Gertrude%27s_Cat',
};

export default GertrudesCat;
