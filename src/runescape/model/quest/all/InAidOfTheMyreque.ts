import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const InAidOfTheMyreque: Quest = {
  age: 'Fifth Age',
  description: 'Help the Myreque resistance in Burgh de Rott survive the vampyre threat and establish a vital base of operations.',
  difficulty: QuestDifficulty.Intermediate,
  id: 60,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'In Aid of the Myreque',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('In Search of the Myreque'),
    new LevelRequirement(Skill.Agility, 25, true),
    new LevelRequirement(Skill.Crafting, 25, false),
    new LevelRequirement(Skill.Mining, 15, false),
    new LevelRequirement(Skill.Magic, 7, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 2000, skill: Skill.Attack },
      { amount: 2000, skill: Skill.Crafting },
      { amount: 2000, skill: Skill.Defence },
      { amount: 2000, skill: Skill.Strength },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Access to Burgh de Rott bank' },
      { description: 'Access to Temple Trekking minigame' },
    ],
  },
  series: 'Myreque',
  shortName: 'inAidOfTheMyreque',

  startLocation: 'Veliaf Hurtz, Myreque Hideout, below Canifis pub',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque',
};

export default InAidOfTheMyreque;
