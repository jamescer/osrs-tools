import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const DruidicRitual: Quest = {
  age: 'Fifth Age',
  description: 'Help the druids of Taibwo Taiboa island by performing a ritual during a sacred ceremony.',
  difficulty: QuestDifficulty.Novice,
  id: 33,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Druidic Ritual',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 250, skill: Skill.Herblore }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: null,
  shortName: 'druidicRitual',

  startLocation: 'Taibwo Taiboa island',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Druidic_Ritual',
};

export default DruidicRitual;
