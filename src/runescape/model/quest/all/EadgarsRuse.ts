import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const EadgarsRuse: Quest = {
  age: 'Fifth Age',
  description: 'Help Eadgar, a druid in the Troll Stronghold, discover a cure for a troll curse.',
  difficulty: QuestDifficulty.Intermediate,
  id: 35,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Eadgar's Ruse",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Agility: 44 },
  requirements: [
    new QuestRequirement('Druidic Ritual'),
    new QuestRequirement('Troll Stronghold'),
    new LevelRequirement(Skill.Herblore, 31, true),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 11000, skill: Skill.Herblore }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Ability to use Trollheim Teleport spell' },
      { description: 'Ability to grow and steal Goutweed, tradeable with Sanfew for herbs' },
      { description: 'Ability to redirect a Teleport to House tablet to Trollheim via Scroll of redirection' },
    ],
  },
  series: 'Troll',
  shortName: 'eadgarsRuse',

  startLocation: "Sanfew, Taverley herblore shop",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Eadgar%27s_Ruse',
};

export default EadgarsRuse;
