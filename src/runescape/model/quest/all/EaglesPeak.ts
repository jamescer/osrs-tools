import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EaglesPeak: Quest = {
  age: 'Fifth Age',
  description: 'Investigate the disappearance of a naturalist\'s ferret and uncover the eagles\' ancient tunnel network beneath Eagles\' Peak.',
  

  difficulty: QuestDifficulty.Intermediate,

  id: 36,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: "Eagles' Peak",
  // Skill: Hunter 27
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Hunter, 27, false),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 2500, skill: Skill.Hunter }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'eaglesPeak',

  startLocation: "Eagle's Peak area (Charlie at Ardougne Zoo)",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Eagles%27_Peak',
};

export default EaglesPeak;
