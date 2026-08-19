import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheHandInTheSand: Quest = {
  age: 'Fifth Age',
  description: "Investigate the mystery of a severed hand found in Bert's sandpit at Yanille and expose the conspiracy behind it.",
  difficulty: QuestDifficulty.Intermediate,
  id: 115,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Hand in the Sand',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Thieving, 17, false),
    new LevelRequirement(Skill.Crafting, 49, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 1000, skill: Skill.Thieving },
      { amount: 9000, skill: Skill.Crafting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Ability to collect 84 buckets of sand from Bert daily' },
      { description: 'Access to the Wizards\' Guild rune store' },
      { description: 'Ability to buy pink dye from Betty' },
    ],
  },
  series: null,
  shortName: 'theHandInTheSand',
  startLocation: 'Bert, Yanille, near the sand pit',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Hand_in_the_Sand',
};

export default TheHandInTheSand;
