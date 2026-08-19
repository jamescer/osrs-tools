import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const DwarfCannon: Quest = {
  age: 'Fifth Age',
  description: 'Help the dwarves by delivering a cannon to a friend in need.',
  difficulty: QuestDifficulty.Novice,
  id: 34,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Dwarf Cannon',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 750, skill: Skill.Crafting }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'dwarfCannon',

  startLocation: 'Falador south of the lodestone',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Dwarf_Cannon',
};

export default DwarfCannon;
