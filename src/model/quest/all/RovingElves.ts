import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RovingElves: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Roving Elves',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new QuestRequirement('Regicide'), new QuestRequirement('Waterfall Quest')],
  recommendedSkills: {},
  series: 'Elf',
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
  startLocation: '',

  shortName: 'rovingElves',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Roving_Elves',
};

export default RovingElves;
