import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const MakingFriendsWithMyArm: Quest = {
  age: 'Fifth Age',
  description: 'Help My Arm the troll build a rooftop farming patch on Death Plateau, navigating trolls and mountain dangers.',
  difficulty: QuestDifficulty.Master,
  id: 1042,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Making Friends with My Arm',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("My Arm's Big Adventure"),
    new QuestRequirement("Troll Stronghold"),
    new QuestRequirement("Death Plateau"),
    new LevelRequirement(Skill.Agility, 68, false),
    new LevelRequirement(Skill.Mining, 72, false),
    new LevelRequirement(Skill.Firemaking, 60, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Troll',
  shortName: 'makingFriendsWithMyArm',
  startLocation: 'Troll Land',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Making_Friends_with_My_Arm',
};
export default MakingFriendsWithMyArm;
