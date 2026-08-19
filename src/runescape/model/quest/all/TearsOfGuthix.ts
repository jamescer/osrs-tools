import { LevelRequirement , QuestPointRequirement, QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TearsOfGuthix: Quest = {
  age: 'Fifth Age',
  description: 'Seek out Juna the serpent deep within the Lumbridge Swamp Caves to collect Guthix\'s sacred tears and gain Slayer experience.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 1025,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: false,
  name: 'Tears of Guthix',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestPointRequirement(43),
    new QuestRequirement("Rune Mysteries"),
    new LevelRequirement(Skill.Crafting, 20, false),
    new LevelRequirement(Skill.Firemaking, 49, false),
    new LevelRequirement(Skill.Mining, 20, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'tearsOfGuthix',
  startLocation: 'Undercity',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tears_of_Guthix',
};
export default TearsOfGuthix;
