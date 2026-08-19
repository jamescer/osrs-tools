import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Troubled_Tortugans
 */
const TroubledTortugans: Quest = {
  age: 'Fifth Age',
  description: 'Help the tortugan pirates of The Pandemonium recover their buried plunder.',
  difficulty: QuestDifficulty.Experienced,
  id: 129,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Troubled Tortugans',
  questPoints: 2,
  recommendations: [
    {
      name: 'At least 4 free inventory spaces (or up to 22 for all the construction materials at once)',
      type: 'item',
    },
    { name: 'Combat', quantity: 60, type: 'level' },
    { name: 'Food and combat gear', type: 'item' },
    { name: 'Stamina Potion', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Pandemonium'),
    new LevelRequirement(Skill.Construction, 48, false),
    new LevelRequirement(Skill.Sailing, 45, false),
    new LevelRequirement(Skill.Hunter, 45, false),
    new LevelRequirement(Skill.Woodcutting, 40, false),
    new LevelRequirement(Skill.Crafting, 34, false),
    new LevelRequirement(Skill.Slayer, 51, false),
  ],
  rewards: {
    areas: ['Access to the Great Conch'],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [{ description: 'Great Conch' }],
  },
  series: 'Tortugan',
  shortName: 'troubledTortugans',
  startLocation: 'Talk to Floopa, an Injured Tortugan, on a Remote Island in the Unquiet Ocean.',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Troubled_Tortugans',
};

export default TroubledTortugans;
