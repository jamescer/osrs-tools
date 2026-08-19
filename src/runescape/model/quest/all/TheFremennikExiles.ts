import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFremennikExiles: Quest = {
  age: 'Fifth Age',
  description: 'Uncover a plot to disgrace the Fremennik people and bring justice to those who framed an innocent man.',
  difficulty: QuestDifficulty.Master,
  id: 108,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'The Fremennik Exiles',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('The Fremennik Isles'),
    new LevelRequirement(Skill.Crafting, 25, false),
    new LevelRequirement(Skill.Runecraft, 40, false),
    new LevelRequirement(Skill.Slayer, 40, false),
    new LevelRequirement(Skill.Smithing, 30, false),
    new LevelRequirement(Skill.Defence, 60, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: 'Fremennik',
  shortName: 'theFremennikExiles',

  startLocation: 'Brundt the Chieftain, Rellekka',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Exiles',
};

export default TheFremennikExiles;
