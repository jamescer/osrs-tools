import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MonksFriend: Quest = {
  age: 'Fifth Age',
  description: 'Help the monks of Ardougne monastery find their missing child oblate, who has gone to hide in the woods.',
  difficulty: QuestDifficulty.Novice,
  id: 72,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: "Monk's Friend",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 2000, skill: Skill.Woodcutting }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'monksFriend',

  startLocation: 'Brother Omad, Monastery south of Ardougne',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Monk%27s_Friend',
};

export default MonksFriend;
