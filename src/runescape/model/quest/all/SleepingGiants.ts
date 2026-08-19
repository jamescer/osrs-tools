import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const SleepingGiants: Quest = {
  age: 'Fifth Age',
  description: 'Investigate a strange disturbance at the Giants Foundry and help awaken ancient sleeping giants from their slumber.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 1045,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: false,
  name: 'Sleeping Giants',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Smithing, 60, false),
    new LevelRequirement(Skill.Mining, 40, false),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'sleepingGiants',
  startLocation: "Giants' Foundry",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Sleeping_Giants',
};
export default SleepingGiants;
