import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const GardenOfTranquillity: Quest = {
  age: 'Fifth Age',
  description: 'Help Queen Ellamaria restore the royal garden of Varrock to its former glory by collecting rare plants from across Gielinor.',
  difficulty: QuestDifficulty.Intermediate,
  id: 47,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'Garden of Tranquillity',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Priest in Peril"),
    new LevelRequirement(Skill.Farming, 25, false),
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
  shortName: 'gardenOfTranquillity',

  startLocation: 'Queen Ellamaria, Varrock Palace',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Garden_of_Tranquillity',
};

export default GardenOfTranquillity;
