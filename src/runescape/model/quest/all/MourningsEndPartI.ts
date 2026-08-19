import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const MourningsEndPartI: Quest = {
  age: 'Fifth Age',
  description: 'Infiltrate the Mourners headquarters in West Ardougne to uncover the sinister secret behind their mysterious activities.',
  difficulty: QuestDifficulty.Master,
  id: 1020,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Mourning's End Part I",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Regicide"),
    new QuestRequirement("Roving Elves"),
    new LevelRequirement(Skill.Agility, 60, false),
    new LevelRequirement(Skill.Thieving, 50, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Elf',
  shortName: 'mourningsEndPartI',
  startLocation: 'Elf Land',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Mourning%27s_End_Part_I',
};
export default MourningsEndPartI;
