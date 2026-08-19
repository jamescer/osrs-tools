import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ScorpionCatcher: Quest = {
  age: 'Fifth Age',
  description: 'Help the wizard Thormac recover his three scorpions, escaped from his tower and scattered across Gielinor.',
  difficulty: QuestDifficulty.Intermediate,
  id: 91,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Scorpion Catcher',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Prayer, 31, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'scorpionCatcher',

  startLocation: "Thormac, Sorcerer's Tower",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Scorpion_Catcher',
};

export default ScorpionCatcher;
