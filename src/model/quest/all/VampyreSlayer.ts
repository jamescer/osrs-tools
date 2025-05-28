import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const VampyreSlayer: Quest = {
  id: 0,
  name: 'Vampyre Slayer',
  members: false,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'vampyreSlayer',
  url: 'https://oldschool.runescape.wiki/w/Vampyre_Slayer',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 3,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default VampyreSlayer;
