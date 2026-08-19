import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TempleOfTheEye: Quest = {
  age: 'Fifth Age',
  description: 'Help the Wizards Tower investigate a mysterious eye-shaped ruin and establish a link to a powerful new runecrafting altar.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 1047,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Temple of the Eye',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Rune Mysteries"),
    new QuestRequirement("Enter the Abyss"),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: 'Order of Wizards',
  shortName: 'templeOfTheEye',
  startLocation: 'Temple',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Temple_of_the_Eye',
};
export default TempleOfTheEye;
