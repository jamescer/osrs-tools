import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const KingsRansom: Quest = {
  age: 'Fifth Age',
  description: 'Investigate the disappearance of the Camelot knights and unravel a conspiracy reaching to the heart of the kingdom.',
  difficulty: QuestDifficulty.Experienced,
  id: 63,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "King's Ransom",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Black Knights' Fortress"),
    new QuestRequirement('Holy Grail'),
    new QuestRequirement('Murder Mystery'),
    new QuestRequirement('One Small Favour'),
    new LevelRequirement(Skill.Magic, 45, false),
    new LevelRequirement(Skill.Defence, 65, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 33000, skill: Skill.Defence },
      { amount: 5000, skill: Skill.Magic },
    ],
    items: [],
    lamps: [{ amount: 5000, note: 'Antique lamp - 5,000 XP in any skill level 50+', skillRestriction: 'Any skill level 50+' }],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Access to the Knight Waves Training Grounds', url: 'https://oldschool.runescape.wiki/w/Knight_Waves_Training_Grounds' },
      { description: 'Ability to use Chivalry (60 Prayer) and Piety (70 Prayer) after completing Knight Waves Training Grounds' },
    ],
  },
  series: 'Camelot',
  shortName: 'kingsRansom',

  startLocation: 'Gossip, outside Sinclair Mansion',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/King%27s_Ransom',
};

export default KingsRansom;
