import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ANightAtTheTheatre: Quest = {
  age: 'Fifth Age',
  description:
    'Survive a second run through the Theatre of Blood for unique rewards, fighting all six bosses in sequence.',
  difficulty: QuestDifficulty.Master,
  id: 1034,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'A Night at the Theatre',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('A Theatre of Blood')],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: null,
  shortName: 'aNightAtTheTheatre',
  startLocation: 'Theatre',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Night_at_the_Theatre',
};
export default ANightAtTheTheatre;
