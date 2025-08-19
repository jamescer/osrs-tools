import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const GertrudesCat: Quest = {
  id: 0,
  name: "Gertrude's Cat",
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
  shortName: 'gertrudesCat',
  url: 'https://oldschool.runescape.wiki/w/Gertrude%27s_Cat',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default GertrudesCat;
