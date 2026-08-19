import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ChildrenOfTheSun: Quest = {
  age: 'Fifth Age',
  description: 'Sail to a new land and encounter a mysterious civilisation that worships the sun, uncovering their ancient secrets.',
  difficulty: QuestDifficulty.Novice,
  id: 1037,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: false,
  name: 'Children of the Sun',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: 'Twilight Emissaries',
  shortName: 'childrenOfTheSun',
  startLocation: 'Port Aldarin, Varlamore',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Children_of_the_Sun',
};

export default ChildrenOfTheSun;
