import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TheEyesOfGlouphrie: Quest = {
  age: 'Fifth Age',
  description: 'Investigate the gnome illusionist Glouphrie\'s sinister deceptions hiding a dark secret within the Tree Gnome Village.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 1027,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Eyes of Glouphrie',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("The Grand Tree"),
    new LevelRequirement(Skill.Agility, 45, false),
    new LevelRequirement(Skill.Construction, 5, false),
    new LevelRequirement(Skill.Thieving, 5, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Gnome',
  shortName: 'theEyesOfGlouphrie',
  startLocation: 'Gnome Land',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Eyes_of_Glouphrie',
};
export default TheEyesOfGlouphrie;
