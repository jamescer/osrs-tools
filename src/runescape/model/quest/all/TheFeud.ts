import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TheFeud: Quest = {
  age: 'Fifth Age',
  description: 'Go undercover in Pollnivneach to mediate the violent feud between the Menaphite thugs and the Bandit gang.',
  difficulty: QuestDifficulty.Intermediate,
  id: 1028,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Feud',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Thieving, 30, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'theFeud',
  startLocation: 'Osamodas Castle',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Feud',
};
export default TheFeud;
