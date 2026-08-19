import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ImpCatcher: Quest = {
  age: 'Fifth Age',
  description: 'Help a wizard catch imps for an experiment and learn to summon allies.',
  difficulty: QuestDifficulty.Novice,
  id: 59,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Imp Catcher',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 875, skill: Skill.Magic }],
    items: [{ name: 'Amulet of Ghostspeak' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      {
        description: 'Ability to summon familiars',
        url: 'https://oldschool.runescape.wiki/w/Familiar',
      },
    ],
  },
  series: null,
  shortName: 'impCatcher',

  startLocation: 'Wizard tower, south of Yanille',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Imp_Catcher',
};

export default ImpCatcher;
