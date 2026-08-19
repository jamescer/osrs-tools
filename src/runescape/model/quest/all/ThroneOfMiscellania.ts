import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ThroneOfMiscellania: Quest = {
  age: 'Fifth Age',
  description:
    'A king has gone missing on the island of Miscellania. Investigate the disappearance, challenge for leadership, and restore order to the troubled kingdom.',
  difficulty: QuestDifficulty.Experienced,
  id: 123,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Throne of Miscellania',
  questPoints: 1,
  recommendations: [
    { name: 'Boat ticket to Miscellania', type: 'item' },
    { name: 'Combat equipment', note: 'For potential conflicts', type: 'item' },
    { name: 'Food', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {
    Fishing: 30,
    Mining: 30,
    Woodcutting: 45,
  },
  requirements: [
    new QuestRequirement("Heroes' Quest"),
    new QuestRequirement('The Fremennik Trials'),
  ],
  rewards: {
    areas: ['Miscellania', 'Etceteria'],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Access to Managing Miscellania' },
      { description: 'Ability to teleport to Miscellania using a ring of wealth' },
    ],
  },
  series: 'Miscellania',
  shortName: 'throneOfMiscellania',

  startLocation: 'King Vargas, Miscellania Castle',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Throne_of_Miscellania',
};

export default ThroneOfMiscellania;
