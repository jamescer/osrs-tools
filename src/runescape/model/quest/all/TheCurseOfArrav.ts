import { Skill } from '../../account/Skill';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheCurseOfArrav: Quest = {
  age: 'Fifth Age',
  description: 'Battle the curse that has affected Arrav through the ages.',
  difficulty: QuestDifficulty.Master,
  id: 170,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Curse of Arrav',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('While Guthix Sleeps'),
    new QuestRequirement('Defender of Varrock'),
    new LevelRequirement(Skill.Agility, 61, false),
    new LevelRequirement(Skill.Crafting, 63, false),
    new LevelRequirement(Skill.Magic, 64, false),
    new LevelRequirement(Skill.Mining, 64, false),
    new LevelRequirement(Skill.Smithing, 63, false),
    new LevelRequirement(Skill.Strength, 67, false),
    new LevelRequirement(Skill.Thieving, 64, false),
    new LevelRequirement(Skill.Woodcutting, 63, false),
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
  series: 'Mahjarrat',
  shortName: 'theCurseOfArrav',
  startLocation: 'Varrock Palace',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Curse_of_Arrav',
};

export default TheCurseOfArrav;
