import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const SongOfTheElves: Quest = {
  id: 0,
  name: 'Song of the Elves',
  members: true,
  difficulty: QuestDifficulty.Grandmaster,
  length: QuestLength.VeryLong,
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
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'songOfTheElves',
  url: 'https://oldschool.runescape.wiki/w/Song_of_the_Elves',
  series: 'Elf',
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default SongOfTheElves;
