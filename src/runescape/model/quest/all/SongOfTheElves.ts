import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const SongOfTheElves: Quest = {
  age: 'Fifth Age',
  description: 'Unlock the gates of Prifddinas, the lost elven city, by breaking the curse placed upon it centuries ago.',
  difficulty: QuestDifficulty.Grandmaster,
  id: 100,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'Song of the Elves',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Mourning's End Part II"),
    new LevelRequirement(Skill.Agility, 70, false),
    new LevelRequirement(Skill.Construction, 70, false),
    new LevelRequirement(Skill.Farming, 70, false),
    new LevelRequirement(Skill.Herblore, 70, false),
    new LevelRequirement(Skill.Hunter, 70, false),
    new LevelRequirement(Skill.Mining, 70, false),
    new LevelRequirement(Skill.Smithing, 70, false),
    new LevelRequirement(Skill.Woodcutting, 70, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: 'Elf',
  shortName: 'songOfTheElves',

  startLocation: 'Eluned, Lletya',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Song_of_the_Elves',
};

export default SongOfTheElves;
