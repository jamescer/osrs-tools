import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const MakingHistory: Quest = {
  id: 0,
  name: 'Making History',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Priest in Peril'),
  ],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'makingHistory',
  url: 'https://oldschool.runescape.wiki/w/Making_History',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
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

export default MakingHistory;
