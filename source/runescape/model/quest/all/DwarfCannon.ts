import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const DwarfCannon: Quest = {
  age: 'Third Age',
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
    experience: [{ amount: 750, skill: 'Crafting' }],
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
  steps: [
    'Speak to the dwarf captain south of Falador.',
    'The captain asks you to deliver a cannon to a friend.',
    'Collect the cannon from the dwarf.',
    'Travel to the designated location and assemble the cannon.',
    'Return to the captain to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Dwarf_Cannon',
};

export default DwarfCannon;
