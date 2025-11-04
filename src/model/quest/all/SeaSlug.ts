import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SeaSlug: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: '',
  name: 'Sea Slug',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Sea Slug',
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
  startLocation: '',

  shortName: 'seaSlug',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Sea_Slug',
};

export default SeaSlug;
