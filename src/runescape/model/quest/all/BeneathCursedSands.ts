import { QuestRequirement, QuestPointRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const BeneathCursedSands: Quest = {
  age: 'Fifth Age',
  description: 'Journey to the buried tombs beneath the Kharidian Desert and uncover an ancient secret buried for centuries.',
  difficulty: QuestDifficulty.Master,
  id: 1036,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Beneath Cursed Sands',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Dream Mentor'),
    new QuestRequirement('Client of Kourend'),
    new QuestPointRequirement(35),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Kharidian',
  shortName: 'beneathCursedSands',
  startLocation: 'Desert',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Beneath_Cursed_Sands',
};
export default BeneathCursedSands;
