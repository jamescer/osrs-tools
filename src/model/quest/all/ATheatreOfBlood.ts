import { Quest, QuestStatus } from '../Quest';
import { QuestDifficulty, QuestLength } from '../enums';
const ATheatreOfBlood: Quest = {
  id: 0,
  name: 'A Theatre of Blood',
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aTheatreOfBlood',
  url: 'https://oldschool.runescape.wiki/w/Theatre_of_Blood',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ATheatreOfBlood;
