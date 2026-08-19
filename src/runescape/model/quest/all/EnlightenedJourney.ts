import { LevelRequirement , QuestPointRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EnlightenedJourney: Quest = {
  age: 'Fifth Age',
  description: 'Learn the art of balloon travel from Auguste in Entrana and set up balloon routes across Gielinor.',

  difficulty: QuestDifficulty.Intermediate,

  id: 40,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Enlightened Journey',
  // Skills: quest 20, Firemaking 20, Farming 30, Crafting 36
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestPointRequirement(20),
    new LevelRequirement(Skill.Farming, 30, false),
    new LevelRequirement(Skill.Firemaking, 20, false),
    new LevelRequirement(Skill.Crafting, 36, false),
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
  series: null,
  shortName: 'enlightenedJourney',

  startLocation: 'Auguste, Entrana',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Enlightened_Journey',
};

export default EnlightenedJourney;
