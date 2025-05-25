import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const HazeelCult: Quest = {
  id: 0,
  name: 'Hazeel Cult',
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
  shortName: 'hazeelCult',
  url: 'https://oldschool.runescape.wiki/w/Hazeel_Cult',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Thieving: 1500 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default HazeelCult;
