import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const LandOfTheGoblins: Quest = {
  age: 'Fifth Age',
  description: 'Help the goblins of Goblin Village discover their ancestral homeland beneath the sea by navigating goblin politics.',
  difficulty: QuestDifficulty.Experienced,
  id: 1041,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Land of the Goblins',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Goblin Diplomacy"),
    new QuestRequirement("Jungle Potion"),
    new LevelRequirement(Skill.Agility, 40, false),
    new LevelRequirement(Skill.Fishing, 40, false),
    new LevelRequirement(Skill.Herblore, 31, false),
    new LevelRequirement(Skill.Thieving, 40, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Dorgeshuun',
  shortName: 'landOfTheGoblins',
  startLocation: 'Goblin Camp',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Land_of_the_Goblins',
};
export default LandOfTheGoblins;
