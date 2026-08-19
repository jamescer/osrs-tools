import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TwilightsPromise: Quest = {
  age: 'Fifth Age',
  description: "Fulfill an ancient promise made at twilight by resolving a long-standing conflict between two forgotten peoples at sea.",
  difficulty: QuestDifficulty.Intermediate,
  id: 1048,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: "Twilight's Promise",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Children of the Sun'),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: 'Twilight Emissaries',
  shortName: 'twilightsPromise',
  startLocation: 'Port Aldarin, Varlamore',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Twilight%27s_Promise',
};

export default TwilightsPromise;
