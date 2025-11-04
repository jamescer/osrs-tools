import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const AnotherSliceOfHAM: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Another Slice of H.A.M.',
  // Quests: Death to the Dorgeshuun, The Giant Dwarf, The Dig Site, Druidic Ritual. Skills: Attack 15, Prayer 25
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Dorgeshuun (#4)',
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
  startLocation: '',

  shortName: 'anotherSliceOfHAM',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M.',
};

export default AnotherSliceOfHAM;
