import { Skill } from '../../account/Skill';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeviousMinds: Quest = {
  age: 'Fifth Age',
  description: 'Help a suspicious monk near the Paterdomus temple craft a special item — only to discover a sinister ulterior motive.',

  difficulty: QuestDifficulty.Novice,

  id: 27,

  length: QuestLength.Short,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Devious Minds',
  // Quests: Wanted!, Troll Stronghold, Doric's Quest, Enter the Abyss. Skills: Smithing 65, Runecraft 50, Fletching 50
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Monk's Friend"),
    new QuestRequirement('Wanted!'),
    new LevelRequirement(Skill.Fletching, 50, false),
    new LevelRequirement(Skill.Runecraft, 65, false),
    new LevelRequirement(Skill.Smithing, 50, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 5000, skill: Skill.Fletching },
      { amount: 5000, skill: Skill.Runecraft },
      { amount: 6500, skill: Skill.Smithing },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Mahjarrat',
  shortName: 'deviousMinds',

  startLocation: 'Monk of Entrana, Port Sarim',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Devious_Minds',
};

export default DeviousMinds;
