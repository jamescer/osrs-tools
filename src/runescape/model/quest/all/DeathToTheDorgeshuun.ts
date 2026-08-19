import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeathToTheDorgeshuun: Quest = {
  age: 'Fifth Age',
  description: 'Accompany Zanik into the surface world and protect her as she explores Lumbridge, while investigating a HAM plot.',

  difficulty: QuestDifficulty.Intermediate,

  id: 24,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Death to the Dorgeshuun',
  // Quests: The Lost Tribe. Skills: Agility 23, Thieving 23
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('The Lost Tribe'),
    new QuestRequirement('Rune Mysteries'),
    new LevelRequirement(Skill.Agility, 23, true),
    new LevelRequirement(Skill.Thieving, 23, true),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 2000, skill: Skill.Ranged },
      { amount: 2000, skill: Skill.Thieving },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Dorgeshuun',
  shortName: 'deathToTheDorgeshuun',

  startLocation: 'Mistag, Dorgesh-Kaan mine',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun',
};

export default DeathToTheDorgeshuun;
