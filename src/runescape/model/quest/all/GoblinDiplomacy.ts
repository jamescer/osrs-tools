import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const GoblinDiplomacy: Quest = {
  age: 'First Age',
  description: 'Help negotiate peace between feuding goblin generals.',
  difficulty: QuestDifficulty.Novice,
  id: 51,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Goblin Diplomacy',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Crafting: 5 },
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 200, skill: Skill.Crafting }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'goblinDiplomacy',

  startLocation: 'Goblin village, north of Falador',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the goblin village north of Falador.',
    'Talk to the goblin generals and learn about their conflict.',
    'Gather materials to craft peace items.',
    'Create the diplomatic gifts using your Crafting skills.',
    'Present the gifts to both generals.',
    'Help resolve the conflict between the goblins.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Goblin_Diplomacy',
};

export default GoblinDiplomacy;
