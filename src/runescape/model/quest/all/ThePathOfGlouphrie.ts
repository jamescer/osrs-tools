import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ThePathOfGlouphrie: Quest = {
  age: 'Fifth Age',
  description: 'Delve deeper into Glouphrie\'s sinister plans and uncover the full extent of his treachery against gnomekind.',
  
  difficulty: QuestDifficulty.Experienced,
  id: 1031,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Path of Glouphrie',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("The Eyes of Glouphrie"),
    new LevelRequirement(Skill.Agility, 45, false),
    new LevelRequirement(Skill.Ranged, 60, false),
    new LevelRequirement(Skill.Slayer, 56, false),
    new LevelRequirement(Skill.Strength, 60, false),
    new LevelRequirement(Skill.Thieving, 56, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Gnome',
  shortName: 'thePathOfGlouphrie',
  startLocation: 'Gnome Land',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Path_of_Glouphrie',
};
export default ThePathOfGlouphrie;
