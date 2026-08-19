import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const FairytaleIGrowingPains: Quest = {
  age: 'Fifth Age',
  description: 'Help Martin the Master Gardener investigate a blight killing the crops in Zanaris, tracing it back to the fairy godfather.',

  difficulty: QuestDifficulty.Novice,

  id: 41,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Fairytale I - Growing Pains',
  // Quests: Lost City, Nature Spirit. Skills: Attack 2000, Farming 3500, Magic 1000
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Druidic Ritual"),
    new QuestRequirement("Lost City"),
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
  shortName: 'fairytaleIGrowingPains',

  startLocation: 'Martin the Master Gardener, Draynor Village',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains',
};

export default FairytaleIGrowingPains;
