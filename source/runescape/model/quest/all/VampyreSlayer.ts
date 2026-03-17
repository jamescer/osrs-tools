import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const VampyreSlayer: Quest = {
  age: 'First Age',
  description: 'Help a citizen by slaying a vampire that has been terrorizing the area.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
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
    experience: [{ amount: 4825, skill: 'Attack' }],
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
  steps: [
    'Talk to the temple custodian in the St. Bride temple.',
    'Accept the task to slay the vampire.',
    'Venture to the Crypt and locate the vampire.',
    'Equip a wooden stake.',
    'Defeat the vampire using the stake and hammer.',
    'Return to the custodian to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Vampyre_Slayer',
};

export default VampyreSlayer;
