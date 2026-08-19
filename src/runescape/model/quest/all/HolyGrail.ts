import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const attackRequirement = new LevelRequirement(Skill.Attack, 20, false);
const HolyGrail: Quest = {
  age: 'Fifth Age',
  description: 'Aid King Arthur and his knights in the sacred quest for the Holy Grail, guided by visions of Merlin.',
  difficulty: QuestDifficulty.Intermediate,
  id: 56,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Holy Grail',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [attackRequirement],
  rewards: {
    areas: [],
    experience: [
      { amount: 15300, skill: Skill.Defence },
      { amount: 11000, skill: Skill.Prayer },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: 'Camelot',
  shortName: 'holyGrail',

  startLocation: 'King Arthur, Camelot',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Holy_Grail',
};

export default HolyGrail;
