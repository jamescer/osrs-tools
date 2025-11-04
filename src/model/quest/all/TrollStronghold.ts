import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TrollStronghold: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Troll Stronghold',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new QuestRequirement('Death Plateau')],
  recommendedSkills: {},
  series: 'Troll',
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'trollStronghold',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Troll_Stronghold',
};

export default TrollStronghold;
