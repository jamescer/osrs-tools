import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const DaddysHome: Quest = {
  age: 'Fifth Age',
  description:
    'Help Yanni Salika renovate his home in Shilo Village as a gift for his returning father.',
  difficulty: QuestDifficulty.Novice,
  id: 204,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: true,
  name: "Daddy's Home",
  questPoints: 0,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 500, skill: Skill.Construction }],
    items: [{ name: 'Antique lamp', note: 'Grants 1,000 XP in any skill 30+' }],
    lamps: [{ amount: 1000, note: 'Any skill level 30 or above', skillRestriction: 'Any skill level 30+' }],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Player-owned house bedroom in Shilo Village' },
    ],
  },
  series: null,
  shortName: 'daddysHome',
  startLocation: 'Speak to Yanni Salika in Shilo Village',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Daddy%27s_Home',
};

export default DaddysHome;
