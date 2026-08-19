import { Skill } from '../../account/Skill';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const SecretsOfTheNorth: Quest = {
  age: 'Fifth Age',
  description: 'Investigate a brutal murder in the frozen north and uncover a conspiracy that could shake the foundations of Gielinor.',
  difficulty: QuestDifficulty.Master,
  id: 1043,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Secrets of the North',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Desert Treasure I'),
    new QuestRequirement('A Kingdom Divided'),
    new LevelRequirement(Skill.Agility, 56, false),
    new LevelRequirement(Skill.Magic, 62, false),
    new LevelRequirement(Skill.Mining, 52, false),
    new LevelRequirement(Skill.Runecraft, 49, false),
    new LevelRequirement(Skill.Thieving, 56, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Mahjarrat',
  shortName: 'secretsOfTheNorth',
  startLocation: 'North',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Secrets_of_the_North',
};
export default SecretsOfTheNorth;
