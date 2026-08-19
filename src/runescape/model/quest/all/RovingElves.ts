import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RovingElves: Quest = {
  age: 'Fifth Age',
  description: 'Help Islwyn and Eluned complete a task for the Elven Crystal and gain passage into the Elven Lands.',
  difficulty: QuestDifficulty.Intermediate,
  id: 88,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Roving Elves',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Regicide'),
    new QuestRequirement('Waterfall Quest'),
    new LevelRequirement(Skill.Agility, 56, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Elf',
  shortName: 'rovingElves',

  startLocation: 'Islwyn, Isafdar',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Roving_Elves',
};

export default RovingElves;
