import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const OlafsQuest: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Olaf's Quest",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('The Fremennik Trials'),
    new LevelRequirement('Firemaking', 40, false),
    new LevelRequirement('Woodcutting', 50, false),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 12000, skill: Skill.Woodcutting }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Fremennik',
  shortName: 'olafsQuest',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Olaf%27s_Quest',
};

export default OlafsQuest;
