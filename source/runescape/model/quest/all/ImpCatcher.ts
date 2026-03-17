import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ImpCatcher: Quest = {
  age: 'First Age',
  description: 'Help a wizard catch imps for an experiment and learn to summon allies.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
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
  steps: [
    'Travel to the Wizard Tower south of Yanille.',
    'Talk to the wizard on the top floor.',
    'The wizard asks you to catch 4 imps of different colors.',
    'Collect a white imp from the Wizard Tower.',
    'Collect a black imp from the Wilds south of Varrock.',
    'Collect a yellow imp from the Wizard Tower.',
    'Collect a red imp from the ruins east of Varrock.',
    'Return all imps to the wizard to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Imp_Catcher',
};

export default ImpCatcher;
