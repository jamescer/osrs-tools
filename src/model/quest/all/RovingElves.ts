import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const RovingElves: Quest = {
  id: 0,
  name: 'Roving Elves',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Regicide'),
    new QuestRequirement('Waterfall Quest'),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'rovingElves',
  url: 'https://oldschool.runescape.wiki/w/Roving_Elves',
  series: 'Elf',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default RovingElves;
