import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const AnotherSliceOfHAM: Quest = {
  age: 'Fifth Age',
  description: 'Investigate HAM activity in the Dorgeshuun tunnels and prevent a plot to reignite the human-goblin conflict.',

  difficulty: QuestDifficulty.Intermediate,

  id: 2,

  length: QuestLength.Short,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Another Slice of H.A.M.',
  // Quests: Death to the Dorgeshuun, The Giant Dwarf, The Dig Site, Druidic Ritual. Skills: Attack 15, Prayer 25
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Death to the Dorgeshuun'),
    new QuestRequirement('The Giant Dwarf'),
    new QuestRequirement('The Dig Site'),
    new LevelRequirement(Skill.Attack, 15, false),
    new LevelRequirement(Skill.Prayer, 25, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 3000, skill: Skill.Mining },
      { amount: 3000, skill: Skill.Prayer },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Dorgeshuun',
  shortName: 'anotherSliceOfHAM',

  startLocation: 'Ur-tag, Dorgesh-Kaan',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M.',
};

export default AnotherSliceOfHAM;
