import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const FairytaleIICureAQueen: Quest = {
  age: 'Fifth Age',
  description: 'Travel through the fairy rings to cure the Fairy Queen and uncover the Fairy Godfather\'s treacherous scheme.',

  difficulty: QuestDifficulty.Intermediate,

  id: 42,

  length: QuestLength.ShortMedium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Fairytale II - Cure a Queen',
  // Quests: Fairytale I - Growing Pains. Skills: Thieving 40, Farming 49, Herblore 57
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Fairytale I - Growing Pains"),
    new LevelRequirement(Skill.Farming, 49, false),
    new LevelRequirement(Skill.Herblore, 57, false),
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
  series: 'Fairy Tale',
  shortName: 'fairytaleIICureAQueen',

  startLocation: 'Fairy Godfather, Zanaris',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fairytale_II_-_Cure_a_Queen',
};

export default FairytaleIICureAQueen;
