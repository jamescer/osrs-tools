import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Icthlarin's Little Helper is a quest in Old School RuneScape that involves assisting the god Icthlarin with various tasks. The quest is set in the desert and requires players to complete a series of challenges to earn rewards and progress through the storyline.
 */
const IcthlarinsLittleHelper: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 58,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "Icthlarin's Little Helper",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [
      { amount: 4000, skill: Skill.Agility },
      { amount: 4500, skill: Skill.Thieving },
      { amount: 4000, skill: Skill.Woodcutting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Desert',
  shortName: 'icthlarinsLittleHelper',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper',
};

export default IcthlarinsLittleHelper;
