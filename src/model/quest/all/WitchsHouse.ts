import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const WitchsHouse: Quest = {
  id: 0,
  name: "Witch's House",
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [],
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'witchsHouse',
  url: 'https://oldschool.runescape.wiki/w/Witch%27s_House',
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
    questPoints: 4,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default WitchsHouse;
