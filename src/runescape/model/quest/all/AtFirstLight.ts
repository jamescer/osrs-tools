import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const AtFirstLight: Quest = {
  age: 'Fifth Age',
  description: 'Venture to the Mountains of Fire and help the Phoenix Guard investigate a mysterious threat rising in the volcanic peaks of Varlamore.',
  difficulty: QuestDifficulty.Intermediate,
  id: 1035,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'At First Light',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Sleeping Giants'),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'atFirstLight',
  startLocation: 'Aldarin, Varlamore',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/At_First_Light',
};

export default AtFirstLight;
