import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MerlinsCrystal: Quest = {
  age: 'Fifth Age',
  description: 'Rescue the wizard Merlin from a crystal prison in Camelot, trapped there by the dark witch Morgan Le Faye.',
  difficulty: QuestDifficulty.Intermediate,
  id: 69,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Merlin's Crystal",
  questPoints: 6,
  recommendations: [],
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
    questPoints: 6,
    unlocks: [],
  },
  series: 'Camelot',
  shortName: 'merlinsCrystal',

  startLocation: 'King Arthur, Camelot',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Merlin%27s_Crystal',
};

export default MerlinsCrystal;
