import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const MourningsEndPartII: Quest = {
  age: 'Fifth Age',
  description: 'Descend into the Temple of Light and navigate a series of deadly mirror puzzles to reach the Death Altar hidden within.',
  difficulty: QuestDifficulty.Master,
  id: 1021,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: "Mourning's End Part II",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Mourning's End Part I"),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Elf',
  shortName: 'mourningsEndPartII',
  startLocation: 'Elf Land',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Mourning%27s_End_Part_II',
};
export default MourningsEndPartII;
