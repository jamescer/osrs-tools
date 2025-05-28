import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const GoblinDiplomacy: Quest = {
  id: 0,
  name: 'Goblin Diplomacy',
  members: false,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 5,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'goblinDiplomacy',
  url: 'https://oldschool.runescape.wiki/w/Goblin_Diplomacy',
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

export default GoblinDiplomacy;
