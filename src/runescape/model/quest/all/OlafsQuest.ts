import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const OlafsQuest: Quest = {
  age: 'Fifth Age',
  description: 'Help an old viking named Olaf Hradson complete his father\'s final adventure aboard a beached longship.',
  difficulty: QuestDifficulty.Intermediate,
  id: 77,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: "Olaf's Quest",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('The Fremennik Trials'),
    new LevelRequirement(Skill.Firemaking, 40, true),
    new LevelRequirement(Skill.Woodcutting, 50, true),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 12000, skill: Skill.Defence }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to the Brine Rat Cavern' }],
  },
  series: 'Fremennik',
  shortName: 'olafsQuest',

  startLocation: 'Olaf Hradson, east of Rellekka',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Olaf%27s_Quest',
};

export default OlafsQuest;
