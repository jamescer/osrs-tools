import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const WitchesPotion: Quest = {
  id: 0,
  name: "Witch's Potion",
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
  shortName: 'witchesPotion',
  url: 'https://oldschool.runescape.wiki/w/Witch%27s_Potion',
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

export default WitchesPotion;
