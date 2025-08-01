import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const Wanted: Quest = {
  id: 0,
  name: 'Wanted!',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Recruitment Drive'),
    new QuestRequirement('The Lost Tribe'),
    new QuestRequirement('Priest in Peril'),
    new QuestRequirement('Murder Mystery'),
    new QuestRequirement('Nature Spirit'),
    new QuestRequirement('Witchwood Icon'),
    new LevelRequirement('Slayer', 15, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'wanted',
  url: 'https://oldschool.runescape.wiki/w/Wanted!',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
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

export default Wanted;
