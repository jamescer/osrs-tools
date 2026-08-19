import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MonkeyMadness: Quest = {
  age: 'Fifth Age',
  description: "Help King Narnode Shareen investigate what happened to his 10th Squad, sent to guard the gnomes' shipyard on Ape Atoll.",
  difficulty: QuestDifficulty.Intermediate,
  id: 70,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Monkey Madness I',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 60 },
  requirements: [
    new QuestRequirement('The Grand Tree'),
    new QuestRequirement('Tree Gnome Village'),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 35000, skill: Skill.Attack },
      { amount: 35000, skill: Skill.Defence },
      { amount: 20000, skill: Skill.Strength },
      { amount: 20000, skill: Skill.Hitpoints },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [
      { description: 'Ability to wield the Dragon scimitar (60 Attack required)' },
      { description: 'Full access to Ape Atoll' },
    ],
  },
  series: 'Gnome',
  shortName: 'monkeyMadnessI',

  startLocation: 'King Narnode Shareen, Grand Tree',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Monkey_Madness_I',
};

export default MonkeyMadness;
