import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LunarDiplomacy: Quest = {
  age: 'Fifth Age',
  description: 'Broker peace between the Fremennik and the Moon Clan of Lunar Isle, unlocking the Lunar spellbook.',
  difficulty: QuestDifficulty.Experienced,
  id: 66,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Lunar Diplomacy',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('The Fremennik Trials'),
    new QuestRequirement('Lost City'),
    new QuestRequirement('Rune Mysteries'),
    new QuestRequirement('Shilo Village'),
    new LevelRequirement(Skill.Crafting, 61, false),
    new LevelRequirement(Skill.Defence, 40, false),
    new LevelRequirement(Skill.Firemaking, 49, false),
    new LevelRequirement(Skill.Herblore, 5, false),
    new LevelRequirement(Skill.Magic, 65, false),
    new LevelRequirement(Skill.Mining, 60, false),
    new LevelRequirement(Skill.Woodcutting, 55, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 5000, skill: Skill.Magic },
      { amount: 5000, skill: Skill.Runecraft },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Access to the Lunar spellbook' },
    ],
  },
  series: 'Fremennik',
  shortName: 'lunarDiplomacy',

  startLocation: 'Lokar Searunner, Rellekka docks',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Lunar_Diplomacy',
};

export default LunarDiplomacy;
