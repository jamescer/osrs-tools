import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFremennikIsles: Quest = {
  age: 'Fifth Age',
  description: 'Broker peace between the Fremennik and the Icefiends of Neitiznot and Jatizso.',
  difficulty: QuestDifficulty.Intermediate,
  id: 109,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Fremennik Isles',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Construction, 20, false),
    new LevelRequirement(Skill.Agility, 40, false),
    new LevelRequirement(Skill.Woodcutting, 56, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: 'Fremennik',
  shortName: 'theFremennikIsles',

  startLocation: 'Mord Gunnars, Rellekka',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Isles',
};

export default TheFremennikIsles;
