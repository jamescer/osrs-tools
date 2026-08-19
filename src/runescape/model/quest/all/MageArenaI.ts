import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MageArenaI: Quest = {
  age: 'Fifth Age',
  description:
    'Prove your magical prowess in the Mage Arena deep in the Wilderness to earn a God Cape.',
  difficulty: QuestDifficulty.Experienced,
  id: 215,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: 'Mage Arena I',
  questPoints: 0,
  recommendations: [
    { name: 'Runes for chosen God spell', type: 'item' },
    { name: 'Food', type: 'item', note: 'Deep Wilderness — bring nothing you cannot afford to lose' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Magic, 60, false),
  ],
  rewards: {
    areas: ['Mage Arena'],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'God Cape (Saradomin, Zamorak, or Guthix) — one of the best in-slot magic capes', url: 'https://oldschool.runescape.wiki/w/God_cape' },
      { description: 'Access to one of three God spells (Saradomin Strike, Flames of Zamorak, Claws of Guthix)' },
    ],
  },
  series: null,
  shortName: 'mageArenaI',
  startLocation: 'Speak to Kolodion in the Mage Arena bank (level 56 Wilderness)',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Mage_Arena_I',
};

export default MageArenaI;
