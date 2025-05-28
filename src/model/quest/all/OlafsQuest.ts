import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const OlafsQuest: Quest = {
  id: 0,
  name: "Olaf's Quest",
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new QuestRequirement('The Fremennik Trials'),
    new LevelRequirement('Firemaking', 40, false),
    new LevelRequirement('Woodcutting', 50, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'olafsQuest',
  url: 'https://oldschool.runescape.wiki/w/Olaf%27s_Quest',
  series: 'Fremennik',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Woodcutting, amount: 12000 }
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default OlafsQuest;
