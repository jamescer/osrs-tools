import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MonkeyMadnessII: Quest = {
  age: 'Fifth Age',
  description: 'Return to Ape Atoll to confront Glough and his army of enhanced demonic gorillas threatening Gielinor.',
  difficulty: QuestDifficulty.Grandmaster,
  id: 71,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'Monkey Madness II',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Monkey Madness I'),
    new QuestRequirement('Recipe for Disaster'),
    new QuestRequirement('Enlightened Journey'),
    new QuestRequirement('The Eyes of Glouphrie'),
    new QuestRequirement('Tree Gnome Village'),
    new QuestRequirement('The Grand Tree'),
    new QuestRequirement('Troll Stronghold'),
    new QuestRequirement('Watchtower'),
    new LevelRequirement(Skill.Agility, 55, false),
    new LevelRequirement(Skill.Thieving, 55, false),
    new LevelRequirement(Skill.Firemaking, 60, false),
    new LevelRequirement(Skill.Hunter, 60, false),
    new LevelRequirement(Skill.Crafting, 70, false),
    new LevelRequirement(Skill.Slayer, 69, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 80000, skill: Skill.Slayer },
      { amount: 60000, skill: Skill.Agility },
      { amount: 50000, skill: Skill.Thieving },
      { amount: 50000, skill: Skill.Hunter },
    ],
    items: [],
    lamps: [
      {
        amount: 50000,
        note: '2 lamps from Duke, each giving 50,000 XP in a combat skill (Magic, Ranged, Attack, Defence, or Strength)',
        skillRestriction: 'Magic, Ranged, Attack, Defence, or Strength',
      },
    ],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: 'Gnome',
  shortName: 'monkeyMadnessII',
  startLocation: 'King Narnode Shareen, the Grand Tree',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Monkey_Madness_II',
};

export default MonkeyMadnessII;
