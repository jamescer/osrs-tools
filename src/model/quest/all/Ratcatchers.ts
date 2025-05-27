import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const Ratcatchers: Quest = {
  id: 0,
  name: 'Ratcatchers',
  members: true,
  difficulty: 'Intermediate',
  length: 'Long',
  requirements: [
    new QuestRequirement("Gertrude's Cat"),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'ratcatchers',
  url: 'https://oldschool.runescape.wiki/w/Ratcatchers',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default Ratcatchers;
