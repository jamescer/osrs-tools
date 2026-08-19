import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheLostTribe: Quest = {
  age: 'Fifth Age',
  description: 'Investigate a hole that has opened in the Lumbridge Castle cellar and make peace with the tribe living below.',
  difficulty: QuestDifficulty.Novice,
  id: 117,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Lost Tribe',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Rune Mysteries'), new QuestRequirement('Goblin Diplomacy')],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'theLostTribe',

  startLocation: 'Duke Horacio, Lumbridge Castle',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Lost_Tribe',
};

export default TheLostTribe;
