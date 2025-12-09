import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const AnotherSliceOfHAM: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Another Slice of H.A.M.',
  // Quests: Death to the Dorgeshuun, The Giant Dwarf, The Dig Site, Druidic Ritual. Skills: Attack 15, Prayer 25
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [
      { amount: 3000, skill: 'Mining' },
      { amount: 3000, skill: 'Prayer' },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Dorgeshuun (#4)',
  shortName: 'anotherSliceOfHAM',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M.',
};

export default AnotherSliceOfHAM;
