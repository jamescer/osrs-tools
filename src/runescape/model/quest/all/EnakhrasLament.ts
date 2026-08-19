import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EnakhrasLament: Quest = {
  age: 'Fifth Age',
  description: 'Enakhra, a Mahjarrat follower of Zamorak, seeks to release her trapped companion Akthanakos from an ancient pyramid.',

  difficulty: QuestDifficulty.Intermediate,

  id: 39,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: "Enakhra's Lament",
  // Skills: Crafting 50, Firemaking 45, Prayer 43, Magic 39, Mining 45
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Crafting, 50, false),
    new LevelRequirement(Skill.Firemaking, 45, false),
    new LevelRequirement(Skill.Magic, 39, false),
    new LevelRequirement(Skill.Prayer, 43, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Mahjarrat',
  shortName: 'enakhrasLament',

  startLocation: 'Lazim, south-west of Nardah',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Enakhra%27s_Lament',
};

export default EnakhrasLament;
