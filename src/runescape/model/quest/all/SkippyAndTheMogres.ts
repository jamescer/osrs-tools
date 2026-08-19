import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SkippyAndTheMogres: Quest = {
  age: 'Fifth Age',
  description:
    'Help Skippy near Mudskipper Point discover what is lurking beneath the water, and unlock access to Mogre hunting.',
  difficulty: QuestDifficulty.Novice,
  id: 217,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: true,
  name: 'Skippy and the Mogres',
  questPoints: 0,
  recommendations: [
    { name: 'Eel sandwich', type: 'item', note: 'Can be obtained during the miniquest' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Ability to use Fishing Explosives to kill Mogres (level 32 Slayer)', url: 'https://oldschool.runescape.wiki/w/Mogre' },
    ],
  },
  series: null,
  shortName: 'skippyAndTheMogres',
  startLocation: 'Speak to Skippy near Mudskipper Point, south-west of Port Sarim',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Skippy_and_the_Mogres',
};

export default SkippyAndTheMogres;
