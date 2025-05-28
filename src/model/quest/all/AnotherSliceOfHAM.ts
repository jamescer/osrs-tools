import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const AnotherSliceOfHAM: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Another Slice of H.A.M.",
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [], // Quests: Death to the Dorgeshuun, The Giant Dwarf, The Dig Site, Druidic Ritual. Skills: Attack 15, Prayer 25
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "anotherSliceOfHAM",
  url: 'https://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M.',
  series: 'Dorgeshuun (#4)',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Mining', amount: 3000 },
      { skill: 'Prayer', amount: 3000 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default AnotherSliceOfHAM;
