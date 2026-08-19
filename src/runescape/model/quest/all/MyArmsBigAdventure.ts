import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MyArmsBigAdventure: Quest = {
  age: 'Fifth Age',
  description: 'Help My Arm the troll learn to farm by taking him on a series of increasingly dangerous farming expeditions.',
  difficulty: QuestDifficulty.Experienced,
  id: 74,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "My Arm's Big Adventure",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement("Eadgar's Ruse"), new LevelRequirement(Skill.Farming, 29, false)],
  rewards: {
    areas: [],
    experience: [{ amount: 10000, skill: Skill.Farming }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Troll',
  shortName: 'myArmsBigAdventure',

  startLocation: 'My Arm, Troll Stronghold',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure',
};

export default MyArmsBigAdventure;
