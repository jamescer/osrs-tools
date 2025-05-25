import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const FightArena: Quest = {
  id: 0,
  name: 'Fight Arena',
  members: true,
  difficulty: 'Experienced',
  length: 'Short',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'fightArena',
  url: 'https://oldschool.runescape.wiki/w/Fight_Arena',
  series: 'Mahjarrat',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Attack: 12175, Thieving: 2175 },
    questPoints: 2,
    items: [],
    areas: [],
    grants: [],
  },
};

export default FightArena;
