import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const HopespearsWill: Quest = {
  age: 'Fifth Age',
  description:
    "Assist Hopespear, a goblin spirit, in returning the remains of the goblin high priests to Yu'biusk, the ancestral goblin homeland.",
  difficulty: QuestDifficulty.Master,
  id: 211,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: "Hopespear's Will",
  questPoints: 0,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('The Restless Ghost'),
    new QuestRequirement('Desert Treasure I'),
    new QuestRequirement('Fairytale II - Cure a Queen'),
    new QuestRequirement('Land of the Goblins'),
    new LevelRequirement(Skill.Prayer, 50, false),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 7000, skill: Skill.Prayer }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [],
  },
  series: 'Goblin',
  shortName: 'hopespearsWill',
  startLocation: 'Hopespear, crypt of the Goblin Temple',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Hopespear%27s_Will',
};

export default HopespearsWill;
