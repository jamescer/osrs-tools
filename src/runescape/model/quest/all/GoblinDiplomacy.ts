import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const GoblinDiplomacy: Quest = {
  age: 'Fifth Age',
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
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Goblin_Diplomacy',
};

export default GoblinDiplomacy;
