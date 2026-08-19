import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MurderMystery: Quest = {
  age: 'Fifth Age',
  description: 'Solve the murder of Lord Sinclair in his mansion by gathering clues and identifying the culprit.',
  difficulty: QuestDifficulty.Intermediate,
  id: 73,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Murder Mystery',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 3325, skill: Skill.Magic }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: null,
  shortName: 'murderMystery',

  startLocation: 'Sinclair Mansion, north of Camelot',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Murder_Mystery',
};

export default MurderMystery;
