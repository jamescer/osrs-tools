import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const InSearchOfKnowledge: Quest = {
  age: 'Fifth Age',
  description:
    'Assist Brother Aimeri in uncovering the mysteries that lie in the Forthos Dungeon.',
  difficulty: QuestDifficulty.Experienced,
  id: 212,
  length: QuestLength.Medium,
  members: true,
  miniquest: true,
  name: 'In Search of Knowledge',
  questPoints: 0,
  recommendations: [
    { name: 'Combat equipment', type: 'item', note: 'Combat level 45+ recommended' },
  ],
  recommendedPrayers: ['Protect from Magic'],
  recommendedSkills: { Combat: 45 },
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [{ amount: 10000, note: 'Lamp of Knowledge (10,000 XP in any skill level 40+)', skillRestriction: 'Any skill level 40+' }],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [],
  },
  series: 'Kourend',
  shortName: 'inSearchOfKnowledge',
  startLocation: 'Brother Aimeri, south-eastern end of Forthos Dungeon',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/In_Search_of_Knowledge',
};

export default InSearchOfKnowledge;
