import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TheDigSite: Quest = {
  age: 'Fifth Age',
  description: 'Assist the Varrock Museum archaeologists at their dig site east of Varrock to uncover ancient Zarosian artefacts.',
  difficulty: QuestDifficulty.Intermediate,
  id: 1026,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Dig Site',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Druidic Ritual"),
    new LevelRequirement(Skill.Agility, 10, false),
    new LevelRequirement(Skill.Herblore, 10, false),
    new LevelRequirement(Skill.Thieving, 25, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Mahjarrat',
  shortName: 'theDigSite',
  startLocation: 'Dig Site',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Dig_Site',
};
export default TheDigSite;
