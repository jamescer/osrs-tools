import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DwarfCannon: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Dwarf Cannon",
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "dwarfCannon",
  url: 'https://oldschool.runescape.wiki/w/Dwarf_Cannon',
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
    experience: { Crafting: 750 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DwarfCannon;
