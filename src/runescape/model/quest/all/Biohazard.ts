import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const Biohazard: Quest = {
  age: 'Fifth Age',
  description: 'Follow up on the events of Plague City by smuggling plague samples out of West Ardougne for Elena.',

  difficulty: QuestDifficulty.Intermediate,

  id: 11,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Biohazard',
  questPoints: 3,
  recommendations: [
    {
      name: 'Food',
      note: 'Useful for travel and minor combat.',
      type: 'item',
    },
    {
      name: 'Energy potions',
      note: 'Useful for running between locations.',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Plague City"),
  ],
  rewards: {
    areas: ['East Ardougne'],
    experience: [{ amount: 1250, skill: Skill.Thieving }],
    items: [{ name: 'Access to East Ardougne' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [{ description: 'Ability to enter East Ardougne freely' }],
  },
  series: 'Elf',
  shortName: 'biohazard',
  startLocation: "Elena's house, East Ardougne",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Biohazard',
};

export default Biohazard;
