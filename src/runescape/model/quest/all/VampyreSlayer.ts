import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const VampyreSlayer: Quest = {
  age: 'Fifth Age',
  description: 'Help a citizen by slaying a vampire that has been terrorizing the area.',
  difficulty: QuestDifficulty.Novice,
  id: 131,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Vampyre Slayer',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 4825, skill: Skill.Attack }],
    items: [{ name: 'Stake' }, { name: 'Garlic' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: null,
  shortName: 'vampyreSlayer',

  startLocation: 'St. Bride temple, south of Morytania',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Vampyre_Slayer',
};

export default VampyreSlayer;
