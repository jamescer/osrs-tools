import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const PerilousMoons: Quest = {
  age: 'Fifth Age',
  description: 'Navigate the dangerous lunar cycles of Cam Torum and help its inhabitants survive the periodic waves of magical creatures.',
  difficulty: QuestDifficulty.Master,
  id: 1022,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Perilous Moons',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Client of Kourend"),
    new LevelRequirement(Skill.Farming, 47, false),
    new LevelRequirement(Skill.Herblore, 49, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: null,
  shortName: 'perilousMoons',
  startLocation: 'Cam Torum, Zeah',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Perilous_Moons',
};
export default PerilousMoons;
