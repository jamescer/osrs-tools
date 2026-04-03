import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const HazeelCult: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 54,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Hazeel Cult',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 1500, skill: Skill.Thieving }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'hazeelCult',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Hazeel_Cult',
};

export default HazeelCult;
