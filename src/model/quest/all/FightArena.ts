import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const FightArena: Quest = {
  id: 0,
  name: 'Fight Arena',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Short,
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

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default FightArena;
