import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const RecruitmentDrive: Quest = {
  id: 0,
  name: 'Recruitment Drive',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [new QuestRequirement('Druidic Ritual'), new QuestRequirement('The Lost Tribe')],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'recruitmentDrive',
  url: 'https://oldschool.runescape.wiki/w/Recruitment_Drive',
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

export default RecruitmentDrive;
