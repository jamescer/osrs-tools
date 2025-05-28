import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const MonksFriend: Quest = {
  id: 0,
  name: "Monk's Friend",
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
  shortName: 'monksFriend',
  url: "https://oldschool.runescape.wiki/w/Monk%27s_Friend",
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
    experience: [
      { skill: Skill.Woodcutting, amount: 2000 }
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default MonksFriend;
