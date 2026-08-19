import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Darkness of Hallowvale quest data
 * @author James Cerniglia
 * @see https://oldschool.runescape.wiki/w/Darkness_of_Hallowvale for quest details and requirements
 */
const DarknessOfHallowvale: Quest = {
  age: 'Fifth Age',
  description: 'Infiltrate Meiyerditch and work with the myreque to gather intelligence about Darkmeyer from within the vampyre city.',
  difficulty: QuestDifficulty.Experienced,
  id: 22,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  // Assign a unique ID if available
  name: 'Darkness of Hallowvale',
  // Quests: In Aid of the Myreque. Skills: Construction 5, Mining 20, Thieving 22, Agility 26, Crafting 32, Magic 33, Strength 40
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('In Aid of the Myreque'),
    new LevelRequirement(Skill.Construction, 5, true),
    new LevelRequirement(Skill.Mining, 20, false),
    new LevelRequirement(Skill.Thieving, 22, false),
    new LevelRequirement(Skill.Agility, 26, true),
    new LevelRequirement(Skill.Crafting, 32, false),
    new LevelRequirement(Skill.Magic, 33, true),
    new LevelRequirement(Skill.Strength, 40, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 7000, skill: Skill.Agility },
      { amount: 2000, skill: Skill.Construction },
      { amount: 6000, skill: Skill.Thieving },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Myreque',
  shortName: 'darknessOfHallowvale',

  startLocation: 'Veliaf Hurtz, basement of Burgh de Rott inn',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Darkness_of_Hallowvale',
};

export default DarknessOfHallowvale;
