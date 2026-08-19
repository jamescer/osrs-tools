import { QuestRequirement , LevelRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const HauntedMine: Quest = {
  age: 'Fifth Age',
  description: 'Explore an abandoned mine in Morytania in search of a glowing crystal, but beware the darkness within.',
  difficulty: QuestDifficulty.Experienced,
  id: 53,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Haunted Mine',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Priest in Peril'),
    new LevelRequirement(Skill.Crafting, 35, true),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 22000, skill: Skill.Strength }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'hauntedMine',

  startLocation: 'Zealot, Abandoned Mine, south-western Morytania',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Haunted_Mine',
};

export default HauntedMine;
