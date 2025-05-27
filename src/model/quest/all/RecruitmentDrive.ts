import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const RecruitmentDrive: Quest = {
  id: 0,
  name: 'Recruitment Drive',
  members: true,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [
    new QuestRequirement('Druidic Ritual'),
    new QuestRequirement('The Lost Tribe'),
  ],
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
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
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
