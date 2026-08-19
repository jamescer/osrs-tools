import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DefenderOfVarrock: Quest = {
  age: 'Fifth Age',
  description: 'Help defend the city of Varrock from a zombie army raised by the Zamorakian Mahjarrat Zemouregal.',
  difficulty: QuestDifficulty.Experienced,
  id: 1039,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Defender of Varrock',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Shield of Arrav"),
    new QuestRequirement("Demon Slayer"),
    new QuestRequirement("Dragon Slayer I"),
    new QuestRequirement("Ernest the Chicken"),
    new QuestRequirement("Romeo & Juliet"),
    new LevelRequirement(Skill.Mining, 40, false),
    new LevelRequirement(Skill.Smithing, 40, false),
    new LevelRequirement(Skill.Magic, 42, false),
    new LevelRequirement(Skill.Prayer, 20, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Mahjarrat',
  shortName: 'defenderOfVarrock',
  startLocation: 'Varrock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Defender_of_Varrock',
};
export default DefenderOfVarrock;
