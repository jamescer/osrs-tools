import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFinalDawn: Quest = {
  age: 'Fifth Age',
  description: `The fourth and final quest in the Twilight Emissaries series. The player looks to rescue Prince Itzla and discover Metzli's endgame for the Twilight Emissaries cult.`,
  difficulty: QuestDifficulty.Master,
  id: 1049,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'The Final Dawn',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Thieving, 66, false),
    new LevelRequirement(Skill.Runecraft, 52, false),
    new LevelRequirement(Skill.Fletching, 52, false),
    new QuestRequirement('The Heart of Darkness'),
    new QuestRequirement('Perilous Moons'),
  ],
  rewards: {
    areas: ['Crypt of Tonali', 'Doom of Mokhaiotl'],
    experience: [
      { amount: 55000, skill: Skill.Thieving },
      { amount: 25000, skill: Skill.Runecraft },
      { amount: 25000, skill: Skill.Fletching },
    ],
    items: [{ name: 'Arkan blade' }],
    lamps: [{ amount: 55000, note: 'Antique lamp - 55,000 XP in any combat skill of at least level 40, including Prayer', skillRestriction: 'Any combat skill level 40+, including Prayer' }],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [
      { description: 'Access to the Crypt of Tonali' },
      { description: 'Access to the Doom of Mokhaiotl' },
    ],
  },
  series: 'Twilight Emissaries',
  shortName: 'theFinalDawn',
  startLocation: 'Servius, Sunrise Palace',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Final_Dawn',
};

export default TheFinalDawn;
