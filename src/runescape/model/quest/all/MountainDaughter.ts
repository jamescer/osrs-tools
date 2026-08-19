import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const MountainDaughter: Quest = {
  age: 'Fifth Age',
  description: 'Help a mountain tribe chieftain reconcile with his estranged daughter by fulfilling an ancient ritual to appease the lake spirits.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 139,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Mountain Daughter',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Barbarian Training'),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: null,
  shortName: 'mountainDaughter',
  startLocation: 'Mountain',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Mountain_Daughter',
};
export default MountainDaughter;
