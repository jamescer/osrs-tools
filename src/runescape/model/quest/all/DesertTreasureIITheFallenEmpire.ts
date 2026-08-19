import { Skill } from '../../account/Skill';
import { QuestRequirement, LevelRequirement, QuestPointRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DesertTreasureIITheFallenEmpire: Quest = {
  age: 'Fifth Age',
  description: 'Find treasure in the fallen desert empire.',
  difficulty: QuestDifficulty.Grandmaster,
  id: 1015,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'Desert Treasure II - The Fallen Empire',
  questPoints: 5,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Desert Treasure I'),
    new QuestRequirement('Secrets of the North'),
    new QuestRequirement("Enakhra's Lament"),
    new QuestRequirement('Beneath Cursed Sands'),
    new QuestRequirement('Temple of the Eye'),
    new QuestRequirement('Into the Tombs'),
    new QuestPointRequirement(150),
    new LevelRequirement(Skill.Firemaking, 75, false),
    new LevelRequirement(Skill.Magic, 75, false),
    new LevelRequirement(Skill.Prayer, 70, false),
    new LevelRequirement(Skill.Thieving, 70, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 5, unlocks: [] },
  series: 'Mahjarrat',
  shortName: 'desertTreasureII',
  startLocation: 'Desert',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Desert_Treasure_II',
};
export default DesertTreasureIITheFallenEmpire;
