import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const SinsOfTheFather: Quest = {
  age: 'Fifth Age',
  description: 'Confront the twisted dragonkin and end the Vyrewatch lord Damien Leucurte\'s reign of terror over Morytania.',
  
  difficulty: QuestDifficulty.Master,
  id: 1044,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Sins of the Father',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("A Taste of Hope"),
    new LevelRequirement(Skill.Agility, 62, false),
    new LevelRequirement(Skill.Attack, 60, false),
    new LevelRequirement(Skill.Crafting, 56, false),
    new LevelRequirement(Skill.Magic, 60, false),
    new LevelRequirement(Skill.Slayer, 62, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: 'Myreque',
  shortName: 'sinsOfTheFather',
  startLocation: 'Darkmeyer',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Sins_of_the_Father',
};
export default SinsOfTheFather;
