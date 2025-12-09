import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const SongOfTheElves: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Grandmaster,
  id: 0,
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
    new LevelRequirement('Agility', 70, false),
    new LevelRequirement('Construction', 70, false),
    new LevelRequirement('Farming', 70, false),
    new LevelRequirement('Herblore', 70, false),
    new LevelRequirement('Hunter', 70, false),
    new LevelRequirement('Mining', 70, false),
    new LevelRequirement('Smithing', 70, false),
    new LevelRequirement('Woodcutting', 70, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Elf',
  shortName: 'songOfTheElves',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Song_of_the_Elves',
};

export default SongOfTheElves;
