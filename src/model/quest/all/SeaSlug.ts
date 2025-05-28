import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const SeaSlug: Quest = {
  id: 0,
  name: 'Sea Slug',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'seaSlug',
  url: 'https://oldschool.runescape.wiki/w/Sea_Slug',
  series: 'Sea Slug',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
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

export default SeaSlug;
