import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const MerlinsCrystal: Quest = {
  id: 0,
  name: "Merlin's Crystal",
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Medium,
  requirements: [],
  questPoints: 6,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'merlinsCrystal',
  url: 'https://oldschool.runescape.wiki/w/Merlin%27s_Crystal',
  series: 'Camelot (#1)',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 6,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default MerlinsCrystal;
