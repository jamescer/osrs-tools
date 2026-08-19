import { Skill } from '../../account/Skill';
import { QuestRequirement , LevelRequirement} from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const GhostsAhoy: Quest = {
  age: 'Fifth Age',
  description: 'Lay to rest the tormented ghosts of Ecto Island, still bound to the ruins of Port Phasmatys.',
  difficulty: QuestDifficulty.Intermediate,
  id: 50,
  length: QuestLength.MediumLong,
  members: true,
  miniquest: false,
  name: 'Ghosts Ahoy',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Priest in Peril"),
    new LevelRequirement(Skill.Agility, 25, false),
    new LevelRequirement(Skill.Cooking, 20, false),
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
  shortName: 'ghostsAhoy',

  startLocation: 'Velorina, Port Phasmatys',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Ghosts_Ahoy',
};

export default GhostsAhoy;
