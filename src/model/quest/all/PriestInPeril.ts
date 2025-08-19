import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const PriestInPeril: Quest = {
  id: 0,
  name: 'Priest in Peril',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Medium,
  requirements: [new QuestRequirement('Rune Mysteries')],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'priestInPeril',
  url: 'https://oldschool.runescape.wiki/w/Priest_in_Peril',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default PriestInPeril;
