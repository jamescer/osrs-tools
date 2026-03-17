import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const EadgarsRuse: Quest = {
  age: 'Fifth Age',
  description: 'Help Eadgar, a druid in the Troll Stronghold, discover a cure for a troll curse.',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.MediumLong,
  members: true,
  miniquest: false,
  name: "Eadgar's Ruse",
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Herblore: 31, Agility: 44 },
  requirements: [
    new QuestRequirement('Druidic Ritual'),
    new QuestRequirement('Troll Stronghold'),
    new LevelRequirement('Herblore', 31, false),
    new LevelRequirement('Agility', 44, false),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 11000, skill: 'Herblore' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [
      {
        description: 'Ability to use Eadgar to make armour from draconic visages',
      },
    ],
  },
  series: 'Troll',
  shortName: 'eadgarsRuse',

  startLocation: 'Troll Stronghold, eastern room',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Troll Stronghold and speak to Eadgar.',
    'Eadgar tells you that trolls are cursed and destroying their land.',
    'Collect the required items: Eye of newt, bone marrow, and pyre logs.',
    'Create a nature rune to break the curse.',
    'Light a fire and burn the rune with the bone marrow.',
    'Return to Eadgar to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Eadgar%27s_Ruse',
};

export default EadgarsRuse;
