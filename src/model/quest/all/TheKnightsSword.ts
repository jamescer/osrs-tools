import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const TheKnightsSword: Quest = {
  id: 0,
  name: "The Knight's Sword",
  members: false,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theKnightsSword',
  url: 'https://oldschool.runescape.wiki/w/The_Knight%27s_Sword',
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

export default TheKnightsSword;
