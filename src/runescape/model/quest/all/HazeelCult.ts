import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const HazeelCult: Quest = {
  age: 'Fifth Age',
  description: 'Choose sides in a conflict between the Hazeel cult and the Carnillean family — either help revive the demon Hazeel or stop the cultists.',
  difficulty: QuestDifficulty.Novice,
  id: 54,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Hazeel Cult',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 1500, skill: Skill.Thieving }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'hazeelCult',

  startLocation: 'Ceril Carnillean, Ardougne',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Hazeel_Cult',
};

export default HazeelCult;
