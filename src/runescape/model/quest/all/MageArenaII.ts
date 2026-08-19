import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MageArenaII: Quest = {
  age: 'Fifth Age',
  description:
    'Return to the Mage Arena to face three powerful champions of the gods and earn an imbued God Cape.',
  difficulty: QuestDifficulty.Master,
  id: 216,
  length: QuestLength.Medium,
  members: true,
  miniquest: true,
  name: 'Mage Arena II',
  questPoints: 0,
  recommendations: [
    { name: 'Best magic gear available', type: 'item' },
    { name: 'Runes for God spells', type: 'item', note: 'Lots — each boss kill requires a kill count' },
    { name: 'Food and potions', type: 'item', note: 'Deep Wilderness fights' },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Magic: 75 },
  requirements: [
    new QuestRequirement('Mage Arena I'),
    new LevelRequirement(Skill.Magic, 75, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Imbued God Cape — best in-slot magic cape (+2 Magic over normal God Cape)', url: 'https://oldschool.runescape.wiki/w/Imbued_god_cape' },
    ],
  },
  series: null,
  shortName: 'mageArenaII',
  startLocation: 'Speak to Kolodion in the Mage Arena bank (level 56 Wilderness)',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Mage_Arena_II',
};

export default MageArenaII;
