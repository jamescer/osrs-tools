import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ValeTotems: Quest = {
  age: 'Fifth Age',
  description:
    'Restore the ancient totems in the Elven Vale to unlock a new teleport destination within Tirannwn.',
  difficulty: QuestDifficulty.Intermediate,
  id: 218,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: 'Vale Totems',
  questPoints: 0,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Song of the Elves'),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'New teleport location in Tirannwn (Elven Vale)' },
    ],
  },
  series: 'Elf',
  shortName: 'valeTotems',
  startLocation: 'The Elven Vale in Tirannwn',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Vale_Totems',
};

export default ValeTotems;
