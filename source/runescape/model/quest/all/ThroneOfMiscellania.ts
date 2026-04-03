import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ThroneOfMiscellania: Quest = {
  age: 'Fifth Age',
  description: 'A king has gone missing on the island of Miscellania. Investigate the disappearance, challenge for leadership, and restore order to the troubled kingdom.',
  difficulty: QuestDifficulty.Novice,
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
    Woodcutting: 45,
    Mining: 30,
    Fishing: 30,
  },
  requirements: [
    new QuestRequirement("Heroes' Quest"),
    new QuestRequirement('The Fremennik Trials'),
    new LevelRequirement('Woodcutting', 45, false),
    new LevelRequirement('Mining', 30, false),
    new LevelRequirement('Fishing', 30, false),
  ],
  rewards: {
    areas: ['Miscellania', 'Etceteria'],
    experience: [{ amount: 4000, skill: Skill.Woodcutting }],
    items: [{ name: 'Crown' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Access to royal privileges and kingdom management' },
      { description: 'Ability to manage island resources' },
      { description: 'Unlock Miscellania Palace management' },
    ],
  },
  series: null,
  shortName: 'throneOfMiscellania',

  startLocation: 'Miscellania palace, northwestern island, reached by ship from Rellekka',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Miscellania and speak with the island inhabitants about the missing king',
    'Investigate the throne room and surrounding areas for clues',
    'Collect evidence about the king disappearance (documents, testimonies)',
    'Challenge a rival claimant or complete trials to prove your worthiness for leadership',
    'Travel through island locations gathering resources and alliances',
    'Complete a final confrontation or challenge to claim the throne or restore the king',
    'Secure your position on the throne and establish new policies for the kingdom',
  ],
  url: 'https://oldschool.runescape.wiki/w/Throne_of_Miscellania',
};

export default ThroneOfMiscellania;
